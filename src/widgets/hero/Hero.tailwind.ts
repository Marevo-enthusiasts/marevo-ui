import ctl from "@netlify/classnames-template-literals";

export const containerStyle = ctl(`
  flex 
  h-[100vh]

  before:bg-black
  before:absolute
  before:inset-0
  before:z-[0]
  before:opacity-25
`);

export const imageContainerStyle = ctl(`
  flex-1 
  basis-full
  overflow-hidden 
  relative
  z-[-1]
`);

export const imageStyle = ctl(`
  absolute 
  top-0 
  object-cover 
  h-full
`);

export const rightImageStyle = ctl(`
  ${imageStyle}
  w-[60%]
  left-0
  object-custom
`);

export const leftImageStyle = ctl(`
  ${imageStyle}
  w-[40%]
  right-0
  object-top
`);