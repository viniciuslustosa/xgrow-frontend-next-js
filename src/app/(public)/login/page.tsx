"use client";

import { NextPage } from 'next'
import Image from 'next/image'
import { Send } from '@mui/icons-material';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ChangeEvent, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const styles = {
  main: 'flex flex-col gap-5 justify-center',
  text: {
    textInfo: "text-4xl font-bold flex flex-col text-right",
    colorGreen: "text-green-secondary mt-3",
  },
  icon: "text-base"
}

const LoginPage: NextPage = (props) => {
  const { SendToken } = useAuth()
  const [email, setEmail] = useState<string>();

  const handleSendToken = async () => {
    try{
      if(email) {
        SendToken(email)
      }
    } catch(err){
      console.log(err);
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div>
        <span>
          Acesse usando seu e-mail
        </span>
      </div>
      <div>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          label="Email"
          placeholder="Insira seu e-mail de acesso" />
      </div>
      <div>
        <Button onClick={() => handleSendToken()}>
          <Send className={styles.icon}></Send>
          Enviar token de acesso
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

export default LoginPage;