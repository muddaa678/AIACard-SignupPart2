import type { NextPage } from "next";
import AgeQuestion from "../components/age-question";
import AgeField from "../components/age-field";

const DesktopSignUp1: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-end justify-start gap-[4.437rem] leading-[normal] tracking-[normal] text-right text-[0.75rem] text-lightgray font-montserrat mq800:gap-[2.188rem] mq450:gap-[1.125rem] mq1300:flex-wrap">
      <div className="relative hidden min-w-[5.813rem]">Enter manually</div>
      <div className="w-[46.875rem] box-border flex flex-row items-start justify-start pt-[2.5rem] px-[4.812rem] pb-[1.687rem] min-w-[46.875rem] max-w-full z-[1] border-r-[1px] border-solid border-gray-200 mq800:pt-[1.625rem] mq800:px-[2.375rem] mq800:pb-[1.25rem] mq800:box-border mq1125:min-w-full mq1300:flex-1">
        <img
          className="h-[43rem] flex-1 relative max-w-full overflow-hidden object-cover mq1300:flex-1"
          loading="lazy"
          alt=""
          src="/screenshot-20240714-at-31226am-1@2x.png"
        />
        <div className="h-[47.188rem] w-[46.875rem] relative box-border hidden max-w-full border-r-[1px] border-solid border-gray-200" />
      </div>
      <div className="w-[33.875rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.25rem] box-border min-w-[33.875rem] max-w-full text-left text-[1.375rem] text-white mq800:min-w-full mq1300:flex-1">
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
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.937rem] max-w-full">
            <div className="self-stretch rounded-3xs bg-gray-200 box-border flex flex-col items-end justify-start pt-[1.5rem] px-[1.062rem] pb-[1.187rem] gap-[5.812rem] max-w-full border-[0px] border-solid border-gray-200 mq800:gap-[2.875rem] mq800:pt-[1.25rem] mq800:pb-[1.25rem] mq800:box-border mq450:gap-[1.438rem]">
              <img
                className="w-[33.875rem] h-[34.813rem] relative rounded-3xs hidden max-w-full"
                alt=""
                src="/rectangle-341.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.937rem] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.312rem] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                    <h3 className="m-0 relative text-inherit font-bold font-inherit z-[1] mq450:text-[1.125rem]">
                      Pre-Qualification
                    </h3>
                    <form className="m-0 self-stretch flex flex-row items-start justify-start gap-[2rem] mq800:gap-[1rem] mq450:flex-wrap">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.063rem]">
                        <AgeQuestion
                          age="Age"
                          yearsPlaceholder="18-65 years"
                          propPadding="unset"
                        />
                        <AgeQuestion
                          age="Nationality"
                          yearsPlaceholder="Sri Lanka"
                          propPadding="unset"
                        />
                      </div>
                      <AgeField />
                    </form>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] max-w-full text-[0.75rem] text-darkgray">
                    <b className="relative inline-block min-w-[3.25rem] z-[1]">
                      Address
                    </b>
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-[0.875rem] text-white">
                      <div className="self-stretch rounded-t-8xs rounded-b-none box-border flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[1.125rem] shrink-0 max-w-full z-[1] border-t-[2px] border-solid border-darkslategray border-r-[2px] border-l-[2px]">
                        <div className="h-[3.125rem] w-[29.875rem] relative rounded-t-8xs rounded-b-none box-border hidden max-w-full border-t-[2px] border-solid border-darkslategray border-r-[2px] border-l-[2px]" />
                        <div className="relative font-medium inline-block min-w-[5.813rem] z-[2]">
                          123 Lime Stre
                        </div>
                      </div>
                      <div className="self-stretch bg-gray-100 box-border flex flex-row items-start justify-start pt-[1.062rem] px-[1.625rem] pb-[1rem] shrink-0 whitespace-nowrap max-w-full z-[2] mt-[-0.063rem] border-r-[2px] border-solid border-darkslategray border-l-[2px]">
                        <div className="h-[3.125rem] w-[29.875rem] relative bg-gray-100 box-border hidden max-w-full border-r-[2px] border-solid border-darkslategray border-l-[2px]" />
                        <div className="relative font-medium z-[3]">
                          123 Lime Street, Dubai, United Arab Emirates, 0000
                        </div>
                      </div>
                      <div className="self-stretch rounded-t-none rounded-b-8xs bg-gray-200 box-border flex flex-row items-start justify-start pt-[1.062rem] px-[1.625rem] pb-[0.812rem] shrink-0 whitespace-nowrap max-w-full z-[3] mt-[-0.063rem] border-r-[2px] border-solid border-darkslategray border-b-[2px] border-l-[2px]">
                        <div className="h-[3.125rem] w-[29.875rem] relative rounded-t-none rounded-b-8xs bg-gray-200 box-border hidden max-w-full border-r-[2px] border-solid border-darkslategray border-b-[2px] border-l-[2px]" />
                        <div className="relative font-medium z-[4]">
                          123 Lime Street, Melbourne, Australia, MB12345
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] pt-[0.625rem] pb-[0.562rem] pr-[1.75rem] pl-[1.812rem] bg-goldenrod rounded-8xs flex flex-row items-start justify-start z-[1] hover:bg-darkgoldenrod">
                <div className="h-[2.25rem] w-[7.813rem] relative rounded-8xs bg-goldenrod hidden" />
                <b className="relative text-[0.875rem] inline-block font-montserrat text-black text-left min-w-[4.25rem] z-[2]">
                  Continue
                </b>
              </button>
            </div>
            <div className="relative text-[0.75rem] text-lightgray">
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

export default DesktopSignUp1;
