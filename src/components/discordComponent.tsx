import clsx from 'clsx';
import { SiDiscord } from 'react-icons/si';
import type { Data } from 'use-lanyard';

interface DiscordProps{
	lanyard: Data;
	status: 'online' | 'idle' | 'dnd' | 'offline';
};

export const Discord = ({ lanyard, status }: DiscordProps) =>{
	return(
		<div
					className={clsx(
						'col-span-3 flex h-52 items-center justify-center rounded-2xl text-4xl md:col-span-2',
						{
							online: 'bg-green-500 text-green-50',
							idle: 'bg-orange-400 text-orange-50 ',
							dnd: 'bg-red-500 text-red-50',
							offline: 'bg-blurple text-white/90',
						}[status],
					)}
				>
					<div className="transform-gpu space-y-1 text-center transition hover:-rotate-[-10deg] hover:scale-[1.1] md:scale-[0.8]">
						<div className="-rotate-[4deg] scale-[1] space-y-1 text-center md:scale-[1.2]">
							<h2>
								<SiDiscord className="inline" /> <span>{status}</span>
							</h2>

							<p className="text-base">
								{lanyard?.discord_user.username}#{lanyard?.discord_user.discriminator}
							</p>
						</div>
					</div>
		</div>
	)
};