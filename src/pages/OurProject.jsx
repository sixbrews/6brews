import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import "./styles.css";
import { useGSAP } from "@gsap/react";
import { debounce } from "lodash"; // Import debounce function from lodash

gsap.registerPlugin(ScrollTrigger);

export default function OurProjects() {
  const component = useRef();
  const slider = useRef();

  // Debounce the scroll event
  useEffect(() => {
    const handleScroll = debounce(() => {
      gsap.set(".pin-spacer", { width: window.innerWidth });
    }, 100); // Adjust the debounce time as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none", // Smooth easing function
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1, // Reduced scrub value
          snap: 1 / (panels.length - 1),
          end: "+=" + window.innerWidth, // Reduced scroll distance
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App bg-background " ref={component}>
      <div
        ref={slider}
        className="contain w-screen h-screen flex flex-col items-center justify-center "
      >
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
