
import avatarImage4 from '@/images/logos/logo.png'
import Image from 'next/future/image'
// cfImageLoader.js
// export default function cfImageLoader({ src, width, quality }) {
//   const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
//   return `https://www.urlnolongerlong.com/cdn-cgi/image/${params.join(',')}/${src}`
// }
const normalizeSrc = src => {
  return src.startsWith('/') ? src.slice(1) : src;
};
const cloudflareLoader = ({ src, width, quality }) => {
  const params = [`width=${width}`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
};

export function Logo(props) {
  return (
    <div className="flex">
       <Image
                            className="h-10 w-10 object-cover"
                            loader={cloudflareLoader}
                            src={avatarImage4.src}
                            alt=""
                            width={36}
                            height={36}
                          />
      <div className="h-10 text-md p-2 align-middle text-gray-800 font-semibold">UrlNoLongerLong</div>
    </div>
   )
}
