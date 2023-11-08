import {
	RiEarthLine,
	RiEdit2Line,
	RiGithubLine,
	RiGlobeLine,
	RiToolsLine,
	RiTwitterLine,
} from 'react-icons/ri';

const Buttons = [
	{
		icon: RiGithubLine,
		link: 'https://github.com/xencodes',
	},

	{
		icon: RiTwitterLine,
		link: 'https://github.com/xencodes',
	},

	{
		icon: RiEarthLine,
		link: 'https://github.com/xencodes',
	},
];

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-r from-slate-900 to-slate-950 text-center'>
			<div className='flex justify-center flex-col items-center sm:items-start'>
				<p className='text-blue-300 mb-2 flex items-center gap-1'>
					<RiToolsLine />
					software engineer
				</p>
				<h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'>
					Monawwar Abdullah
				</h1>
			</div>

			<div className='flex text gap-4 text-slate-400'>
				{Buttons.map((button, idx) => (
					<a key={idx} href={button.link} target='_blank' rel='noreferrer'>
						<button.icon
							size={32}
							className='hover:text-green-300 hover:cursor-pointer'
						/>
					</a>
				))}
			</div>
		</main>
	);
}
