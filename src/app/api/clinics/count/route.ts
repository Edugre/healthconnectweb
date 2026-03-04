import { NextResponse } from 'next/server';
import { getClinicsCount } from '@/lib/clinicSearch';

export async function GET() {
  try {
    const count = await getClinicsCount();
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
