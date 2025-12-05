import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
// import {  } from 'gsap/all'
import { useEffect } from 'react';
import Expect from './Pages/Expect';
import Projects from './Pages/Projects';
import SomeProjects from './Components/SomeProjects';
import Footer from './Pages/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Skill from './Pages/Skill';
gsap.registerPlugin(ScrollTrigger)
function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    var ddd = document.querySelector(".ddd")
    var burger = document.querySelector(".burger")
    var sideNavClose = document.querySelector(".side-nav-close-arrow")
    // var eyesBlackCircle = document.querySelector(".eyes-black-circle")
    var allProjectCircle = document.querySelector(".all-projects-circle")
    const lerp = (x, y, a) => x * (1 - a) + y * a;
    var hovertext = document.querySelector(".hover-text")
    var aliRashid = document.querySelectorAll(".circle-scale")
    var element = document.querySelectorAll(".element")
    var elementt = document.querySelector(".element")
    var main = document.querySelector(".main")

// --------------------------------------------- String ----------------------------------------------------------------

 var path = `M 10 80 Q 600 80 1180 80`;
        var finalPath = `M 10 80 Q 600 80 1180 80`;

        var string = document.querySelector(".string");

        string.addEventListener("mousemove", function(event){
            var rect = string.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            path = `M 10 80 Q ${x} ${y} 1180 80`;
            gsap.to("svg path", {
                attr: { d: path },
                // duration:10,
                // ease: "elastic.out(1,0.3)"
                // ease: "elastic.out(1,0.3)",
            });
        });

        string.addEventListener("mouseleave", function(){
            gsap.to("svg path", {
                attr: { d: finalPath },
                // duration:0.2,
                ease: "elastic.out(1,0.3)"
            });
        });

