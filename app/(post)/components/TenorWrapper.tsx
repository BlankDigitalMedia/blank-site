'use client'

import dynamic from 'next/dynamic'

const Tenor = dynamic(() => import('./Tenor'), { ssr: false })

interface TenorWrapperProps {
  postid: string
  aspectRatio?: string
  width?: string
  title: string
  displayTitle: string
  searchLink: string
}

export default function TenorWrapper(props: TenorWrapperProps) {
  return <Tenor {...props} />
}
