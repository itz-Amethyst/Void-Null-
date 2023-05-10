import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { Router } from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import React, { ReactNode, StrictMode, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { SWRConfig } from 'swr';
import { DISCORD_ID, Song } from '../components/song';

import 'react-tippy/dist/tippy.css';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import 'nprogress/nprogress.css';
import { fetcher } from '../util/fetcher';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function NavLink(props: { children: ReactNode; href: string; closeMenu?: () => void; target?: string }) {
	return (
		<li>
			<Link href={props.href}>
				<a
					className="block sm:inline-block py-3 sm:px-5 font-mono text-lg sm:text-sm sm:font-normal dark:hover:text-white no-underline sm:underline rounded-md sm:rounded-full dark:sm:hover:bg-white/10 sm:bg-white/0 sm:hover:bg-gray-900/5"
					onClick={props.closeMenu}
					target={props.target}
				>
					{props.children}
				</a>
			</Link>
		</li>
	);
}

export default function App({ Component, pageProps }: AppProps) {
	const [mobileMenuOpen, setMenuOpen] = useState(false);
	const [hasScrolled, setHasScrolled] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((old) => !old);
	};

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
			return;
		}

		document.body.style.overflow = 'unset';
	}, [mobileMenuOpen]);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const listener = () => {
			setHasScrolled(window.scrollY > 20);
		};

		document.addEventListener('scroll', listener);

		return () => {
			document.removeEventListener('scroll', listener);
		};
	}, []);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const navLinks = (
		<>
			<NavLink href="/" closeMenu={closeMenu}>
				/
			</NavLink>
			<NavLink href="/about" closeMenu={closeMenu}>
				/about
			</NavLink>
			<NavLink href="/talk" closeMenu={closeMenu}>
				/talk
			</NavLink>
			{/* <NavLink href="https://blog.fyko.net" target="_blank" closeMenu={closeMenu}>
				blog
			</NavLink> */}
		</>
	);

	return (
		<StrictMode>
			<SWRConfig
				value={{
					fallback: {
						// SSR Lanyard's data
						[`lanyard:${DISCORD_ID}`]: pageProps?.lanyard as unknown,
						'https://gh-pinned.nxl.sh/api/user/fyko': pageProps?.pinnedRepos as unknown,
					},
					fetcher,
				}}
			>
				<Toaster toastOptions={{ position: 'top-left' }} />

				<Head>
					<title>Carter Himmel</title>
				</Head>

				<AnimatePresence>
					{mobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							className="sm:hidden fixed inset-0 z-10 py-24 px-8 space-y-2 bg-white dark:bg-gray-900"
						>
							<h1 className="text-4xl font-bold">Menu.</h1>

							<ul className="grid grid-cols-1 gap-2">{navLinks}</ul>
						</motion.div>
					)}
				</AnimatePresence>

				<div className="sm:hidden overflow-hidden sticky top-0 z-20 h-32 transition-all">
					<div
						className={`${
							hasScrolled || mobileMenuOpen ? 'mt-0' : 'mt-10 mx-5'
						} bg-gray-100 dark:bg-gray-900 relative transition-all ${
							hasScrolled || mobileMenuOpen ? 'rounded-none' : 'rounded-lg'
						}`}
					>
						<div
							className={`pr-5 flex justify-between transition-colors space-x-2 ${
								mobileMenuOpen ? 'bg-gray-100 dark:bg-gray-800' : 'bg-transparent'
							}`}
						>
							<button
								type="button"
								className="block relative z-50 px-2 text-gray-500 focus:ring transition-all"
								onClick={toggleMenu}
							>
								<Hamburger toggled={mobileMenuOpen} size={20} color="currentColor" />
							</button>

							<div className="overflow-hidden py-2 px-1">
								<Song />
							</div>
						</div>
					</div>
				</div>

				<div className="py-10 px-5 mx-auto max-w-4xl">
					<div className="hidden sm:flex items-center space-x-2">
						<nav className="flex-1">
							<ul className="flex space-x-4">{navLinks}</ul>
						</nav>

						<div className="overflow-hidden py-2 px-1">
							<Song />
						</div>
					</div>

					<main className="md:py-24 mx-auto space-y-12 max-w-3xl">
						<Component {...pageProps} />
					</main>

					<footer className="p-4 py-10 mx-auto mt-20 max-w-3xl border-t-2 border-gray-900 dark:border-white border-opacity-10 opacity-50">
						<h1 className="text-3xl font-bold">CallMe_Milad</h1>
						<p>Software Engineer • {new Date().getFullYear()}</p>
					</footer>
				</div>
			</SWRConfig>
			<Script src="https://science.fyko.net/latest.js" />
			<noscript>
				<img src="https://science.fyko.net/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" />
			</noscript>
		</StrictMode>
	);
}
