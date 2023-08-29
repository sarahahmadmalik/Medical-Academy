import Image from 'next/image'
import WebHeader from '@/components/WebHeader'
import WebFooter from '@/components/WebFooter'
import Login from '@/components/Login'
export default function Home() {
  return (
    <div className="w-full h-full">
    <WebHeader/>
    <main className="w-full h-[100vh] flex justify-center items-center py-[3rem] px-3">
      <Login/>
    </main>
    <WebFooter/>
    </div>
  )
}
