import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="overflow-y:scroll h-full -webkit-overflow-scrolling: touch overflow-scrolling:touch" ref={component}>
      <div className="flex flex-col justify-center items-center h-screen bg-yellow-300 overflow-y:visible position:relative overflow-x:hidden">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div ref={slider} className="w-[600vh] h-[100vh] flex flex-wrap">
        <div className="description panel bg-blue-500">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="w-[100vh] h-[100vh] bg-red-500">ONE</div>
        <div className="w-[100vh] h-[100vh] bg-orange-500">TWO</div>
        <div className="w-[100vh] h-[100vh] bg-purple-500">THREE</div>
      </div>
      <div className="flex h-screen bg-yellow-300">Last Container</div>
    </div>
  );
}


