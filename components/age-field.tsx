import type { NextPage } from "next";

export type AgeFieldType = {
  className?: string;
};

const AgeField: NextPage<AgeFieldType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.063rem] text-left text-[0.75rem] text-darkgray font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
        <b className="relative z-[1]">Are you a political person?</b>
        <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-[0.75rem] px-[1.187rem] pb-[0.937rem] z-[1] border-[2px] border-solid border-darkslategray">
          <div className="h-[3.125rem] w-[13.938rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
          <input
            className="w-[1.313rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
            placeholder="No"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
        <b className="relative z-[1]">Country of Residence</b>
        <button className="cursor-pointer pt-[0.75rem] px-[1.625rem] pb-[0.937rem] bg-[transparent] self-stretch rounded-8xs flex flex-row items-start justify-start z-[1] border-[2px] border-solid border-darkslategray hover:bg-dimgray-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-100">
          <div className="h-[3.125rem] w-[13.938rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
          <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left z-[2]">
            United Arab Emirates
          </div>
        </button>
      </div>
    </div>
  );
};

export default AgeField;
