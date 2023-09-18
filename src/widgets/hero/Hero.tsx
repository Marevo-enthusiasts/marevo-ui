import { containerStyle, imageContainerStyle, leftImageStyle, rightImageStyle } from "./Hero.tailwind";

const Hero = () => {
  return (
    <div className={containerStyle}>
      <div className={`${imageContainerStyle}`}>
        <img 
          src="./assets/banner-6.jpg"
          alt="hero-left" 
          className={leftImageStyle}
        />
        <img 
          src="./assets/banner-9.jpg"
          alt="hero-right"
          className={rightImageStyle}
        />
      </div>
    </div>
  );
};

export default Hero;