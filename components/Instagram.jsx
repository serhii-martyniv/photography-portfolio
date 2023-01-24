import React from 'react'
import IgImage1 from '../public/ig-img-1.jpeg'
import IgImage2 from '../public/ig-img-2.jpeg'
import IgImage6 from '../public/ig-img-6.jpeg'
import IgImage3 from '../public/ig-img-3.jpeg'
import IgImage4 from '../public/ig-img-4.jpeg'
import IgImage5 from '../public/ig-img-5.jpeg'

import {InstagramImg} from './InstagramImg'

export const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <p className='pb-4'>@Captur</p>
      <div className='grid grid-cols-2 md:grid-cols3 lg:grid-cols-6 gap-2 p-4'>
        <InstagramImg socialImg={IgImage1} />
        <InstagramImg socialImg={IgImage2} />
        <InstagramImg socialImg={IgImage3} />
        <InstagramImg socialImg={IgImage4} />
        <InstagramImg socialImg={IgImage5} />
        <InstagramImg socialImg={IgImage6} />
      </div>
    </div>
  )
}
