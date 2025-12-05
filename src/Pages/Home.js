import React from 'react';
import Nav from '../Components/Nav';
import Marquee from "react-fast-marquee";
import Marque from '../Components/Marque';

function Home() {
  return (
    <>
       <div className="home h-[100vh] w-[100%] -bg-[red] bg-[--primary] relative overflow-x-hidden">
      <Nav/>
      <div className='side-nav flex flex-col justify-between py-[30px] px-[10px] h-[100vh] w-[300px] bg-[#0d0d0d] fixed top-[0] right-[0] z-[9] translate-x-[130%]'>
            <div className="-nav-right flex flex-col gap-[20px]">
            <img className='cursor-pointer h-[30px] side-nav-close-arrow' src="/sidenav-closenew.svg" alt="" />
            <div className=' border-b status-box-sidebar translate-x-[120%]'>
                <i className='text-[--secondry-text]'>Status:</i>
                <p className='text-[--secondry-text] font-[500]'>Available for freelance projects</p>
            </div>
            <div className=' border-b location-box-sidebar translate-x-[120%]'>
                <i className='text-[--secondry-text]'>Location:</i>
                {/* <p className='text-[--secondry-text] font-[500]'>Pakistan</p> */}
            </div>
            <div className='border-b sitemap-box-sidebar translate-x-[120%]'>
                <i className='text-[--secondry-text] font-[]'>Sitemap:</i>
                <div className='overflow-y-hidden -bg-[red] h-[25px] hover-text cursor-pointer'>
                <p className='text-[--secondry-text] font-[500] aboutme -bg-[red]'>
                    <div className='inline-block animate-text'>A</div>
                    <div className='inline-block animate-text'>b</div>
                    <div className='inline-block animate-text'>o</div>
                    <div className='inline-block animate-text'>u</div>
                    <div className='inline-block animate-text'>t </div>
                    <div className='inline-block animate-text ml-[5px]'>m</div>
                    <div className='inline-block animate-text'>e</div>
                </p>
                <p className='text-[--secondry-text] font-[500] aboutme  -bg-[red]'>
                    <div className='inline-block animate-text'>A</div>
                    <div className='inline-block animate-text'>b</div>
                    <div className='inline-block animate-text'>o</div>
                    <div className='inline-block animate-text'>u</div>
                    <div className='inline-block animate-text'>t</div>
                    <div className='inline-block animate-text ml-[5px]'>m</div>
                    <div className='inline-block animate-text'>e</div>
                </p>
                </div>
               
            </div>
            </div>
            <div className='flex flex-col -personal-links-box personal-links-sidebar circle-scale inline-block translate-x-[120%]'>
            <a className='email-text text-[--secondry]' href="mailto:alirashiddev@gmail.com">contact@cosmos.com</a>
            <p className='number-text text-[--secondry]'>+17864358458</p>
            <span className='social-box'>
            </span>
        </div>
      </div>
      <div className="home-text hero absolute bottom-[60px] px-[40px] flex justify-between items-end w-[100%]">
      <span className='leading-text leading-[145px]'>
        <p className='text-[--secondry] text-[140px] font-[700]'>
        <div className='inline-block hero-text freelancer-text'>C</div>
        <div className='inline-block hero-text freelancer-text'>O</div>
        <div className='inline-block hero-text freelancer-text'>S</div>
        <div className='inline-block hero-text freelancer-text'>M</div>
        <div className='inline-block hero-text freelancer-text'>O</div>
        <div className='inline-block hero-text freelancer-text'>S</div>
        {/* <div className='inline-block hero-text freelancer-text'>R</div> */}
        </p>
        <p className='text-[--secondry] hero-text text-[140px] font-[700]'>
        INVASION
        </p>
        </span>
        <span className='flex flex-col personal-links-box circle-scale inline-block'>
            <a className='email-text text-[--secondry]' href="mailto:alirashiddev@gmail.com">contact@cosmos.com</a>
            <p className='number-text text-[--secondry]'>+17864358458</p>
            <span className='social-box'>
            </span>
        </span>
      </div>
      <div className=" marque gap-[20px] -h-[40px] absolute bottom-[0px]">
      <Marquee speed={30}>
      <Marque/>
      <Marque/>
      <Marque/>
      </Marquee>
    </div>
    </div>
    </>
  );
}

export default Home;
