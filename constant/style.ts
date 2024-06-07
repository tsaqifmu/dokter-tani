//! dont forget to change tailwind.config.js file

export const styles = {
  //! General Styles
  boxWidth: "3xl:max-w-[1280px] w-full",
  boxWidthNavFoot: "xl:max-w-[1280px] w-full h-full",

  heading1: "font-bold text-2xl xl:text-[42px] xl:leading-[110%]",
  paragraph: "text-sm font-normal xl:text-lg ",

  flexCenter: "flex justify-center items-center ",
  flexStart: "flex justify-center items-start",
  flexJustifyEnd: "flex flex-1 items-center justify-end",

  paddingX: "px-4 md:px-14 lg:px-16 3xl:px-0 ",
  paddingY: "py-12 xl:py-20",

  padding: "px-5 xl:px-0 py-10 md:py-16 xl:py-20",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  //! Nav Styles
  navLink: "cursor-pointer text-[16px] font-medium text-slate-800",
  navLinkDesktop:
    "hover:text-greenWA text-base transition-all xl:text-lg mr-[30px]",
  navLinkMobile: "mb-4",
  mobileMenu:
    "min-w-[140px] sidebar absolute right-0 top-20 z-50 mx-4 my-2 flex-col rounded-xl bg-white p-6 shadow-2xl",
};
