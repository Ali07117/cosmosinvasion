import React from 'react';

function SomeProjects() {
  return (
    <>
        <div className='min-h-[400px] -bg-[red] pt-[40px] some-projects-container bg-[--secondry] w-[100%] px-[100px] leading-[60px] flex'>
    <div className='some-projects-container-left h-[100%] w-[50%] flex items-center'>
    <span>
      <h1 className='some-projects-para font-[600] text-[50px] text-[--primary-text]'>COSMOS INVASION</h1>
      <h1 className='some-projects-para font-[600] text-[50px] text-[--primary-text]'>BUILDS AND MANAGES</h1>
      <h1 className='some-projects-para font-[600] text-[50px] text-[--primary-text]'>AMAZON, EBAY, SHOPIFY,</h1>
      <h1 className='some-projects-para font-[600] text-[50px] text-[--primary-text]'>ETSY, AND TIKTOK STORES.</h1>
      </span>
    </div>
    <div className='some-projects-container-right h-[100%]  w-[50%] leading-normal flex items-center'>
    <span>
      <p className='some-projects-para-2 font-[200] w-[90%]'>From concept to launch, <span className='font-[500]'>COSMOS INVASION</span> crafts high-performing stores. Want to explore your project with us?</p>
      <span className='flex items-center gap-[10px] mt-[15px] some-projects-para-2'>
        <p className='text-[--primary-text] text-[20px]'>Let’s talk</p>
        <a target='blank' href="mailto:contact@cosmos.com"><div className='all-projects-circle h-[60px] w-[60px] rounded-full border-[1px] border-[--primary] flex items-center justify-center'>
          <p className='text-[24px] rotate-[-45deg] relative'>-></p>
        </div></a>
      </span>
      </span>
    </div>
    </div>
    </>
  );
}

export default SomeProjects;
