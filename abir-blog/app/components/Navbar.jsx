import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "./dojo-logo.png"
export default function Navbar() {
  return (
    <div>
         <nav>
          <Image
          src={Logo}
          alt="Abir Help Desk Logo"
          width={70}
          quality={100}
          placeholder='blur'
          />
          <h1>Abir HelpDesk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
    </div>
  )
}
