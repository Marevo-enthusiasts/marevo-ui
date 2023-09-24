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
  h-full
`);

export const leftImageStyle = ctl(`
  ${imageStyle}
  left-0
  object-top
  w-[60%]
`);

export const rightImageStyle = ctl(`
  ${imageStyle}
  right-0
  object-top
  w-[40%]
`);