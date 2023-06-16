/** @type {import('next').NextConfig} */
module.exports = {

	env:{
		GITHUB_USERNAME : process.env.GITHUB_USERNAME,
		DISCORD_WEBHOOK : process.env.DISCORD_WEBHOOK,
		SPOTIFY_CLIENT_ID : process.env.SPOTIFY_CLIENT_ID,
		SPOTIFY_CLIENT_SECRET : process.env.SPOTIFY_CLIENT_SECRET,
		REDIS_URL : process.env.REDIS_URL
	},

	reactStrictMode: true,
	images: {
		domains: [
			'source.unsplash.com',
			'i.scdn.co',
			'cdn.discordapp.com',
		],
	},
	async redirects() {
		return [
			{
				source: '/onlyfans',
				destination: 'https://shattereddisk.github.io/rickroll/rickroll.mp4',
				permanent: false,
			},
			{
				source:'/firstSite',
				destination: 'https://callme-milad.pages.dev/',
				permanent: false,
			},
			{
				source: '/resume',
				destination: 'https://void-null.vercel.app/Milad-Khormaee-Resume.pdf',
				permanent: false
			}
		];
	},
};
