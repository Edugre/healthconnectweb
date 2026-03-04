// src/app/api/clinics/search/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { searchClinics } from '@/lib/clinicSearch';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const zipParam = searchParams.get('zip');
  const careTypeParam = searchParams.getAll('careType'); // can appear multiple times
  const query = searchParams.get('q') || undefined;
  const clinicType = searchParams.get('clinicType') || undefined;
  const insurance = searchParams.get('insurance') || undefined;
  const language = searchParams.get('language') || undefined;
  const clinicId = searchParams.get('clinicId') || undefined;

  const zip = zipParam || undefined;
  const careTypes = careTypeParam.filter(Boolean) as any[];

  try {
    const clinics = await searchClinics({
      clinicId,
      zip,
      careTypes,
      query,
      clinicType: clinicType as any,
      insurance: insurance as any,
      language,
    });
    return NextResponse.json({ clinics });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}