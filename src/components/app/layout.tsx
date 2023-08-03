import React, { PropsWithChildren } from "react";
import { Sidebar } from '@/components/app/sidebar';
import { Navbar } from '@/components/app/navbar'; const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className='flex w-full h-full'>
            <Sidebar />
            <div className='flex flex-col w-full'>
                <Navbar />
                <div className='w-full h-full p-10 text-gray-700 '>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Layout;