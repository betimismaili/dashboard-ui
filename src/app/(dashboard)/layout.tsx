import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex'>
			{/*LEFT*/}
			<div className='w-[15%] md:w-[8%] lg:w-[17%] xl:w-[15%] p-4'>
				<Link
					href='/'
					className='flex items-center justify-center lg:justify-start gap-2'
				>
					<Image src='/logo.png' alt='Logo' width={32} height={32} />
					<span className='hidden lg:block font-bold'>SchoolMGMT</span>
				</Link>
				<Menu />
			</div>
			{/*RIGHT*/}
			<div className='w-[85%] md:w-[92%] lg:w-[83%] xl:w-[85%] bg-[#f7f8fa] flex flex-col'>
				<Navbar />
				{children}
			</div>
		</div>
	);
}
