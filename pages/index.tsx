import type { NextPage } from "next";
import AgeQuestion from "../components/age-question";
import AgeField from "../components/age-field";
import FrameComponent from "../components/frame-component";

const DesktopSignUp: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-end justify-start gap-[4.437rem] leading-[normal] tracking-[normal] text-left text-[0.75rem] text-lightgray font-montserrat mq800:gap-[2.188rem] mq450:gap-[1.125rem] mq1300:flex-wrap">
      <div className="w-[46.875rem] box-border flex flex-row items-start justify-start pt-[2.5rem] px-[4.812rem] pb-[1.687rem] min-w-[46.875rem] max-w-full z-[1] border-r-[1px] border-solid border-gray-200 mq800:pt-[1.625rem] mq800:px-[2.375rem] mq800:pb-[1.25rem] mq800:box-border mq1125:min-w-full mq1300:flex-1">
        <img
          className="h-[43rem] flex-1 relative max-w-full overflow-hidden object-cover mq1300:flex-1"
          loading="lazy"
          alt=""
          src="/screenshot-20240714-at-31226am-1@2x.png"
        />
        <div className="h-[47.188rem] w-[46.875rem] relative box-border hidden max-w-full border-r-[1px] border-solid border-gray-200" />
      </div>
      <div className="w-[33.875rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.312rem] box-border min-w-[33.875rem] max-w-full mq800:min-w-full mq1300:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.437rem] max-w-full mq800:gap-[1.188rem]">
          <header className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0.437rem] pl-[0rem] gap-[1.25rem] text-left text-[2rem] text-white font-montserrat">
            <img
              className="h-[3.313rem] w-[12.375rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/ai-analysis-logo-13-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
              <a className="[text-decoration:none] relative font-bold text-[inherit] whitespace-nowrap">
                Sign Up
              </a>
            </div>
          </header>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.187rem] max-w-full">
            <form className="m-0 self-stretch rounded-3xs bg-gray-200 box-border flex flex-col items-start justify-start pt-[1.5rem] pb-[1.125rem] pr-[1.125rem] pl-[2rem] gap-[0.75rem] max-w-full border-[0px] border-solid border-gray-200 mq800:pt-[1.25rem] mq800:pb-[1.25rem] mq800:box-border">
              <img
                className="w-[33.875rem] h-[34.5rem] relative rounded-3xs hidden max-w-full"
                alt=""
                src="/rectangle-34.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] pb-[0.562rem] pr-[0.875rem] pl-[0rem] gap-[0.75rem]">
                <h2 className="m-0 relative text-[1.375rem] font-bold font-montserrat text-white text-left z-[1] mq450:text-[1.125rem]">
                  Pre-Qualification
                </h2>
                <div className="self-stretch flex flex-row items-start justify-start gap-[2rem] mq800:gap-[1rem] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.063rem]">
                    <AgeQuestion age="Age" yearsPlaceholder="18-65 years" />
                    <AgeQuestion
                      age="Nationality"
                      yearsPlaceholder="Sri Lanka"
                      propPadding="unset"
                    />
                  </div>
                  <AgeField />
                </div>
              </div>
              <AgeQuestion
                age="Address"
                yearsPlaceholder="Sri Lanka"
                propPadding="0rem 0.875rem 0rem 0rem"
              />
              <div className="flex flex-row items-start justify-start pt-[0rem] pb-[0.562rem] pr-[1.25rem] pl-[0rem]">
                <b className="relative text-[0.75rem] inline-block font-montserrat text-white text-right min-w-[6rem] z-[1]">
                  Enter manually
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.375rem] pr-[0.875rem] pl-[0rem] gap-[2rem] mq800:gap-[1rem] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border min-w-[9.063rem]">
                  <FrameComponent city="City" />
                </div>
                <FrameComponent
                  city="State"
                  propAlignSelf="unset"
                  propFlex="1"
                  propMinWidth="9.063rem"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                <b className="relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left min-w-[6.25rem] z-[1]">
                  Postal/Zip Code
                </b>
                <div className="self-stretch flex flex-row items-end justify-between gap-[1.25rem] mq450:flex-wrap">
                  <div className="w-[13.938rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.125rem] box-border">
                    <div className="self-stretch rounded-8xs flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[0.937rem] z-[1] border-[2px] border-solid border-darkslategray">
                      <div className="h-[3.125rem] w-[13.938rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-darkslategray" />
                      <input
                        className="w-[3rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[2]"
                        placeholder="123456"
                        type="text"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] pt-[0.625rem] pb-[0.562rem] pr-[1.75rem] pl-[1.812rem] bg-goldenrod rounded-8xs flex flex-row items-start justify-start z-[1] hover:bg-darkgoldenrod">
                    <div className="h-[2.25rem] w-[7.813rem] relative rounded-8xs bg-goldenrod hidden" />
                    <b className="relative text-[0.875rem] inline-block font-montserrat text-black text-left min-w-[4.25rem] z-[2]">
                      Continue
                    </b>
                  </button>
                </div>
              </div>
            </form>
            <div className="relative">
              <span>
                <span>Don’t have an account?</span>
                <span className="text-darkgray">{` `}</span>
              </span>
              <b className="text-white">Sign Up</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSignUp;
