import ms from '@naval-base/ms';
import clsx from 'clsx';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaHashtag } from 'react-icons/fa';
import { HiExternalLink , HiOutlineExternalLink } from 'react-icons/hi';
import { MdExplicit } from 'react-icons/md';
import { SiSpotify } from 'react-icons/si';
import { useLanyard } from 'use-lanyard';
import Banner from '../../public/banner.jpg';
import { Details } from '../components/details';
import { CardHoverEffect , hoverClassName } from '../components/hover-card';
import { Modal } from '../components/modal';
import { Time } from '../components/time';
import {
	DISCORD_ID,
} from '../server/constants';

import { formatList } from '../util/list';
import TrackObjectFull = SpotifyApi.TrackObjectFull;
import AlbumObjectFull = SpotifyApi.AlbumObjectFull;

dayjs.extend(relativeTime);

interface Props {
	topTracks: TrackObjectFull[];
}


export default function AboutPage({ topTracks }: Props) {

	const { data: user } = useLanyard(DISCORD_ID);

	return (
		<div className="space-y-8">
			<h1 className="block text-3xl sm:text-4xl md:text-6xl font-bold">About</h1>
			<div className="hover:text-gray-900 transition-all text-gray-900/30 dark:text-white/20 dark:hover:text-white/100">
				<Image
					alt="Does he look like octane in apex legend"
					src={Banner}
					width={1100}
					height={600}
					placeholder="blur"
					className="block object-cover rounded-xl border-2 border-white"
				/>
				<span className="text-sm not-sr-only">Does he look like octane in apex legend 🗿</span>
			</div>
			<p className="opacity-80">
				Yo Yo What's up Booooooooooys! My name's Milad! I'm a software engineer currently based in Tehran. I love spending time
				with my friends, writing code, watching Series , and playing games. I Writed my first Hello World in 2021
				-- Big man in his suit of armour. Take that off, and what are you? Genius, billionaire, playboy, philanthropist. -- Tony Stark
			</p>

			<h2 className="text-3xl font-bold" id="music">
				<a href="#music">
					<FaHashtag size={18} className="inline -mt-1" />
				</a>{' '}
				Music
			</h2>

			<p>
				I listen to a lot of Spotify and have always had a passion for music ever since . Over the last 12 months, I've
				{/* played the song <span className="font-bold">{randomLastFMTrack.name}</span> by{' '}
				<span className="font-bold">{randomLastFMTrack.artist.name}</span> exactly{' '}
				<span className="font-bold">{randomLastFMTrack.playcount}</span> times! Below you can find an up-to-date */}
				collection of my favourite songs of all time.
			</p>

			
				{/* {topTracks.map((track) => (
					<Track key={track.id} track={track} />
				))} */}

		<div className='mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16'>
			<CardHoverEffect className="col-span-3 h-52">
				{!user?.spotify || !user.spotify.album_art_url ? (
					<a
						href="https://open.spotify.com/playlist/18R9Cntl2PZEaGMLz4cyX2"
						target="_blank"
						rel="noopener noreferrer"
						className={clsx('group relative flex h-full overflow-hidden rounded-2xl', hoverClassName)}
					>
						<span className="absolute inset-0 -z-10">
							<img
								src={'https://i.scdn.co/image/ab67706c0000da84ede0db7eb64b033f135a492c'}
								className="absolute inset-0 h-full w-full bg-black  object-cover object-center brightness-50"
								alt="Album cover art"
							/>
						</span>
						<span className="flex flex-1 flex-col justify-between p-6 text-white">
							<span className="flex justify-between">
								<SiSpotify className="text-2xl" />
								<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>
							<div className="space-y-0.5">
								<h2 className="font-title font-bold">
									<span className="font-medium">playlist:</span>early travel
								</h2>
								<p className="text-sm">because you had to get a 3 hour bus journey in the early hours</p>
							</div>
						</span>
					</a>
				) : (
					<a
						href={`https://open.spotify.com/track/${user.spotify.track_id}`}
						target="_blank"
						rel="noopener noreferrer"
						className={clsx('group relative flex h-full overflow-hidden rounded-2xl', hoverClassName)}
					><span className="absolute inset-0 -z-10">
							<img
								src={user.spotify.album_art_url}
								className="absolute inset-0 h-full w-full bg-black object-cover object-center brightness-50 transition-all duration-500 will-change-[transform,_filter] group-hover:scale-[1.15] group-hover:brightness-[0.4]"
								alt="Album cover art"
							/>
						</span>
						<span className="flex flex-1 flex-col justify-between p-6 text-white">
							<span className="flex justify-between">
								<SiSpotify className="text-2xl" />
								<HiOutlineExternalLink className="text-xl opacity-50 transition duration-500 group-hover:opacity-100" />
							</span>
							<span>
								<h2>
									<span
										className="mb-0.5 mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-green-500"
										aria-hidden
									/>{' '}
									Listening to{' '}
									<span className="font-bold" suppressHydrationWarning>
										{user.spotify.song}
									</span>{' '}
									by{' '}
									<span className="font-bold" suppressHydrationWarning>
										{formatList(user.spotify.artist.split('; '), 'conjunction')}
									</span>
									.
								</h2>
							</span>
						</span>
					</a>
				)}
			</CardHoverEffect>
			<Time/>
			</div>

			</div>
		
	);
}

