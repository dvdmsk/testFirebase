import type { ITweet } from '@/shared/types/tweet.interface'
import React from 'react'

type Props = {
    tweet: ITweet
}

export default function Tweet({tweet}: Props) {
  return (
    <div>
     <p>{tweet.text}</p>
     <span>@{tweet.author}</span>ввв
    </div>
  )
}