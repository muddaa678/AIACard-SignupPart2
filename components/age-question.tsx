import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type AgeQuestionType = {
  className?: string;
  age?: string;
  yearsPlaceholder?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const AgeQuestion: NextPage<AgeQuestionType> = ({
  className = "",
  age,
  yearsPlaceholder,
  propPadding,
}) => {
  const ageQuestionStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-left text-[0.75rem] text-darkgray font-montserrat ${className}`}
      style={ageQuestionStyle}
    >
      <b className="w-[6.875rem] relative inline-block z-[1]">{age}</b>
      <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[0.937rem] z-[1] border-[2px] border-solid border-darkslategray">
        <div className="h-[3.125rem] w-[13.938rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
        <input
          className="w-[4.875rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
          placeholder={yearsPlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default AgeQuestion;
