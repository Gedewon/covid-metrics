import React from 'react'
import Continent from './Continent'
import Map from './Map'

const Home = () => {
  return (
    <section>
        <Map />
        <div className='bg-black bg-blend-multiply'>
        <HeadLine headingText='CONTINENT' />
        </div>
        <Continent />
    </section>
  )
}

export const HeadLine = ({headingText})=><h1 className='pl-2 font-control bg-redBackground font-semibold text-white bg-blend-multiply'>{headingText}</h1>

export default Home