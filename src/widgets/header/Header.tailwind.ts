import ctl from '@netlify/classnames-template-literals';

export const containerStyle = ctl(`
  h-[60px] 
  opacity-90 
  fixed
  inset-0
  z-[100]
`);

export const containerElements = ctl(`
  px-4
  py-2
  flex 
  justify-between 
  items-center
`);