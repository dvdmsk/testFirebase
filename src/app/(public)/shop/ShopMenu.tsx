import Link from 'next/link'
import React from 'react'

export default function ShopMenu() {
  return (
    <div>
        <ul className='flex gap-4'>
            <li>
                <Link href="/shop">shop</Link>
            </li>
            <li>
                <Link href="/shop/ssg">shop SSG</Link>
            </li>
            <li>
                <Link href="/shop/isr">shop ISR</Link>
            </li>
        </ul>
    </div>
  )
}
