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
`);

export const horizintalLineStyle = ctl(`
  w-full 
  h-[1px] 
  my-2 
  bg-black/20
`);

export const navigationListStyle = ctl(`
  flex 
  flex-col 
  gap-[10px]
`);

export const listItemStyle = ctl(`
  px-8 
  py-2 
  font-[300] 
  text-lg 
  cursor-pointer 
  hover:opacity-70
`);