// --------------------------------------------- String ----------------------------------------------------------------






    aliRashid.forEach(function(ele){
      ele.addEventListener("mousemove",()=>{
      gsap.to(".circle-ball",{
        scale:4
      })
    })
    ele.addEventListener("mouseleave",()=>{
      gsap.to(".circle-ball",{
        scale:1
      })
    })
    })


    hovertext.addEventListener("mouseenter",()=>{
      gsap.to(".animate-text",{
        y:"-100%",
        stagger:0.05
      })
    }) 
    hovertext.addEventListener("mouseleave",()=>{
      gsap.to(".animate-text",{
        y:"0%",
        stagger:0.05,
      })
    }) 
    // --------------------------Ball---------------------
    main.addEventListener("mousemove",function(dets){
      gsap.to(".circle-ball",{
        left:dets.x+"px",
        top:dets.y+"px",
      })
    })
    allProjectCircle.addEventListener("mousemove",function(dets){
      var dims = allProjectCircle.getBoundingClientRect();
      var xstart = dims.x;
      var ystart = dims.y;
      var xend = dims.x + dims.width;
      var yend = dims.y + dims.height;
      var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
      var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
      gsap.to(".all-projects-circle",{
        x:lerp(-50, 50, zeroone),
        y:lerp(-50, 50, zerotwo),
        duration:0.5,
      })
      gsap.to(".circle-ball",{
        scale:4
      })
    })
    allProjectCircle.addEventListener("mouseleave",function(){
      gsap.to(".all-projects-circle",{
        x:0,
        y:0,
        duration:1,
       ease: "elastic.out(1,0.3)",

      })
      gsap.to(".circle-ball",{
        scale:1
      })
    })
    // --------------------------Ball---------------------
    // ---------------side-Nav---------------------

    let tl2 = gsap.timeline()
    tl2.to(".side-nav",{
      transform:"translateX(0%)"
    })
    tl2.to(".status-box-sidebar",{
      transform:"translateX(0%)",
      duration:0.3
    }) 
    tl2.to(".location-box-sidebar",{
      transform:"translateX(0%)",
      duration:0.3
    }) 
    tl2.to(".sitemap-box-sidebar",{
      transform:"translateX(0%)",
      duration:0.3
    }) 
    tl2.to(".personal-links-sidebar",{
      transform:"translateX(0%)",
      duration:0.3
    })
    tl2.pause()
    burger.addEventListener("click",function(){
      tl2.play()
    })
    sideNavClose.addEventListener("click",function(){
      tl2.reverse()
    })
    // ---------------side-Nav---------------------

    // ------------------eyes---------------

    // window.addEventListener("mousemove",function(dets){
    //   var dims = eyesBlackCircle.getBoundingClientRect();
    //   var xstart = dims.x;
    //   var ystart = dims.y;
    //   var xend = dims.x + dims.width;
    //   var yend = dims.y + dims.height;
    //   var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
    //   var zerotwo = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);
    //   gsap.to(".eyes-black-circle",{
    //     x:lerp(-1, 1, zeroone),
    //     y:lerp(-1, 1, zerotwo),
    //     duration:0.5,
    //   })
    //   gsap.to(".eye-ball",{
    //     x:lerp(-1.5, 1.5, zeroone),
    //     y:lerp(-1.5, 1.5, zerotwo),
    //     duration:0.5,
    //   })
    // })
    // ------------------eyes---------------
    // --------------------------Elem---------------------
    element.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
      gsap.to(this.querySelector(".picture"),{
        left:dets.x+"px",
        top:dets.y+"px",
        opacity:1
      })
      gsap.to(".circle-ball",{
        opacity:0
      })
    })
    el.addEventListener("mouseleave",function(dets){
      gsap.to(this.querySelector(".picture"),{
        opacity:0
      })
      gsap.to(".circle-ball",{
        opacity:1
      })
    })
  })
   });
  // --------------------------Elem---------------------

  
  useGSAP(()=>{
    
      gsap.to(".slide",{
      transform:"translateX(-100%)",
      repeat:-1,
      ease:"none",
      duration:20,
    })    
     
    let tl = gsap.timeline()


    
    tl.to(".loder-text-1",{
    transform:"translateY(0%)",
    duration:0.8
  },"a")
  tl.to(".loder-text-2",{
    transform:"translateY(0%)",
    duration:0.8
  },"a")
  tl.to(".loder-upper-container",{
    transform:"translateY(-200%)",
    duration:1
  },"b")
  tl.to(".loder-lower-container",{
    transform:"translateY(200%)",
    duration:1
  },"b")


      tl.from(".ali-text, .portfolio-text",{
        x:-500,
        stagger:0.2,
    })    
      tl.from(".sitemap-box",{
        y:-100,
        duration:0.2,
    })    
      tl.from(".status-box",{
        y:-100,
        duration:0.2,
    })    
      tl.from(".location-box",{
        y:-100,
        duration:0.2,
    })    
      tl.from(".personal-links-box",{
        x:1000,
        duration:0.2,
    })    
        
    tl.from(".freelancer-text",{
      x:-2000,
      stagger:0.1,
  })    
  gsap.to(".text-show-1",{
    width:"100%",
    stagger:0.6,
    scrollTrigger:{
      trigger:".expect-page",
      // markers:true,
      start:"top 50%",
      end:"top 20%",
      scrub:2,
    }
  })
  gsap.to(".text-show-2",{
    width:"100%",
    stagger:0.6,
    scrollTrigger:{
      trigger:".expect-page",
      start:"top 25%",
      end:"top 20%",
      scrub:2
    }
  })
  gsap.to(".text-show-3",{
    width:"100%",
    stagger:0.6,
    scrollTrigger:{
      trigger:".expect-page",
      // markers:true,
      start:"top 10%",
      end:"top 0%",
      scrub:2
    }
  }) 

  gsap.from(".some-projects-para",{
    x:-300,
    stagger:0.3,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:".some-projects-container",
      // markers:true,
      start:"top 50%",
      end:"top 20%",
      scrub:true
    }
  })
  gsap.from(".some-projects-para-2",{
    y:-100,
    opacity:0,
    duration:1,
    scrollTrigger:{
      trigger:".some-projects-container",
      // markers:true,
      start:"top 50%",
      end:"top 20%",
      scrub:true
    }
  })
  // -------------------footer-------------

  gsap.from(".footer-got-project-text",{
    x:-300,
    opacity:0,
    scrollTrigger:{
      trigger:".web-footer",
      start:"top 70%",
      end:"top 42%",
      scrub:true
    }
  })
  gsap.from(".footer-logo",{
    y:300,
    display:"none",
    stagger:-0.05,
    scrollTrigger:{
      // markers:true,
      trigger:".footer-lower-section",
      start:"top 20%",
      end:"top -50%",
      scrub:true
    }
  })

  // -------------------footer-------------

  // -------------
  gsap.from(".skill-btn",{
    opacity:0,
    stagger:1000,
    duration:"100",
    scrollTrigger:{
      // markers:true,
      // filter: "blur(10px)",
      // blur:"20px",
      trigger:".skill-container",
      pin:true,
      start:"top 0%",
      end:"top -100%",
      scrub:true
    }
    
  })
    
  // -------------
  
  // -----loder----


  // -----loder----


  })

  
  return (
   <>
    <div className="bg-[--secondry] main -relative overflow-x-hidden">
    <div className=" h-[25px] w-[25px] rounded-[50%] bg-[--secondry] top-[-100px] circle-ball fixed  z-[999999] "></div>
      <div className='loder-upper-container h-[50%] w-[100%] bg-[black] fixed top-[0] z-[9999999999] loder-upper h-[50vh] w-[100%] overflow-y-hidden flex justify-center items-end'>
        <p className='loder-text-1 text-[--secondry-text] font-[700] text-[80px] leading-[90px] translate-y-[100%]'>COSMOS</p>
      </div>
      <div className='loder-lower-container h-[50%] w-[100%] bg-[black] fixed bottom-[0] z-[9999999999] overflow-y-hidden loder-lower h-[50vh] w-[100%] flex justify-center'>
      <p className='loder-text-2 text-[--secondry-text] font-[700] text-[80px] leading-[90px] translate-y-[-100%]'>INVASION</p>
    </div>
    <Home/>
    <Expect/>
    <SomeProjects/>
    <Projects/>
    <Skill/>
    <Footer/>
    </div>
   </>
  );
}

export default App;
