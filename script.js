function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
     ScrollTrigger.refresh();
    
}
loco()
function shopp(){
    var temp2 = 0;
    var burger2 = document.querySelector(".sh")
    var nav=  document.querySelector("nav")
    burger2.addEventListener("click",function(){
        if(temp2==0){
            gsap.to(".shopp",{
                top:"0%",
                })
                gsap.to("nav",{
                    backgroundColor:"black",
                    color:"white"
                })
                gsap.to("nav a",{
                    backgroundColor:"black",
                    color:"white"
                })
                document.querySelector(".sh").innerHTML= `<i class="fa fa-times" aria-hidden="true"></i>`
                temp2=1;
        }
        else{

            gsap.to(".shopp",{
                top:"-120%",
                })
                gsap.to("nav",{
                    backgroundColor:"initial",
                    color:"black"
                })
                gsap.to("nav a",{
                    backgroundColor:"white",
                    color:"black"
                })
                document.querySelector(".sh").innerHTML= `<i class="fa fa-shopping-cart" aria-hidden="true"></i>`
               
                temp2=0;
        }
    })
}
shopp()
function menu(){
    var temp = 0;
    var burger = document.querySelector(".burger")
    var nav=  document.querySelector("nav")
    burger.addEventListener("click",function(){
        if(temp==0){
            gsap.to(".menu",{
                top:"0%",
                })
                gsap.to("nav",{
                    backgroundColor:"black",
                    color:"white"
                })
                gsap.to("nav a",{
                    backgroundColor:"black",
                    color:"white"
                })
                document.querySelector(".burger").innerHTML= `<i class="fa fa-times" aria-hidden="true"></i>`
                temp=1;
        }
        else{
            gsap.to(".menu",{
                top:"-120%",
                })
                gsap.to("nav",{
                    backgroundColor:"initial",
                    color:"black"
                })
                gsap.to("nav a",{
                    backgroundColor:"white",
                    color:"black"
                })
                document.querySelector(".burger").innerHTML= `<i class="fa fa-bars" aria-hidden="true"></i>`
               
                temp=0;
        }
    })
    
    
}
menu()

function nav(){
    gsap.to(".svg svg",{
        transform:`translateY(-100%)`,
       scrollTrigger:{
        start:"top 0%)",
        end:"top -15%",
        trigger:".page1",
        scroller:".main",
        scrub:true,
        duration:.5
       }
    })
    gsap.to(".navl",{
        opacity:`0`,
       scrollTrigger:{
        start:"top 0%)",
        end:"top -15%",
        trigger:".page1",
        scroller:".main",
        scrub:true,
        duration:.5
       }
    })
}
nav()
function loading(){
    gsap.from("h1",{
        y:"100%",
         opacity:0,
         duration:.8,
         stagger:.3
     })
     gsap.from("a",{
        y:"100%",
         opacity:0,
         duration:.8,
         stagger:.3
     })
     gsap.from("svg",{
        y:"100%",
         opacity:0,
         duration:.8,
         stagger:.3
     })
     gsap.from(".video",{
        scale:.7,
         opacity:0,
         delay:1,
         duration:1,
         stagger:.3
     })
}
loading()
function video(){
    var vid=document.querySelector(".video");
var play=document.querySelector(".play");
vid.addEventListener("mouseenter",function(){
   gsap.to(".play",{
    scale:1,
    opacity:1,
   })
})
vid.addEventListener("mouseleave",function(){
    gsap.to(".play",{
     scale:0,
     opacity:0,
    })
 })
 vid.addEventListener("mousemove",function(det){
    gsap.to(play,{
        left: det.x-70,
        top:det.y+80
    })
 })
}
video()
function card(){
    var hover=document.querySelectorAll(".dets")
    hover.forEach(function(elem){
        elem.addEventListener("mouseenter",function(e){
       var btm= e.target.childNodes[3];
            gsap.to(btm,{
                transform:   `translate(-50%,-0%)`,
                duration:.5,
                height:"170px"
            })
        })
        elem.addEventListener("mouseleave",function(){
            console.log("hello")
            gsap.to(".bottom",{
                transform:   `translate(-50%,-130%)`,
                duration:.5,
                height:"0px"
            })
        })
    })


}
card()
function cursor(){
  document.addEventListener("mousemove",function(det){
    gsap.to(".cursor",{
        left : det.x,
        top:det.y
    })
  })
  var child= document.querySelectorAll(".child")
  child.forEach(function(e){
    e.addEventListener("mouseenter",function(){
     gsap.to(".cursor",{
        transform:`translate(-50%,-50%) scale(1)`
     })
    })
    e.addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
           transform:`translate(-50%,-50%) scale(0)`
        })
       })
  })
}
cursor()
function products(){
 var products= document.querySelectorAll(".child")
 products.forEach(function(e){
    gsap.from(e,{
        scrollTrigger:{
            scroller:".main",
            trigger:e,
            start:"-100% 90%",
            end:"top -15%",
            scrub:true
        },
        scale:0,
    })
 })

}
products()