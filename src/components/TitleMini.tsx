import React from "react";

const TitleMini = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-4 justify-center">
      <div className="h-[2px] w-[60px] lg:w-[200px] bg-primary-soft"></div>
      <p className="text-primary-original text-sm lg:text-base font-bold">
        {title}
      </p>
      <div className="h-[2px] w-[60px] lg:w-[200px] bg-primary-soft"></div>
    </div>
  );
};

export default TitleMini;
