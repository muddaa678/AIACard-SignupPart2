import type { NextPage } from "next";
import AgeQuestion from "../components/age-question";

const DesktopSignUp2: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-end justify-start gap-[4.437rem] leading-[normal] tracking-[normal] text-left text-[0.875rem] text-white font-montserrat mq800:gap-[2.188rem] mq450:gap-[1.125rem] mq1300:flex-wrap">
      <div className="relative font-medium hidden min-w-[5.813rem]">
        123 Lime Stre
      </div>
      <div className="w-[46.875rem] box-border flex flex-row items-start justify-start pt-[2.5rem] px-[4.812rem] pb-[1.687rem] min-w-[46.875rem] max-w-full z-[1] border-r-[1px] border-solid border-gray-200 mq800:pt-[1.625rem] mq800:px-[2.375rem] mq800:pb-[1.25rem] mq800:box-border mq1125:min-w-full mq1300:flex-1">
        <img
          className="h-[43rem] flex-1 relative max-w-full overflow-hidden object-cover mq1300:flex-1"
          loading="lazy"
          alt=""
          src="/screenshot-20240714-at-31226am-1@2x.png"
        />
        <div className="h-[47.188rem] w-[46.875rem] relative box-border hidden max-w-full border-r-[1px] border-solid border-gray-200" />
      </div>
      <div className="w-[33.875rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.25rem] box-border min-w-[33.875rem] max-w-full text-[1.375rem] mq800:min-w-full mq1300:flex-1">
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
            <div className="self-stretch h-[34.813rem] relative rounded-3xs bg-gray-200 max-w-full z-[1] mq450:h-auto mq450:min-h-[557]">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-3xs w-full h-full hidden"
                alt=""
                src="/rectangle-341.svg"
              />
              <button className="cursor-pointer [border:none] pt-[0.625rem] pb-[0.562rem] pr-[1.75rem] pl-[1.812rem] bg-goldenrod absolute top-[31.375rem] left-[25rem] rounded-8xs flex flex-row items-start justify-start z-[2] hover:bg-darkgoldenrod">
                <div className="h-[2.25rem] w-[7.813rem] relative rounded-8xs bg-goldenrod hidden" />
                <b className="relative text-[0.875rem] inline-block font-montserrat text-black text-left min-w-[4.25rem] z-[3]">
                  Continue
                </b>
              </button>
              <div className="absolute top-[16.313rem] left-[2rem] rounded-8xs box-border w-[29.875rem] h-[3.125rem] z-[2] border-[2px] border-solid border-darkslategray" />
              <div className="absolute top-[1.5rem] left-[2rem] w-[29.875rem] flex flex-col items-start justify-start gap-[0.75rem] max-w-full">
                <a className="[text-decoration:none] relative font-bold text-[inherit] z-[2] mq450:text-[1.125rem]">
                  Pre-Qualification
                </a>
                <form className="m-0 self-stretch flex flex-row items-start justify-start gap-[2rem] mq450:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.063rem]">
                    <AgeQuestion
                      age="Age"
                      yearsPlaceholder="18-65 years"
                      propPadding="unset"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.218rem]">
                      <b className="relative text-[0.75rem] inline-block font-montserrat text-darkgray text-left min-w-[4.313rem] z-[2]">
                        Nationality
                      </b>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch rounded-t-8xs rounded-b-none flex flex-row items-start justify-start pt-[0.75rem] px-[1.625rem] pb-[0.937rem] z-[2] border-[2px] border-solid border-darkslategray">
                            <div className="h-[3.125rem] w-[13.938rem] relative rounded-t-8xs rounded-b-none box-border hidden border-[2px] border-solid border-darkslategray" />
                            <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left inline-block min-w-[3.063rem] z-[3]">
                              Sri Lan
                            </div>
                          </div>
                          <div className="self-stretch bg-gray-100 flex flex-row items-start justify-start pt-[0.937rem] px-[1.625rem] pb-[1.125rem] z-[4] mt-[-0.063rem] border-r-[2px] border-solid border-darkslategray border-l-[2px]">
                            <b className="relative text-[0.75rem] hidden font-montserrat text-darkgray text-left min-w-[3.25rem]">
                              Address
                            </b>
                            <div className="h-[3.125rem] w-[13.938rem] relative bg-gray-100 box-border hidden border-r-[2px] border-solid border-darkslategray border-l-[2px]" />
                            <input
                              className="w-[4.125rem] [border:none] [outline:none] font-medium font-montserrat text-[0.875rem] bg-[transparent] h-[1.063rem] relative text-white text-left inline-block p-0 z-[1]"
                              placeholder="Sri Lanka"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="self-stretch rounded-t-none rounded-b-8xs bg-gray-200 flex flex-row items-start justify-start py-[0.937rem] px-[1.625rem] whitespace-nowrap z-[3] border-r-[2px] border-solid border-darkslategray border-b-[2px] border-l-[2px]">
                          <div className="h-[3.125rem] w-[13.938rem] relative rounded-t-none rounded-b-8xs bg-gray-200 box-border hidden border-r-[2px] border-solid border-darkslategray border-b-[2px] border-l-[2px]" />
                          <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left inline-block min-w-[5.5rem] z-[1]">
                            Sierra Leone
                          </div>
                        </div>
                      </div>
                      <div className="relative text-[0.75rem] font-montserrat text-lightgray text-right inline-block min-w-[5.813rem] z-[2]">
                        Enter manually
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[9.063rem]">
                    <AgeQuestion
                      age="Are you a political person?"
                      yearsPlaceholder="No"
                      propPadding="unset"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                      <b className="relative text-[0.75rem] font-montserrat text-darkgray text-left z-[2]">
                        Country of Residence
                      </b>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <button className="cursor-pointer [border:none] pt-[0.75rem] px-[1.625rem] pb-[1.125rem] bg-[transparent] self-stretch rounded-t-8xs rounded-b-none flex flex-row items-start justify-start z-[2] border-t-[2px] border-solid border-darkslategray border-r-[2px] border-l-[2px] hover:bg-dimgray-300">
                            <div className="h-[3.125rem] w-[13.938rem] relative rounded-t-8xs rounded-b-none box-border hidden border-t-[2px] border-solid border-darkslategray border-r-[2px] border-l-[2px]" />
                            <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left z-[3]">
                              United Arab Emirates
                            </div>
                          </button>
                          <div className="self-stretch bg-gray-200 flex flex-row items-start justify-start pt-[0.937rem] px-[1.625rem] pb-[1.125rem] whitespace-nowrap z-[4] mt-[-0.063rem] border-r-[2px] border-solid border-darkslategray border-l-[2px]">
                            <div className="h-[3.125rem] w-[13.938rem] relative bg-gray-200 box-border hidden border-r-[2px] border-solid border-darkslategray border-l-[2px]" />
                            <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left inline-block min-w-[7.438rem] z-[1]">
                              United Kingdom
                            </div>
                          </div>
                        </div>
                        <button className="cursor-pointer [border:none] py-[0.937rem] px-[1.625rem] bg-gray-100 self-stretch rounded-t-none rounded-b-8xs flex flex-row items-start justify-start whitespace-nowrap z-[3] border-r-[2px] border-solid border-darkslategray border-b-[2px] border-l-[2px] hover:bg-dimgray-200">
                          <div className="h-[3.125rem] w-[13.938rem] relative rounded-t-none rounded-b-8xs bg-gray-100 box-border hidden border-r-[2px] border-solid border-darkslategray border-b-[2px] border-l-[2px]" />
                          <div className="relative text-[0.875rem] font-medium font-montserrat text-white text-left z-[1]">
                            United Arab Emirates
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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

export default DesktopSignUp2;
