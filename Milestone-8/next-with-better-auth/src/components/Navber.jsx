import { useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navber = () => {
    const {}= useSession();
    return (
        <div>
            <nav className='flex justify-between container mx-auto p-4 items-center'>
                <div><span className='text-2xl font-bold'>LOGO</span></div>
                <div>
                    <ul>
                        <Link href="/" className='border-b'>Home </Link>

                    </ul>
                </div>
                <Link href="/auth/signup">
                     <Button variant="outline" className='text-white'>SignUP</Button>
                </Link>

            </nav>  
        </div>
    );
};

export default Navber;