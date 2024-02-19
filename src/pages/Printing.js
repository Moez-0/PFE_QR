import React from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import Spreadsheet from '../components/Spreadsheet';
import QrGrid from '../components/QrGrid';

const FreeBarcoding = () => {

  return (
    <div className='mt-20 min-h-screen min-w-full h-full w-full bg-white dark:bg-slate-950 flex text-black dark:text-white flex-col justify-center items-center '>
        <div className='w-full bg-grayBg flex flex-col md:flex-row h-full'>
            <div className='rightt bg-white px-5  dark:bg-slate-800 h-[20%] md:h-screen  md:h-full md:w-[30%] flex flex-col justify-between'>
                <h1 className='text-lg font-bold text-black dark:text-white mt-10 ml-5'>1. Types of Paper</h1>
                <div className='w-[90%] ml-5 flex justify-between'>
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
                <div className='w-[90%] ml-5 flex justify-between mt-5'>
                <select className='w-full border-2 border-black dark:border-white rounded-md p-1'>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                </div>

                <h1 className='text-lg font-bold text-black dark:text-white mt-10 ml-5'>2. Label Design</h1>
                <div>
                <form className='mx-10 mt-5'>
   <section className="snap-x snap-mandatory pretty-scrollbar pb-[10px] flex gap-[10px] overflow-x-auto overscroll-contain" role="radiogroup">
      <h3 className="hidden">List of Label Design</h3>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4 active:border-main-4" role="radio" aria-label="Design : barcodeSimple"><img src="../s1.png"  alt="preview" width="226.77165354599998" height="113.38582677299999" decoding="async" data-nimg="1" className="h-full w-full object-cover" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-primary"  role="radio" aria-label="Design : barcodeWithTitle"><img alt="preview" width="264.566929137" height="132.2834645685" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s1.png" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4"  role="radio" aria-label="Design : qrSimple"><img alt="preview" width="188.976377955" height="188.976377955" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s2.png" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4"  role="radio" aria-label="Design : qrWithTitle"><img alt="preview" width="188.976377955" height="188.976377955" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s2.png" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4"  role="radio" aria-label="Design : qrHorizontal"><img alt="preview" width="226.77165354599998" height="132.2834645685" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s3.png" /></div>
      <div className="relative snap-start snap-always h-[120px] flex-none cursor-pointer overflow-hidden rounded-[8px] border-2 border-solid border-gray-4" role="radio" aria-label="Design : textOnly"><img alt="preview" width="226.77165354599998" height="113.38582677299999" decoding="async" data-nimg="1" className="h-full w-full object-cover" src="../s4.png"/></div>
   </section>
   
</form> 
                <div className='w-[90%] ml-5 flex justify-between flex-col pt-10'>
                <h1 className='font-bold'>Titre</h1>
                <input className='border-2 border-black dark:border-white rounded-md p-1'/>
                <hr className='my-5'/>
                <h1 className='font-bold'>Description</h1>

                <input className='border-2 border-black dark:border-white rounded-md p-1'/>
                <hr className='my-5'/>
                <h1 className='font-bold'>Barcode</h1>
                <input className='border-2 border-black dark:border-white rounded-md p-1'/>
                <hr className='my-5'/>
                <h1 className='font-bold'>Barcode Text</h1>
                <input className='border-2 border-black dark:border-white rounded-md p-1'/>
                <hr className='my-5'/>
                  </div>
                </div>
                <div className='ml-5'>
                <h1 className='text-lg font-bold text-black dark:text-white mt-10'>3. Data</h1>
				        <Spreadsheet className=""/>
                </div>
				</div>


           
            <div className='leftt bg-grayBg h-[80%] md:h-full md:w-[70%] '>
              <QrGrid/>
            </div>
        </div>
</div>
  )
}

export default FreeBarcoding
