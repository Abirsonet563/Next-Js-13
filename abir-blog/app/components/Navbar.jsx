import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
         <nav>
          <h1>Abir HelpDesk</h1>
          <Link href="/">Dashboard</Link>
          <Link href="/tickets">Tickets</Link>
        </nav>
    </div>
  )
}
