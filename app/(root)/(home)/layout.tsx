import React from 'react';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='relative'>
            <Sidebar />
            <div className='flex'>
                <Navbar />

                <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                    <div className='w-full'>
                        {children}
                    </div>
                </section>
            </div>
        </main>
    )
}
