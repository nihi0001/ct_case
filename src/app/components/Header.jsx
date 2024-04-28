import Link from 'next/link';

export default function Header() {
    // const res = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
    // const menu = await res.json();

  return (
    <>

    <div className='bg-bannerBlue text-white p-1.5'>
    <img src="/diversa.svg" alt="logo" height={70} width={70} className='fill-white'	/>
    </div>

    
    <nav className='fixed bottom-0 bg-navBlue w-full md:relative'>
        <ul className='grid grid-cols-3 p-1 text-center items-center text-white font-medium'>
            <li>
                <Link href={"/"} prefetch={false}>Check Website</Link>
            </li>
            <li>
                <Link className='inline-flex' href={"/"} prefetch={false}>
                <img src="/icon.svg" alt="logo" height={50} width={50}/>
                </Link>
            </li>
            <li>
                <Link href={"/rules"} prefetch={false}>Regler</Link>
            </li>
        </ul>
    </nav>
    </>
  );
}


