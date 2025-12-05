import React, { useEffect, useState } from 'react';
import Eyes from '../Components/Eyes';
import String from '../Components/String';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { Form } from 'react-router-dom';
import UserForm from '../Components/UserForm';
gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const [rotate, setRotate] = useState(0);
  let animationFrame; // Track the animation frame

  useEffect(() => {
    const lerp = (x, y, a) => x * (1 - a) + y * a;
    const eyesBlackCircle = document.querySelector(".eyes-black-circle");
    const footerbox = document.querySelector(".web-footer");

    if (!eyesBlackCircle || !footerbox) {
      console.error("Required elements not found in the DOM.");
      return;
    }

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(prev => (Math.abs(prev - (angle - 180)) > 1 ? angle - 180 : prev)); // Smooth rotation updates
    };

    const handleEyeAnimation = (dets) => {
      const dims = eyesBlackCircle.getBoundingClientRect();
      const xstart = dims.x;
      const ystart = dims.y;
      const xend = dims.x + dims.width;
      const yend = dims.y + dims.height;

      const zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
      const zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

      gsap.to(".eyes-black-circle", {
        x: lerp(-1, 1, zeroone),
        y: lerp(-1, 1, zerotwo),
        duration: 0.25, // Reduced duration for smoother motion
        ease: "power2.out", // Smoother easing
        overwrite: "auto", // Prevent overlapping animations
      });

      gsap.to(".eye-ball", {
        x: lerp(-1.5, 1.5, zeroone),
        y: lerp(-1.5, 1.5, zerotwo),
        duration: 0.25,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const optimizedMouseMove = (e) => {
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(() => {
          handleMouseMove(e);
          handleEyeAnimation(e);
          animationFrame = null; // Reset animation frame
        });
      }
    };

    footerbox.addEventListener("mousemove", optimizedMouseMove);

    return () => {
      footerbox.removeEventListener("mousemove", optimizedMouseMove);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div className='-min-h-[100vh] web-footer w-[100%] bg-[--secondry]'>
        <div className="footer-upper-section px-[100px] pt-[100px]">
          <div className='footer-got-project-text  border-b-[--primary] pb-[70px]'>
            <i className='text-[--primary-text]'>That's all for now:</i>
            <p className='text-[--primary-text] text-[40px] footer-engaging-text font-[400] mt-[10px] '>
              Got a idea in mind? <br /> Let’s talk
            </p>
            <String />
          </div>
          <div className='footer-contact-container w-[60%] flex justify-between pt-[60px]'>
            <span>
              <p className='text-[grey] font-[200]'>Email address:</p>
              <a className='text-[--primary] font-[300]' href="mailto:contact@cosmos.com">contact@cosmos.com</a>
            </span>
            <span>
              <p className='text-[grey] font-[200]'>Phone number:</p>
              <p className='text-[--primary] font-[300]'>+17864358458</p>
            </span>
          <span></span>
          </div>
        </div>
        <Eyes rotate={rotate} />
        <UserForm/>
        <div className="footer-lower-section -h-[350px] bg-[--primary] flex justify-center items-center overflow-hidden">
          <p className='text-[17vw] font-[700] text-[--secondry-text]'>
            <span className='footer-logo inline-block'>C</span>
            <span className='footer-logo inline-block'>O</span>
            <span className='footer-logo inline-block'>S</span>
            <span className='footer-logo inline-block'>M</span>
            <span className='footer-logo inline-block'>O</span>
            <span className='footer-logo inline-block'>S</span>
            {/* <span className='footer-logo '> </span> */}
            {/* <span className='footer-logo inline-block'>R</span> */}
            {/* <span className='footer-logo inline-block'>A</span> */}
            {/* <span className='footer-logo inline-block'>S</span> */}
            {/* <span className='footer-logo inline-block'>H</span> */}
            {/* <span className='footer-logo inline-block'>I</span> */}
            {/* <span className='footer-logo inline-block'>D</span> */}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
