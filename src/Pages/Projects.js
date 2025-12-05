import React from 'react';
import { elementdata } from '../data/elemdata';
// import HoverElem from '../Components/HoverElem';
// import { elementdata } from '../data/elemdata';

function Projects() {
  return (
    <>
    <div className='min-h-[100vh] w-[100%] pt-[80px] bg-[--secondry]  '>
        {elementdata.map((e)=>{
            return(
             <a target='blank' href={e.websitelink}>
                <div className="element h-[120px] w-[100%] border-b border-b-[1px] border-b-[--primary-text] -bg-[red] px-[100px] relative">
        <div className='elem-hover picture h-[280px] -bg-[white] border-[none] rounded-[10px] w-[230px] opacity-[0] fixed z-[20] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]'>
           <img className='h-[100%] w-[100%]  object-contain ' src={e.hoverimg} alt="Brand image" />
        </div>
        <div className="left -bg-[blue] h-[100%] flex justify-between items-center">
          <p className='elem-brand-name w-[250px]  text-[--primary-text] font-[500] text-[40px]'>{e.brand}</p>
           <p className='elem-brand-desc text-[--primary-text] h-[100%] flex items-center w-[300px] font-[200] text-ellipsis overflow-y-hidden -bg-[yellow] text-center'>{e.branddesc}</p>
           <p className='elem-brand-used text-[--primary-text] w-[200px] font-[200]  -bg-[yellow]'>{e.brandused}</p>
        </div>
        </div> 
        </a>
            )
        })}
    </div>
   </>
  );
}

export default Projects;
