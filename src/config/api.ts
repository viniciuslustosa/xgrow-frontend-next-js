"use client";

import Cookie from 'js-cookie';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend.challenge-la.xgrow.com/'
})

api.interceptors.response.use(
  function (response: any) {
    if(response.status > 226) {
        //   modal.mixinToast("Houve um erro ao tentar se comunicar com o servidor.", 5000, 'error');
      throw new Error("server-error");
    }
    return response;
  },
  function (error: { response: { status: any; }; }) {
    let message = 'Houve um erro ao tentar se comunicar com o servidor'

    switch (error.response.status) {
      case 401:
        message = 'Não autorizado!'
        break;
      case 404:
        message = 'Não encontrado!'
        break;
    }

    // modal.mixinToast(message, 4000, 'error', 'bottom');
    throw error;
  }
);

export default api;

export const defaults = {
    headers: {
      Authorization: `Bearer ${Cookie.get('accessToken')}`,
    },
};