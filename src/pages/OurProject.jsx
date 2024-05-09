import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

export default function OurProjects() {
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
          end: () => "+=" + (window.innerWidth),
          onUpdate: () => {
            // Adjust width of pin-spacer to match viewport width
            gsap.set(".pin-spacer", { width: window.innerWidth });
          }
        }
      });
    }, component);
    return () => ctx.revert();
  }, []);
  

  return (
    <div className="App bg-background " ref={component}>

      <div ref={slider} className="contain w-screen h-screen flex flex-col items-center justify-center ">
        <div className="contain w-[90%] h-[70%] rounded-3xl bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl">
        <div className="description panel blue bg-white/20 shadow-lg ring-1 ring-black/5 backdrop-blur-3xl">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="panel red">ONE</div>
        <div className="panel orange">TWO</div>
        <div className="panel purple">THREE</div>
        </div>
      </div>
    </div>
  );
}
