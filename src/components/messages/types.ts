import { ReactNode } from 'react';

export type Message = {
  id: number | string;
  text: string;
  isUser: boolean;
  type?: 'text' | 'contact' | 'image';
  content?: ReactNode | {
    url: string;
    alt: string;
  };
};

export type ContactInfo = {
  name: string;
  phone: string;
  email: string;
  image: string;
};