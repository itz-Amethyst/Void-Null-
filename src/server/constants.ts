// function env(key: string) {
// 	const value = process.env[key];
// 	if (!value) {
// 		throw new Error(`Missing environment variable ${key}`);
// 	}
// 	return value;
// }

export const DISCORD_ID = "1001889586626175006";
export const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
export const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK;
// export const LAST_FM_API_KEY = env('LAST_FM_API_KEY');
export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
export const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
// export const GRAPHQL_URL = env('NEXT_PUBLIC_GRAPHQL_URL');
// export const SPOTIFY_REDIRECT_URI = 'http://localhost:3000/api/spotify/oauth';

export const REDIS_URL = process.env.REDIS_URL;

export enum SPOTIFY_REDIS_KEYS {
	AccessToken = 'spotify:access_token',
	RefreshToken = 'spotify:refresh_token',
}