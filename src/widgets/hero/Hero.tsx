const Hero = () => {
  return (
    <div className="flex h-[100vh] bg-red-100">
      <div className="flex-1 basis-[100%] overflow-hidden relative">
        <img src="./assets/banner-9.jpg" alt="hero" className="absolute top-0 right-0 object-cover w-[50%] h-full object-custom" />
        <img src="./assets/banner-6.jpg" alt="hero" className="absolute top-0 left-0 object-cover w-[50%] h-full object-bottom" />
      </div>
    </div>
  );
};

export default Hero;