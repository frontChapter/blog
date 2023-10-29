'use client'
import Image, { ImageProps } from 'next/image'
import React from 'react'

type TImageWithFallback = ImageProps & { fallbackSrc: string }

const ImageWithFallback = (props: TImageWithFallback) => {
  const { src, fallbackSrc, ...rest } = props
  const [imgSrc, setImgSrc] = React.useState(src)

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default ImageWithFallback
