import React from 'react';

function HoverElem() {
  return (
    <>
         <div className="element h-[120px] w-[100%] border-b border-b-[1px] border-b-[--primary-text] -bg-[red] px-[50px] relative">
        <div className='elem-hover h-[280px] bg-[red] rounded-[10px] w-[230px] opacity-[0] fixed z-[20] left-[50%] translate-x-[-50%] top-[-50%] translate-y-[-50%]'></div>
        <div className="left -bg-[blue] h-[100%] flex justify-between items-center">
          <p className='elem-brand-name text-[--primary-text] font-[900] text-[40px]'>Qruil</p>
           <p className='elem-brand-desc text-[--primary-text] w-[300px] -bg-[yellow] text-center'>One of the greatest project i have ever done with USA client on fiverr.</p>
           <p className='elem-brand-used text-[--primary-text] w-[200px] -bg-[yellow]'>HTML, CSS, Tailwind CSS Javascript, React js and (some other libraries)</p>
        </div>
        </div>
    </>
  );
}

export default HoverElem;
