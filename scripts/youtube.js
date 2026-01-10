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

async function fetchMostLiked() {
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=id&order=date&maxResults=50&type=video`;
  const searchRes = await fetch(searchUrl);
  const searchData = await searchRes.json();

  if (searchData.error || !searchData.items?.length) return null;

  const videoIds = searchData.items.map(item => item.id.videoId).join(',');

  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=snippet,statistics`;
  const videoRes = await fetch(videoUrl);
  const videoData = await videoRes.json();

  const videos = videoData.items || [];
  if (videos.length === 0) return null;

  const mostLiked = videos.reduce((prev, curr) => {
    const prevLikes = Number(prev.statistics.likeCount || 0);
    const currLikes = Number(curr.statistics.likeCount || 0);
    return currLikes > prevLikes ? curr : prev;
  });

  return {
    id: mostLiked.id,
    title: mostLiked.snippet.title,
    thumbnail: mostLiked.snippet.thumbnails.medium.url,
    likes: Number(mostLiked.statistics.likeCount),
    url: `https://www.youtube.com/watch?v=${mostLiked.id}`,
  };
}

async function updateCache() {
  try {
    const [mostViewed, mostLiked] = await Promise.all([
      fetchMostViewed(),
      fetchMostLiked(),
    ]);

    await supabase.from('youtube_cache').upsert([
      { key: 'most_viewed', value: mostViewed },
      { key: 'most_liked', value: mostLiked },
    ]);

    console.log('Cache updated successfully!');
  } catch (err) {
    console.error('Cache update failed:', err);
    process.exit(1); 
  }
}

updateCache();