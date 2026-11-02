const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_API_URL = "https://api.spotify.com/v1";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

export interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  isPlaying?: boolean;
  progress?: number;
  duration?: number;
}

export interface SpotifyResponse {
  isPlaying: boolean;
  track: SpotifyTrack | null;
}

async function getAccessToken(): Promise<string> {
  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token || "",
    }),
    cache: "no-store",
  });

  const data = await response.json();
  return data.access_token;
}

export async function getNowPlaying(): Promise<SpotifyResponse> {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(`${SPOTIFY_API_URL}/me/player/currently-playing`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (response.status === 204 || response.status > 400) {
      return { isPlaying: false, track: null };
    }

    const data = await response.json();

    if (!data.item) {
      return { isPlaying: false, track: null };
    }

    return {
      isPlaying: data.is_playing,
      track: {
        name: data.item.name,
        artist: data.item.artists.map((artist: { name: string }) => artist.name).join(", "),
        album: data.item.album.name,
        albumImageUrl: data.item.album.images[0]?.url || "",
        songUrl: data.item.external_urls.spotify,
        isPlaying: data.is_playing,
        progress: data.progress_ms,
        duration: data.item.duration_ms,
      },
    };
  } catch (error) {
    console.error("Error fetching now playing:", error);
    return { isPlaying: false, track: null };
  }
}

export async function getTopTracks(
  timeRange: "short_term" | "medium_term" | "long_term" = "short_term",
  limit: number = 10
): Promise<SpotifyTrack[]> {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(
      `${SPOTIFY_API_URL}/me/top/tracks?time_range=${timeRange}&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return data.items.map((track: {
      name: string;
      artists: { name: string }[];
      album: { name: string; images: { url: string }[] };
      external_urls: { spotify: string };
    }) => ({
      name: track.name,
      artist: track.artists.map((artist) => artist.name).join(", "),
      album: track.album.name,
      albumImageUrl: track.album.images[0]?.url || "",
      songUrl: track.external_urls.spotify,
    }));
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    return [];
  }
}

export async function getRecentlyPlayed(limit: number = 10): Promise<SpotifyTrack[]> {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(
      `${SPOTIFY_API_URL}/me/player/recently-played?limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return data.items.map((item: {
      track: {
        name: string;
        artists: { name: string }[];
        album: { name: string; images: { url: string }[] };
        external_urls: { spotify: string };
      };
    }) => ({
      name: item.track.name,
      artist: item.track.artists.map((artist) => artist.name).join(", "),
      album: item.track.album.name,
      albumImageUrl: item.track.album.images[0]?.url || "",
      songUrl: item.track.external_urls.spotify,
    }));
  } catch (error) {
    console.error("Error fetching recently played:", error);
    return [];
  }
}
