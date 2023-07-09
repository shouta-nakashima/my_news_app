'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const GlobalHeader = () => {
  const segment = useSelectedLayoutSegment()

  return (
    <header className="w-full border-b border-gray-300 h-20 flex py-2 px-4 items-center justify-between">
      <div className="flex gap-6 items-center">
        <Link href="/">
          <Image src={'/logo.png'} alt={'logo'} width={140} height={40} />
        </Link>
        <nav className="flex gap-4">
          <Link href={'/'}>
            <div
              className={`py-2 px-4 rounded ${segment !== null && 'hover:text-gray-700 hover:bg-gray-100'} ${
                segment === null && 'text-blue-400 bg-blue-100'
              }`}
            >
              <p>NEWS</p>
            </div>
          </Link>
          <Link href={'/games'}>
            <div
              className={`py-2 px-4 rounded ${segment !== 'games' && 'hover:text-gray-700 hover:bg-gray-100'} ${
                segment === 'games' && 'text-blue-400 bg-blue-100'
              }`}
            >
              <p>GAMES</p>
            </div>
          </Link>
          <Link href={'/games'}>
            <div className="hover:bg-gray-100 py-2 px-4 rounded hover:text-gray-700">
              <p>GAMES</p>
            </div>
          </Link>
        </nav>
      </div>

      <div>
        <Avatar>
          <AvatarImage src={''} alt={'avatar'} />
          <AvatarFallback>SN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

export default GlobalHeader
