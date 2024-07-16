import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  city?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  city,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.25rem] text-left text-[0.75rem] text-darkgray font-montserrat ${className}`}
      style={frameDivStyle}
    >
      <b className="relative inline-block min-w-[1.563rem] z-[1]">{city}</b>
      <button className="cursor-pointer pt-[0.75rem] px-[1.625rem] pb-[0.937rem] bg-[transparent] self-stretch rounded-8xs flex flex-row items-start justify-start z-[1] border-[2px] border-solid border-darkslategray hover:bg-dimgray-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-dimgray-100">
        <div className="h-[3.125rem] w-[13.938rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
        <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left z-[2]">
          United Arab Emirates
        </div>
      </button>
    </div>
  );
};

export default FrameComponent;
