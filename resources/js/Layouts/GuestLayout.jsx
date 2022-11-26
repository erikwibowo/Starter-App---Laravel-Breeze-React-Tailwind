import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div className={"items-center w-full sm:max-w-md " + (route().current() == 'login' ? 'flex justify-center':'grid grid-cols-3 gap-2')}>
                <Link href={route('login')} className={"justify-start " + (route().current() == 'login' ? 'hidden':'flex')}>
                    <ChevronLeftIcon className="w-4 h-4 ml-2 fill-current dark:text-gray-300" />
                    <p className="hidden sm:block text-sm ml-1 dark:text-gray-300">Kembali</p>
                </Link>
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <ApplicationLogo className="w-8 h-8 fill-current text-gray-500" />
                    </Link>
                    <p className="text-lg ml-2 dark:text-gray-300">Laravel</p>
                </div>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
