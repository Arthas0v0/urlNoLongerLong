
import avatarImage4 from '@/images/logos/logo.png'
import Image from 'next/future/image'

export function Logo(props) {
  return (
    <div className="flex">
       <Image
                            className="h-10 w-10 object-cover"
                            src={avatarImage4}
                            alt=""
                            width={36}
                            height={36}
                          />
      <div className="h-10 text-md p-2 align-middle text-gray-800 font-semibold">UrlNoLongerLong</div>
    </div>
   )
}
