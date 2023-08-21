"use client";

import { NextPage } from 'next'
import Image from 'next/image'
import { Send } from '@mui/icons-material';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ChangeEvent, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation'

const styles = {
  main: 'flex flex-col gap-5 justify-center',
  text: {
    textInfo: "text-4xl font-bold flex flex-col text-right",
    colorGreen: "text-green-secondary mt-3",
  },
  icon: "text-base"
}

const AccountsPage: NextPage = (props) => {
  const router = useRouter();

  const accounts = [];
  return (
    <div className={styles.main}>
      <div className="flex flex-col gap-2">
        <span>
          Contas salvas no dispositivo
        </span>
        <span className="text-sm max-w-sm font-light text-gray-secondary-60">
          Entre com uma das contas salvas ou faça login em uma outra conta.
        </span>
      </div>
      <div>

      </div>
      <div>
        <Button onClick={() => router.push('/login')}>
          Fazer login com outra conta
        </Button>
      </div>
      <div>
        <Image
          src="/images/site-blindado.png"
          alt="Logo Xgrow"
          width={100}
          height={22}
        />
      </div>
    </div>
  )
}

export default AccountsPage;