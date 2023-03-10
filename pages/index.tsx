import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title> Srinivasu Kakaraparti | Portfolio </title>
        <meta name='description'>
        </meta>
        <link rel= 'icon' href='/favicon.ico'/>
      </Head>
      <header>
        <Navbar />
      </header>
      <Hero />
    </div>
  )
}
