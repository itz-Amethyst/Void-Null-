import clsx from 'clsx';

import { GetStaticProps } from 'next';
import Image from 'next/image';
import { FaHashtag } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { SiSpotify } from 'react-icons/si';
import { Data } from 'use-lanyard';
import City from '../../public/city.jpg'
import Me from '../../public/me.jpg'
import { Discord } from '../components/discordComponent';
import { CardHoverEffect , hoverClassName } from '../components/hover-card';
import { Time } from '../components/time';
import { useUpdatingLanyard } from '../hooks/lanyard';
import {
	DISCORD_ID,
} from '../server/constants';

import { getLanyard } from '../server/lanyard';
import { formatList } from '../util/list';

interface Props{
	user: Data;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const user = await getLanyard(DISCORD_ID);

	return {
		revalidate: 10,
		props: {user},
	};
};


// export default function AboutPage({ topTracks }: Props) {
export default function AboutPage(props: Props) {

	const { data: user } = useUpdatingLanyard(DISCORD_ID , props.user);

	const status = user?.discord_status ?? 'offline';

	return (
		<div className="space-y-8">
			<h1 className="block text-3xl sm:text-4xl md:text-6xl font-bold">About</h1>
			<div className="hover:text-gray-900 transition-all text-gray-900/30 dark:text-white/20 dark:hover:text-white/100">
				<Image
					alt="Does he look like octane in apex legend"
					src={Me}
					width={1100}
					height={600}
					placeholder="blur"
					className="block object-cover rounded-xl border-2 border-white"
				/>
				<span className="text-sm not-sr-only">Find me ヾ(⌐■_■)ノ♪  🗿</span>
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
				I listen to a lot of Spotify and have always had a passion for music ever since . You can see what song I am listening to now , and some info ...
			</p>

			<div className='mx-auto grid max-w-3xl grid-cols-6 gap-6 px-6 pb-40 pt-16'>
				<CardHoverEffect className="col-span-3 h-52">
					{!user?.spotify || !user.spotify.album_art_url ? (
						<a
							href="https://open.spotify.com/playlist/3l2PLKHvLCcijwMBAylwd3?si=0bb52d842688495b"
							target="_blank"
							rel="noopener noreferrer"
							className={clsx('group relative flex h-full overflow-hidden rounded-2xl no-underline', hoverClassName)}
						>
							<span className="absolute inset-0 -z-10">
								<Image
									src={City}
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
										<span className="font-medium">playlist:</span>Listen anywhere
									</h2>
									<p className="text-sm">Listen everywhere you want ...</p>
								</div>
							</span>
						</a>
					) : (
						<a
							href={`https://open.spotify.com/track/${user.spotify.track_id}`}
							target="_blank"
							rel="noopener noreferrer"
							className={clsx('group relative flex h-full overflow-hidden rounded-2xl no-underline', hoverClassName)}
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

				<Discord lanyard={user} status={status}/>
			</div>

		</div>
		
	);
}