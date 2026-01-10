require('dotenv').config(); 

const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

async function fetchMostViewed() {
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=id&order=viewCount&maxResults=1&type=video`;
  const searchRes = await fetch(searchUrl);
  const searchData = await searchRes.json();

  if (searchData.error || !searchData.items?.[0]) return null;

  const videoId = searchData.items[0].id.videoId;

  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoId}&part=snippet,statistics`;
  const videoRes = await fetch(videoUrl);
  const videoData = await videoRes.json();

  const video = videoData.items?.[0];
  if (!video) return null;

  return {
    id: video.id,
    title: video.snippet.title,
    thumbnail: video.snippet.thumbnails.medium.url,
    views: Number(video.statistics.viewCount),
    url: `https://www.youtube.com/watch?v=${video.id}`,
  };
}

async function fetchMostRecent() {
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=id,snippet&order=date&maxResults=1&type=video`;
  const searchRes = await fetch(searchUrl);
  const searchData = await searchRes.json();

  if (searchData.error || !searchData.items?.[0]) return null;

  const videoId = searchData.items[0].id.videoId;

  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoId}&part=snippet,statistics`;
  const videoRes = await fetch(videoUrl);
  const videoData = await videoRes.json();

  const video = videoData.items?.[0];
  if (!video) return null;

  return {
    id: video.id,
    title: video.snippet.title,
    thumbnail: video.snippet.thumbnails.medium.url,
    publishedAt: video.snippet.publishedAt, // optional: show upload date
    url: `https://www.youtube.com/watch?v=${video.id}`,
  };
}

async function updateCache() {
  try {
    const [mostViewed, mostRecent] = await Promise.all([
      fetchMostViewed(),
      fetchMostRecent(),
    ]);

    await supabase.from('youtube_cache').upsert([
      { key: 'most_viewed', value: mostViewed },
      { key: 'most_recent', value: mostRecent },
    ]);

    console.log('Cache updated successfully!');
  } catch (err) {
    console.error('Cache update failed:', err);
    process.exit(1); 
  }
}

updateCache();