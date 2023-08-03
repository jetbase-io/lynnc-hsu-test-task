"use client";
import Icon from '@mdi/react';
import { mdiMenuOpen } from '@mdi/js';
import { useSidebarStore } from '@/lib/store';
export function Navbar() {
    const { toggle, isMaximized } = useSidebarStore();

    return (
        <div className='shadow-lg h-[60px] bg-gray-100 text-black  flex items-center justify-between  px-4 py-2'>
            <div className='flex gap-x-4'>
                <div className='transition-all duration-500 ease-linear cursor-pointer' onClick={toggle}>
                    <Icon path={mdiMenuOpen} className={(isMaximized ? " " : "scale-x-[-1]")} size={1} />
                </div>
                <div className='flex '>
                    {["App", 'Products', "Search Products"].map((item, index) => (
                        <div key={index}>
                            <span className={(index == 0 ?
                                'text-black font-bold cursor-pointer' : 'text-gray-400')}>{item}</span>
                            <span className={'px-2 text-gray-400 ' + (index == 2 ? 'hidden' : '')}  >/</span>
                        </div>

                    ))}
                </div>
            </div>
            <div className='flex'>
                <div className='text-base font-medium text-gray-700'>Username</div>
            </div>
        </div>
    )
}