import { aboutContent, internInfo } from "../data/internInfo";
import banner from "../assets/images/banner.png";

const ApplyContent = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center mt-20">
      <div className="w-1/2 flex flex-col items-center justify-center shadow-2xl my-10">
        <div className="w-full h-64 bg-white rounded-t-3xl">
          <img
            src={banner}
            alt="banner-image"
            className="w-full h-full object-cover rounded-t-3xl"
          />
        </div>
        <div className="w-full bg-form_background text-text_color rounded-b-3xl px-20 pb-10 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="mt-8">
              <h1 className="text-4xl font-semibold mb-2">
                Web Development Intern
              </h1>
              <span className="font-medium text-lg">
                Location: Remote(Work from home)
              </span>
              <br />
              <span className="font-medium text-lg">Hours: Flexible</span>
            </div>
            <button className="z-10 cursor-pointer bg-accent text-text_color hover:bg-transparent border-2 border-accent hover:text-accent transition-all duration-150 h-10 uppercase w-[120px] text-sm rounded-[10rem] font-medium">
              Apply
            </button>
          </div>
          <AboutContent content={aboutContent[0]} />
          <AboutContent content={aboutContent[1]} />
          <AboutIntern content={internInfo[0]} />
        </div>
      </div>
    </div>
  );
};

export default ApplyContent;

const AboutContent = ({ content }) => {
  return (
    <div>
      <h2 className="text-2xl font-medium my-3">{content.title}</h2>
      <p className="text-md font-light text-justify">{content.content}</p>
    </div>
  );
};

const AboutIntern = ({ content }) => {
  const [firstSentence, ...rest] = content.why.split("?");

  return (
    <div>
      <h2 className="text-2xl font-medium my-3">{content.name}</h2>
      <ul className="list-disc">
        {content.about.split(".").map(
          (text, index) =>
            text.length !== 0 && (
              <li
                key={index}
                className="ml-5 text-md font-light text-justify mb-2"
              >
                {text}.
              </li>
            )
        )}
      </ul>
      <h2 className="text-2xl font-medium mt-8 my-3">{firstSentence}?</h2>
      <ul className="list-disc">
        {rest
          .join(".")
          .split(".")
          .splice(1)
          .map(
            (text, index) =>
              text.length !== 0 && (
                <li
                  key={index}
                  className="ml-5 text-md font-light text-justify mb-2"
                >
                  {text}.
                </li>
              )
          )}
      </ul>
    </div>
  );
};
