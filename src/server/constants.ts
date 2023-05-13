function env(key: string) {
	const value = process.env[key];
	if (!value) {
		throw new Error(`Missing environment variable ${key}`);
	}
	return value;
}

export const DISCORD_ID = env('DISCORD_ID');
export const Github_UserName = env('Github_UserName')
export const DISCORD_WEBHOOK = env('DISCORD_WEBHOOK');
export const LAST_FM_API_KEY = env('LAST_FM_API_KEY');
export const SPOTIFY_CLIENT_ID = env('SPOTIFY_CLIENT_ID');
export const SPOTIFY_CLIENT_SECRET = env('SPOTIFY_CLIENT_SECRET');
export const GRAPHQL_URL = env('NEXT_PUBLIC_GRAPHQL_URL');
export const SPOTIFY_REDIRECT_URI = 'http://localhost:3000/api/spotify/oauth';

export const REDIS_URL = env('REDIS_URL');

export enum SPOTIFY_REDIS_KEYS {
	AccessToken = 'spotify:access_token',
	RefreshToken = 'spotify:refresh_token',
}