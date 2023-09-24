import ctl from '@netlify/classnames-template-literals';

export const containerStyle = ctl(`
  h-[60px] 
  opacity-90 
  fixed
  inset-0
  z-[100]

  after:absolute
  after:bg-white
  after:w-full
  after:h-[1.4px]
  after:opacity-[.5]  
`);

export const containerElementsStyle = ctl(`
  px-4
  py-2
  flex 
  justify-between 
  items-center
`);