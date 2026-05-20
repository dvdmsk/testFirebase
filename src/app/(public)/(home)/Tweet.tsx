import { PAGES } from '@/config/pages.config'
import type { ITweet } from '@/shared/types/tweet.interface'
import Link from 'next/link'
import React from 'react'

type Props = {
    tweet: ITweet
}

export default function Tweet({tweet}: Props) {
  return (
    <div>
     <p>{tweet.text}</p>
     <Link href={PAGES.PROFILE(tweet.author)}>@{tweet.author}</Link>
    </div>
  )
}