"use client";
import Link from 'next/link';


    export default function Error(){
        return (
        
        <div className="flex justify-center items-center h-screen">
        <div className="text-center space-y-8">
            
        <article className="text-9xl text-bannerBlue font-semibold">
        <h1>404</h1>
        </article>
    
        <article className="text-xl font-medium">
        <h1>Vi kunne desværre ikke finde denne side</h1>
        </article>
    
    <Link href="/">
        <button className="bg-orange py-3 px-8 rounded-xl text-white mt-5 hover:bg-bannerBlue">Tilbage til forsiden</button>
    </Link>
        
        </div>
        </div>
            );
    }
        