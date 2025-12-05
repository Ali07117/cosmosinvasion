import React from 'react';

function Nav() {
  return (
    <>
        <div className='h-[90px] web-nav w-[100%] flex justify-between items-center px-[40px]'>
        <div className="nav-left flex items-center gap-[120px]">
        <span className='leading-[30px] ali-rashid-logo circle-scale'>
            <p className='text-[--secondry-text] text-[30px] ali-text -font-[quantico] font-[600]'>YOUR BRAND</p>
            <p className='text-[--secondry-text] text-[30px] portfolio-text -font-[quantico] font-[600]'>OUR UNIVERSE</p>
            {/* <p className='text-[--secondry-text] text-[30px] ali-text -font-[quantico] font-[600]'>ALI RASHID</p>
            <p className='text-[--secondry-text] text-[30px] portfolio-text -font-[quantico] font-[600]'>PORTFOLIO</p> */}
            </span>
            <span className='sitemap-box '>
                <i className='text-[--secondry-text] font-[]'>Sitemap:</i>
                <div className='overflow-y-hidden -bg-[red] h-[25px] hover-text cursor-pointer'>
                <p className='text-[--secondry-text] font-[500] aboutme -bg-[red]'>
                    <div className='inline-block animate-text'>A</div>
                    <div className='inline-block animate-text'>b</div>
                    <div className='inline-block animate-text'>o</div>
                    <div className='inline-block animate-text'>u</div>
                    <div className='inline-block animate-text'>t </div>
                    <div className='inline-block animate-text ml-[5px]'>u</div>
                    <div className='inline-block animate-text'>s</div>
                </p>
                <p className='text-[--secondry-text] font-[500] aboutme  -bg-[red]'>
                    <div className='inline-block animate-text'>A</div>
                    <div className='inline-block animate-text'>b</div>
                    <div className='inline-block animate-text'>o</div>
                    <div className='inline-block animate-text'>u</div>
                    <div className='inline-block animate-text'>t</div>
                    <div className='inline-block animate-text ml-[5px]'>u</div>
                    <div className='inline-block animate-text'>s</div>
                </p>
                </div>
               
            </span>
            </div>
            <div className="nav-right flex items-center gap-[200px]">
            <span className='status-box'>
                <i className='text-[--secondry-text]'>Status:</i>
                <p className='text-[--secondry-text] font-[500]'>Orbiting global e-commerce</p>
                {/* <p className='text-[--secondry-text] font-[500]'>Available for freelance projects</p> */}
            </span>
            <span className='location-box'>
                <i className='text-[--secondry-text]'>Location:</i>
                <p className='text-[--secondry-text] font-[500]'>United state</p>
            </span>
            </div>
            <img className='burger cursor-pointer h-[30px] pr-[10px] hidden' src="/burgernew.svg" alt="" />
        </div>
    </>
  );
}

export default Nav;
