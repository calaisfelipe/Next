import Image from 'next/image'

export default function ProductCard({src, title, prize, alt, width, height}) {
  return (
    
    <div className="w-36 h-48 flex flex-col gap-2 justify-center items-center p-4 border border-white rounded-xl text-white">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
            <h4>{title}</h4>
            <p>{prize}</p>
          </div>
    
  )
}