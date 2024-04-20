const BackgroundLayout = ({ children }) => {
  return (
    <div className="overflow-hidden w-full h-screen bg-background">
      <div className="fixed top-[-18.75em] left-[-18.25em] w-[40em] h-[40em] rotate-6 rounded-[50%] bg-accent opacity-30 blur-[15em]"></div>
      <div className="fixed top-[-6.25em] right-0 w-[40em] rotate-[30deg] h-[60em] rounded-[50%] bg-accent opacity-30 blur-[15em]"></div>
      {children}
    </div>
  );
};

export default BackgroundLayout;
