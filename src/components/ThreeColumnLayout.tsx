import { ReactNode } from "react";

interface ThreeColumnLayoutProps {
  leftContent: ReactNode;
  centerContent: ReactNode;
  rightContent: ReactNode;
  footerContent?: ReactNode;

  containerClassName?: string;
  leftClassName?: string;
  centerClassName?: string;
  rightClassName?: string;
}

export function ThreeColumnLayout({
  leftContent,
  centerContent,
  rightContent,
  footerContent,

  containerClassName = "relative z-10 flex flex-1 flex-col items-center justify-between px-6 py-4 lg:flex-row md:px-12 lg:px-16 xl:px-24",
  leftClassName = "flex w-full lg:w-[35%] xl:w-[35%] flex-col justify-center space-y-4 md:space-y-6 pt-10 lg:pt-0 text-center lg:text-left",
  centerClassName = "relative flex w-full flex-1 items-center justify-center py-8 lg:py-0 my-4 lg:my-0",
  rightClassName = "w-full lg:w-[30%] xl:w-[28%] grid grid-cols-1 lg:flex lg:flex-col justify-center gap-3 md:gap-4 lg:gap-6 z-20 pb-10 lg:pb-0",
}: ThreeColumnLayoutProps) {
  return (
    <div className="flex w-full flex-1 flex-col min-h-0">
      <div className={containerClassName}>
        <div className={leftClassName}>{leftContent}</div>

        <div className={centerClassName}>{centerContent}</div>

        <div className={rightClassName}>{rightContent}</div>
      </div>
      {footerContent}
    </div>
  );
}
