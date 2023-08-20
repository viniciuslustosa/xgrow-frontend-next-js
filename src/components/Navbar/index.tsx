"use client";

import Link from "next/link";
import Image from 'next/image'
import { Home, Notifications } from '@mui/icons-material';
import Icon from "@/icons";
import { useAuth } from '@/contexts/AuthContext';

const styles = {
    contentInfo: {
        base: 'flex flex-row divide-x divide-slate-700 gap-7',
        icons: 'flex gap-5 text-white',
        user: 'flex gap-3 items-center pl-6'
    }
}

export function Navbar() {
    const { user } = useAuth();
    return (
        <nav className="bg-black-2 p-4">
          <div className="mx-auto flex justify-between items-center">
            <Link href="/">
                <Image
                    src="/images/logo-xgrow.png"
                    alt="XGROW"
                    width={160}
                    height={40}
                />
            </Link>
            <div className={styles.contentInfo.base}>
                <div className={styles.contentInfo.icons}>
                    <div className="rounded-full bg-black-80 p-2">
                        <Home  />
                    </div>
                    <div className="rounded-full bg-black-80 p-2">
                        <Notifications />
                    </div>
                </div>
                <div className={styles.contentInfo.user}>
                    <Icon name="UserLogged" size={42}></Icon>
                    <span className="text-white font-bold">
                        { user?.email }
                    </span>
                </div>
            </div>
          </div>
        </nav>
      );
    };