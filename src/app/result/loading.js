import Skeleton from "react-laoding-skeleton";
import React from 'react';

export default function loading() {
  return (
    <main className=''>
        <header className=''>
            <div className=''>
                <h1 className=''>
                <Skeleton />
                </h1>
                <Skeleton width={} height={} circle={}/>
            </div>
            <div className=''>
            <Skeleton height={}/>
            </div>
        </header>

        <div className=''>
        <Skeleton count={}/>
        </div>
    </main>
  );
}
