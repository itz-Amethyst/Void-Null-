// function env(key: string) {
// 	const value = process.env[key];
// 	if (!value) {
// 		throw new Error(`Missing environment variable ${key}`);
// 	}
// 	return value;
// }

export const Github_UserName = "itz-amethyst";
export const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1105968684578635897/Wog3YzaglcymXetvZzI1PKey3Xu7BEX0V_qSm_71zzJt36C0J-LbYPXyjULdEK9HFEQU";
export const LAST_FM_API_KEY = "";
export const SPOTIFY_CLIENT_ID = "85aae2651907440ca6b08e178ace949e";
export const SPOTIFY_CLIENT_SECRET = "f50d333dca744b1195908274da58653e";
export const GRAPHQL_URL = "";
export const REDIS_URL = "";

export const DISCORD_ID = '1001889586626175006';

// export const Github_UserName = env('Github_UserName')
// export const DISCORD_WEBHOOK = env('DISCORD_WEBHOOK');
// export const LAST_FM_API_KEY = env('LAST_FM_API_KEY');
// export const SPOTIFY_CLIENT_ID = env('SPOTIFY_CLIENT_ID');
// export const SPOTIFY_CLIENT_SECRET = env('SPOTIFY_CLIENT_SECRET');
// export const GRAPHQL_URL = env('NEXT_PUBLIC_GRAPHQL_URL');
export const SPOTIFY_REDIRECT_URI = 'http://localhost:3000/api/spotify/oauth';

// export const REDIS_URL = env('REDIS_URL');

// export enum SPOTIFY_REDIS_KEYS {
// 	AccessToken = 'spotify:access_token',
// 	RefreshToken = 'spotify:refresh_token',
// }

export enum SPOTIFY_REDIS_KEYS {
	AccessToken = 'BQADfpPXyEyBXAdPGYxPjnZt5jMv24cSNwLuOfJ1rX4BkU32JkgEYaZnDefbv_B4M-lQF8IOCpQgBCGiUDFU-R-aM6oQ0VtJ_C0v0SeXs3jVOB2Yy5DbFWBnPirrXd_qAYtZ-io3OkVGngJP5TC_LAD-ja7eQHQY7bO5XqPWzfE9dGfrL98fc_hAZtKziYRLJGlAsbKVktpBOUq3P8-0uIEIdTXoHsVbTARSm4y2q8pRG0-Wmflrxnhmtma0A-M9jFsJ6Hn4VJbbCnrHHYEX5EDBxw',
	RefreshToken = 'AQAqg0bSJ9fdQBWxAm8KxOTaeNp7Jey1uhSzB9gIAenGlH65vZKQToTl6kQrM3IaDn4ksdM9LkfHCmikil4Gt-n4alsuYxppKCLGRx9hKL3v2x8jKVRZM1nXLYa6T8pMlkI',
}
