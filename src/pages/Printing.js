import React from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const FreeBarcoding = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  return (
    <div className='mt-20 min-h-screen min-w-full bg-white dark:bg-slate-950 flex text-black dark:text-white flex-col justify-center items-center '>
        <div className='w-full h-screen bg-black flex flex-col md:flex-row'>
            <div className='rightt bg-white px-5  dark:bg-slate-800 h-[20%] md:h-screen md:w-[30%] flex flex-col justify-between'>
                <h1 className='text-lg font-bold text-black dark:text-white mt-10 ml-10'>1. Types of Paper</h1>
                <div className='w-[90%] ml-10 flex justify-between'>
                  <div className='flex flex-row mr-5'>
                  <input className='mr-2' type="radio" id="paper1" name="paper" value="paper1"/>
                  <label for="paper1">Label Sheet</label>
                  </div>
                  <div className='flex flex-row mr-5'>
                  <input  className='mr-2' type="radio" id="paper2" name="paper" value="paper2"/>
                  <label for="paper2">Thermal Label</label>
                  </div>  
                  <div className='flex flex-row mr-5'>
                  <input className='mr-2' type="radio" id="paper3" name="paper" value="paper3"/>
                  <label for="paper3">Custom</label>
                  </div>
                </div>
                <div className='w-[90%] ml-10 flex justify-between'>
                <select className='w-full border-2 border-black dark:border-white rounded-md p-1'>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                </div>

                <h1 className='text-lg font-bold text-black dark:text-white mt-10 ml-10'>2. Label Design</h1>
                <div>
                <form className='mx-10'>
   <section class="snap-x snap-mandatory pretty-scrollbar pb-[10px] flex gap-[10px] overflow-x-auto overscroll-contain" role="radiogroup">
      <h3 class="hidden">List of Label Design</h3>
      <div class="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4 active:border-main-4" className={activeButtonIndex === 0 ? "bg-white" : "bg-black"} onClick={setActiveButtonIndex(0)} role="radio" aria-label="Design : barcodeSimple"><img alt="preview" width="226.77165354599998" height="113.38582677299999" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="../s1.png" /></div>
      <div class="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-primary"  role="radio" aria-label="Design : barcodeWithTitle"><img alt="preview" width="264.566929137" height="132.2834645685" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="../s1.png" /></div>
      <div class="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4"  role="radio" aria-label="Design : qrSimple"><img alt="preview" width="188.976377955" height="188.976377955" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="../s2.png" /></div>
      <div class="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4"  role="radio" aria-label="Design : qrWithTitle"><img alt="preview" width="188.976377955" height="188.976377955" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="../s2.png" /></div>
      <div class="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4"  role="radio" aria-label="Design : qrHorizontal"><img alt="preview" width="226.77165354599998" height="132.2834645685" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="../s3.png" /></div>
      <div class="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4" role="radio" aria-label="Design : textOnly"><img alt="preview" width="226.77165354599998" height="113.38582677299999" decoding="async" data-nimg="1" class="h-full w-full object-cover" src="../s4.png"/></div>
   </section>
   
</form>
                </div>
                <h1 className='text-lg font-bold text-black dark:text-white mt-10 ml-10'>3. Data</h1>
            </div>


           
            <div className='leftt bg-grayBg h-[80%] md:h-screen md:w-[70%]'>

            </div>
        </div>
</div>
  )
}

export default FreeBarcoding