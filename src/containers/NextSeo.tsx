import { useRouter } from 'next/router'
import React from 'react'

import { NextSeo as Seo, NextSeoProps } from 'next-seo'

const APP_URL = process.env.NEXT_PUBLIC_APP

const NextSeo = (props: NextSeoProps) => {
  const { pathname } = useRouter()

  const { title, description, openGraph, canonical } = props
  const separator = canonical ? '/' : ''
  const canonicalValue = `${APP_URL}${separator}${canonical || pathname}`

  return (
    <Seo
      {...props}
      title={`${title}`}
      description={description}
      openGraph={{
        title,
        description,
        ...(openGraph || {})
      }}
      canonical={canonicalValue}
    />
  )
}

export default NextSeo
