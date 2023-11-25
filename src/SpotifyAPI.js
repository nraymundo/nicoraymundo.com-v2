import querystring from "querystring";
import {Buffer} from 'buffer';

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const client_id = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_REACT_APP_SPOTIFY_REFRESH_TOKEN;
const getAccessToken = async () => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });
    
    return response.json();
};

export const getNowPlaying = async (client_id, client_secret, refresh_token) => {
  const { access_token } = await getAccessToken(
      client_id,
      client_secret,
      refresh_token
  );
  return fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
          Authorization: `Bearer ${access_token}`,
      },
  });
};

export default async function getNowPlayingItem() {
  const response = await getNowPlaying(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
      return false;
  }
  const song = await response.json();
  console.log(song);
  const title = song.items[0].track.name;
  const url = song.items[0].track.external_urls.spotify;
  
  return { title, url };
}