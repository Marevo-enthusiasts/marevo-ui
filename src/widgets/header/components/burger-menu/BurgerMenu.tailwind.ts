import ctl from "@netlify/classnames-template-literals";

export const containerStyle = ctl(`
  p-2 
  rounded-[50%] 
  transition-colors 
  duration-200 
  ease-in-out 
  text-2xl 
  hover:bg-white/5 
  cursor-pointer
`);