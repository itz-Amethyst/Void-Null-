/** @type {import('next').NextConfig} */
module.exports = {
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
			}
		];
	},
};
