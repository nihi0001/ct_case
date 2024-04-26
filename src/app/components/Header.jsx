import Link from 'next/link';

export default function Header() {
    // const res = await fetch(`https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`);
    // const menu = await res.json();

  return (
    <>
    <nav className='fixed bottom-0 bg-yellow-100 w-full md:relative'>
        <ul className='grid grid-cols-3 p-3 text-center items-center'>
            <li>
                <Link href={"/check"} prefetch={false}>Check Website</Link>
            </li>
            <li>
                <Link className='inline-flex' href={"/home"} prefetch={false}>
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

