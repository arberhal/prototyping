import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';

let cachedToken: null | { value: string; expires: number };

export async function getSpotifyToken() {
  if (cachedToken?.expires > Date.now()) {
    return cachedToken.value;
  }

  const basic = Buffer
    .from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)
    .toString('base64');

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
  });

  const { access_token, expires_in } = await res.json();

  cachedToken = {
    value: access_token,
    expires: Date.now() + expires_in * 1000, // ohne 1-Minuten-Puffer
  };

  return access_token;
}

export async function getTopHouseArtists(limit = 3) {
  const token = await getSpotifyToken();
  const res = await fetch(
    `https://api.spotify.com/v1/search?q=genre:"house, dance"&type=artist&limit=${limit}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (!res.ok) {
    throw new Error('Spotify search failed');
  }

  return (await res.json()).artists.items;
}
