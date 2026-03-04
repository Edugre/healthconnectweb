// src/lib/clinicSearch.ts
import { supabase } from './supabaseClient';

export type CareType =
  | 'primary_care'
  | 'pediatrics'
  | 'dental'
  | 'mental_health'
  | 'obgyn'
  | 'urgent_care'
  | 'other';

export type InsuranceFilter =
  | 'uninsured'
  | 'medicaid'
  | 'medicare'
  | 'sliding_scale';

export interface ClinicSearchFilters {
  clinicId?: string;
  zip?: string;
  careTypes?: CareType[];
  query?: string;
  clinicType?: 'clinic' | 'mental-health' | 'pharmacy';
  insurance?: InsuranceFilter;
  language?: string;
}

export async function searchClinics(filters: ClinicSearchFilters) {
  const {
    clinicId,
    zip,
    careTypes = [],
    query,
    clinicType,
    insurance,
    language,
  } = filters;

  let queryBuilder = supabase.from('clinics').select('*');

  if (clinicId) {
    queryBuilder = queryBuilder.eq('id', clinicId);
  }

  if (zip && zip.trim().length > 0) {
    queryBuilder = queryBuilder.eq('zip', zip.trim());
  }

  if (careTypes.length > 0) {
    // Equivalent to SQL: WHERE care_types && '{...}'::text[]
    queryBuilder = queryBuilder.overlaps('care_types', careTypes);
  }

  if (query && query.trim().length > 0) {
    const term = `%${query.trim()}%`;
    // Basic text search on name, description, and city
    queryBuilder = queryBuilder.or(
      `name.ilike.${term},description.ilike.${term},city.ilike.${term}`
    );
  }

  if (clinicType) {
    queryBuilder = queryBuilder.eq('clinic_type', clinicType);
  }

  if (insurance === 'uninsured') {
    queryBuilder = queryBuilder.eq('uninsured_accepted', true);
  } else if (insurance === 'medicaid') {
    queryBuilder = queryBuilder.eq('medicaid_accepted', true);
  } else if (insurance === 'medicare') {
    queryBuilder = queryBuilder.eq('medicare_accepted', true);
  } else if (insurance === 'sliding_scale') {
    queryBuilder = queryBuilder.eq('sliding_scale', true);
  }

  if (language) {
    // Require the clinic to list this language
    queryBuilder = queryBuilder.contains('languages', [language]);
  }

  // Basic ranking: prioritize low-income focus and financial accessibility
  queryBuilder = queryBuilder
    .order('low_income_focused', { ascending: false })
    .order('sliding_scale', { ascending: false })
    .order('uninsured_accepted', { ascending: false })
    .order('name', { ascending: true });

  const { data, error } = await queryBuilder;

  if (error) {
    console.error('Error searching clinics', error);
    throw error;
  }

  return data;
}

// Backwards-compatible helper used by existing call sites that only care about
// ZIP and care types.
export async function searchClinicsByZipAndCare(
  zip: string,
  careTypes: CareType[] = []
) {
  return searchClinics({ zip, careTypes });
}

/** Returns total number of clinics in the database (for hero stats, etc.). */
export async function getClinicsCount(): Promise<number> {
  const { count, error } = await supabase
    .from('clinics')
    .select('*', { count: 'exact', head: true });
  if (error) throw error;
  return count ?? 0;
}