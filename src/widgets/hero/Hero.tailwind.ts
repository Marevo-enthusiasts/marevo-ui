import ctl from "@netlify/classnames-template-literals";

export const containerStyle = ctl(`
  flex 
  h-[100vh]
`);

export const imageContainerStyle = ctl(`
  flex-1 
  basis-full
  overflow-hidden 
  relative
`);

export const imageStyle = ctl(`
  absolute 
  top-0 
  object-cover 
  w-[50%] 
  h-full
`);

export const rightImageStyle = ctl(`
  ${imageStyle}
  left-0
  object-custom
`);

export const leftImageStyle = ctl(`
  ${imageStyle}
  right-0
  object-custom
`);