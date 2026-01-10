import { supabase } from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('youtube_cache')
      .select('*')
      .in('key', ['most_viewed', 'most_recent']);

    if (error || !data) {
      return NextResponse.json({ most_viewed: null, most_liked: null });
    }

    const mostViewed = data.find(d => d.key === 'most_viewed')?.value;
    const mostRecent = data.find(d => d.key === 'most_recent')?.value;

    return NextResponse.json({ most_viewed: mostViewed, most_recent: mostRecent });
  } catch (err) {
    console.error('YouTube cache fetch error:', err);
    return NextResponse.json({ error: 'Failed to load videos' }, { status: 500 });
  }
}