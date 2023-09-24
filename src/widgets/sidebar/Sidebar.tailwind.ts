import ctl from "@netlify/classnames-template-literals";

export const sidebarContainerStyle = ctl(`
  absolute 
  bottom-0 
  left-0
  z-[1000]

  w-full 
  max-w-[350px] 
  h-[100vh] 
  bg-white

  transition-all 
  duration-300 
  ease-out 

  cursor-default
  rounded-r-[8px]
`);
