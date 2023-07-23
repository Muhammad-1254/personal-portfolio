
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image'
import React,{FC} from 'react'
import { client } from '../../../sanity/lib/client';

interface ISanityImage {
    imageData:object 
    priority:boolean,
    alt:string,
    quality:number,
    width: number | undefined,
    height:number | undefined,
    className:string,
    
    
  }

const Img:FC<ISanityImage> = ({imageData,width,height,className,priority,quality,alt}) => {
    const imageProps = useNextSanityImage(client,imageData)
  return (
    <Image 
    className={className}
    src={imageProps.src}
    alt={alt}
    priority={priority}
    quality={quality}
    width={width}
    height={height}


    />
  )
}

export default Img