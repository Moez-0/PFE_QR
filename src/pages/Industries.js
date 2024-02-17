import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const Industries = () => {
  return (
    <div className='mt-20 min-h-screen min-w-full bg-white dark:bg-slate-950 flex text-black dark:text-white flex-col justify-center items-center '>
    <div className='mt-10 flex flex-col items-center'>
<h1 className='text-2xl font-bold mb-5'>
<TypeAnimation
  sequence={[
    'Industries', // Types 'One'
    1000, // Waits 1s
    "We Serve", // Deletes 'One' and types 'Two'
    2000, // Waits 2s
    '.', // Types 'Three' without deleting 'Two'
    () => {
      console.log('Sequence completed');
    },
  ]}
  wrapper="span"
  cursor={true}
  repeat={Infinity} />
</h1>
<p className='text-center px-6'>BoxHero provides inventory management for any industry.
Explore relevant features for your business needs.</p>

<button className='bg-blue-600 text-white px-4 py-2 rounded-md mt-5'>Free 30-day Trial</button>
</div>



</div>
  )
}

export default Industries