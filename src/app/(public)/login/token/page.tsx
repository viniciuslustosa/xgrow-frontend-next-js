"use client";

import { Button } from '@/components/Button';
import { NextPage } from 'next'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext';
import { ChangeEvent, useRef, useState } from 'react';
import { Input } from '@/components/Input';
import { Login } from '@mui/icons-material';

const styles = {
  main: 'flex flex-col gap-5 justify-center',
  text: {
    textInfo: "text-4xl font-bold flex flex-col text-right",
    colorGreen: "text-green-secondary mt-3",
  },
  icon: "text-base"
}

const TokenPage: NextPage = (props) => {
  const [code, setCode] = useState<string>('');
  const { user, Login } = useAuth()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleLogin = () => {
    try {
      if(user?.email && code) {
        console.log('teste');
        Login(user.email, code)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.main}>
      <div className="flex flex-col gap-2">
        <span>
          Insira o token de acesso
        </span>
        <span className="text-sm max-w-sm font-light text-gray-secondary-60">
          Para confirmar a sua identidade, digite o código que enviamos para o seu e-mail
          <strong>{ user?.email }</strong>
        </span>
      </div>
      <div>
        <Input
          type="text"
          value={code}
          onChange={handleInputChange}
          placeholder="code" />
      </div>
      <div>
        <Button onClick={() => handleLogin()}>
          Continuar
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

export default TokenPage;