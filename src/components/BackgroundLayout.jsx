const BackgroundLayout = ({ children }) => {
  return (
    <div className="w-full h-screen">
      <div className="fixed top-[-18.75em] left-[-31.25em] w-[62.50em] h-[68.75em] rotate-6 rounded-[50%] bg-background_gradient_1 opacity-80 blur-[12.50em]"></div>
      <div className="fixed top-[-6.25em] right-[6.25em] w-[37.5em] rotate-[30deg] h-[93.75em] rounded-[50%] bg-background_gradient_2 opacity-80 blur-[12.50em]"></div>
      {children}
    </div>
  );
};

export default BackgroundLayout;
