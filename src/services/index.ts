import { api } from '../helpers/api';
import { KEYS  } from '../config';
import { CharactersResponse } from './types';

export const services = {
  getCharacters
};

async function getCharacters() {
    try {
      const { data } = await api.get<CharactersResponse>('character');
      return data;
    } catch (error) {
      console.log('ERRO AO LISTAR',  error);
    }
  }