import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class Void_NullDocument extends Document {
	public render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/91905413?v=4%22" />
					<meta name="theme-color" content="#000000" />
					<meta name="description" content="Callme_Milad, Software Engineer" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
