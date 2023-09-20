import ctl from "@netlify/classnames-template-literals";

export const containerStyle = ctl(`
  flex 
  items-center 
  gap-4
`);

export const itemStyle = ctl(`
  first:pl-8 
  last:text-[18px] 
  py-2 
  font-roboto-light 
  text-xl 
  cursor-pointer 
  hover:opacity-70
`);