// function Track({ track }: { track: TrackObjectFull }) {
// 	const [statsOpen, setStatsOpen] = useState(false);

// 	const image = track.album.images[0].url;
// 	const artists = track.artists.map((artist) => artist.name).join(', ');

// 	const close = () => {
// 		setStatsOpen(false);
// 	};

// 	const open = () => {
// 		setStatsOpen(true);
// 	};

// 	const album = track.album as AlbumObjectFull;

// 	return (
// 		<button
// 			key={track.id}
// 			type="button"
// 			className="group flex flex-col space-y-2 text-left no-underline align-top focus:ring focus:ring-offset-4 dark:focus:ring-offset-gray-900 outline-none focus:outline-none"
// 			aria-roledescription="Opens a stats modal"
// 			onClick={open}
// 		>
// 			<Modal isOpen={statsOpen} setIsOpen={close} title={<SiSpotify size={24} />}>
// 				<div className="space-y-4">
// 					<div className="relative aspect-[3/1]">
// 						<Image
// 							src={image}
// 							layout="fill"
// 							alt={`Album cover art of ${track.album.name} by ${artists}`}
// 							className="object-cover rounded-md"
// 						/>
// 					</div>

// 					<a
// 						href={track.external_urls.spotify}
// 						className="group flex justify-between p-3 no-underline bg-gray-100 dark:bg-gray-900 rounded-md border dark:border-0"
// 						target="_blank"
// 						rel="noreferrer"
// 					>
// 						<div>
// 							<h2 className="text-2xl font-bold group-hover:underline">{track.name}</h2>
// 							<h3 className="text-sm italic text-gray-400">By {artists}</h3>
// 						</div>

// 						<div>
// 							<HiExternalLink size={24} />
// 						</div>
// 					</a>

// 					<div>
// 						<Details
// 							details={[
// 								{
// 									name: 'Released:',
// 									value: (
// 										<span>
// 											{dayjs(album.release_date).fromNow()} ({dayjs(album.release_date).format('DD MMM YYYY')})
// 										</span>
// 									),
// 								},
// 								{
// 									name: 'Album:',
// 									value: album.name,
// 								},
// 								{
// 									name: 'Duration:',
// 									value: ms(track.duration_ms, true),
// 								},
// 							]}
// 						/>
// 					</div>
// 				</div>
// 			</Modal>

// 			<div className="overflow-hidden w-full rounded-md image-span-block">
// 				<Image
// 					src={image}
// 					className="group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 grayscale-[50%]"
// 					alt={`Album cover art for ${track.name} by ${artists}`}
// 					width={400}
// 					height={400}
// 				/>
// 			</div>

// 			<h2 className="py-0.5 text-lg">
// 				<span className="font-bold">
// 					{track.explicit && <MdExplicit className="inline -mt-1" />} {track.name}
// 				</span>{' '}
// 				<span className="text-neutral-700 dark:text-neutral-400">• {artists}</span>
// 			</h2>
// 		</button>
// 	);
// }