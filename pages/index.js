import Link from 'next/link';
import {MainLayout} from '../components/MainLayout/MainLayout';
import { Promo } from '../components/Promo/Promo';


export default function Home() {
  return (
    <>
    <MainLayout title={'Home page'}>
      <h1>Main page</h1>
      <p><Link href="/about">About</Link></p>
      <p><Link href="/posts">About</Link></p>
      <Promo/>
    </MainLayout>
    </>
  )
}
