const BackgroundLayout = ({ children }) => {
  return (
    <div className="overflow-hidden w-full h-screen">
      <div className="fixed top-[-300px] left-[-500px] w-[1000px] h-[1100px] rotate-6 rounded-[50%] bg-background_gradient_1 opacity-80 blur-[200px]"></div>
      <div className="fixed top-[-100px] right-[-100px] w-[600px] rotate-[30deg] h-[1500px] rounded-[50%] bg-background_gradient_2 opacity-80 blur-[200px]"></div>
      {children}
    </div>
  );
};

export default BackgroundLayout;
