import { FunctionComponent } from "react";

export type ProfileType = {
  className?: string;
};

const Profile: FunctionComponent<ProfileType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1366px] [background:linear-gradient(180deg,_#fbfdfc,_#e5f6fe)] max-w-full overflow-hidden flex flex-col items-start justify-start gap-[30px] leading-[normal] tracking-[normal] text-left text-base text-gray-400 font-noto-sans ${className}`}
    >
      <div className="self-stretch h-[826px] relative bg-whitesmoke hidden" />
      <header className="self-stretch h-[60px] sticky top-[0] z-[99]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full"
          alt=""
          src="/rectangle-41159.svg"
        />
        <img
          className="absolute top-[9.8px] left-[30px] w-[93.2px] h-10 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/layer-1-copy-1@2x.png"
        />
        <img
          className="absolute top-[9.8px] left-[1292px] w-10 h-10 overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/alignjustify.svg"
        />
        <img
          className="absolute top-[11.8px] left-[1184px] w-9 h-9 overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/user-interfacenotification.svg"
        />
        <img
          className="absolute top-[13.8px] left-[1240px] rounded-[54px] w-8 h-8 object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-41106@2x.png"
        />
      </header>
      <img
        className="w-[52.4px] h-[54.5px] relative object-cover hidden mix-blend-multiply"
        alt=""
        src="/image-36@2x.png"
      />
      <div className="w-[54px] h-4 hidden" />
      <img
        className="w-[1306px] relative rounded-3xs max-h-full hidden max-w-full"
        alt=""
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[30px] pb-[9px] box-border max-w-full text-left text-[20px] text-darkslategray-200 font-playfair-display">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
          <h3 className="m-0 relative text-inherit leading-[110%] font-normal font-[inherit] inline-block min-w-[127px] mq450:text-base mq450:leading-[18px]">
            Profile Details
          </h3>
          <div className="self-stretch flex flex-row items-end justify-start gap-[30px] max-w-full text-center text-lg text-gray-100 font-noto-sans mq1100:flex-wrap">
            <div className="w-[350px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[350px] max-w-full mq450:min-w-full mq1100:flex-1">
              <div className="self-stretch rounded-3xs bg-white border-lightblue border-[0px] border-solid box-border flex flex-col items-start justify-start pt-[21px] px-5 pb-5 gap-[34px] max-w-full gap-[17px] mq750:pt-5 mq750:box-border">
                <img
                  className="w-[350px] h-[518px] relative rounded-3xs hidden max-w-full"
                  alt=""
                  src="/rectangle-41131.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px]">
                    <div className="flex flex-col items-end justify-start gap-2.5">
                      <div className="flex flex-row items-start justify-end py-0 px-2.5">
                        <img
                          className="h-[120px] w-[121px] relative object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/group-1000009243@2x.png"
                        />
                      </div>
                      <div className="relative leading-[20px] z-[1]">
                        Mathew Thomas
                      </div>
                      <div className="flex flex-row items-start justify-end py-0 pl-[31px] pr-[30px] text-sm">
                        <div className="relative leading-[110%] inline-block min-w-[80px] z-[1]">
                          <span>{`28 yr `}</span>
                          <span className="text-gray-200">|</span>
                          <span> Male</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                    loading="lazy"
                    alt=""
                    src="/vector-234251190.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[15px] gap-2.5 text-left text-sm mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[29px]">
                    <div className="flex flex-row items-start justify-start py-0 pl-px pr-0.5">
                      <div className="h-5 w-[27.4px] relative z-[1]">
                        <div className="absolute top-[2.8px] left-[0px] rounded-[1.21px] [background:linear-gradient(180deg,_#ffa543,_#ffcc83)] w-[15.5px] h-[10.4px]" />
                        <img
                          className="absolute top-[0px] left-[3.2px] w-[24.1px] h-5 z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector-234251191.svg"
                        />
                      </div>
                    </div>
                    <img
                      className="w-[30px] h-[30px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/frame-1000008975.svg"
                    />
                    <img
                      className="w-[30px] h-[30px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/frame-1000008977.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[175px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[38.5px] gap-[19px]">
                      <div className="relative leading-[110%] whitespace-nowrap z-[1]">
                        matt.mathew@gmail.com
                      </div>
                      <div className="relative leading-[110%] inline-block min-w-[90px] z-[1]">
                        626-358-7271
                      </div>
                      <div className="self-stretch relative leading-[145%] z-[1]">
                        Maria A Mendoza De Zuniga, 2929 SW 19th St Oklahoma
                        City, OK 73108-4410
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-2.5 mq450:flex-wrap">
                  <button className="cursor-pointer border-darkslategray-100 border-[1px] border-solid py-[11px] px-[61px] bg-[transparent] shadow-[0px_6px_10px_rgba(63,_63,_63,_0.3)] rounded-21xl flex flex-row items-start justify-start z-[1] hover:bg-dimgray-200 hover:border-dimgray-100 hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="relative text-sm tracking-[0.5px] leading-[100%] font-lato text-darkslategray-100 text-left inline-block min-w-[27px]">
                      Edit
                    </div>
                  </button>
                  <button className="cursor-pointer border-darkslategray-100 border-[1px] border-solid py-[11px] px-4 bg-[transparent] shadow-[0px_6px_10px_rgba(63,_63,_63,_0.3)] rounded-21xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-dimgray-200 hover:border-dimgray-100 hover:border-[1px] hover:border-solid hover:box-border">
                    <div className="relative text-sm tracking-[0.5px] leading-[100%] font-lato text-darkslategray-100 text-left inline-block min-w-[117px]">
                      Change Password
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[602px] max-w-full text-left text-base mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-lg text-darkslategray-200 font-playfair-display">
                <div className="relative leading-[20px]">
                  Setting and Preferences
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-234251190-1.svg"
                />
              </div>
              <div className="w-[327.5px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[21.5px] max-w-full">
                <div className="w-[262px] flex flex-col items-start justify-start gap-2.5">
                  <div className="w-[75px] relative leading-[18px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Language
                  </div>
                  <div className="self-stretch relative text-sm leading-[110%] font-light [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Select Language you are comforable with
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[15.5px] px-[15px] pb-[15px] relative text-on-surface-high-emphasis">
                  <a className="[text-decoration:none] relative tracking-[0.15px] leading-[24px] text-[inherit] inline-block min-w-[56px] z-[1]">
                    English
                  </a>
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/label.svg"
                    />
                    <img
                      className="absolute top-[14.5px] left-[291.5px] w-6 h-6 z-[1]"
                      alt=""
                      src="/trailing-icon.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[354px] flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-3 max-w-full">
                <div className="w-24 relative leading-[18px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                  Notifications
                </div>
                <div className="self-stretch relative text-sm leading-[110%] font-light [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                  Let us know how and when you would like to be notified
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full text-sm">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-gray-300">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
                    <div className="w-[528px] flex flex-row items-start justify-start gap-[37px] max-w-full mq750:flex-wrap gap-[18px]">
                      <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[109px]">
                        <div className="relative leading-[24px] inline-block min-w-[64px]">
                          Scenarios
                        </div>
                      </div>
                      <div className="w-[84px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border font-nunito-sans">
                        <div className="relative leading-[24px] inline-block min-w-[51px]">
                          Via Mail
                        </div>
                      </div>
                      <div className="relative leading-[24px] inline-block min-w-[52px]">
                        Via SMS
                      </div>
                      <div className="relative leading-[24px] inline-block min-w-[113px]">
                        Push Notification
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0 text-gray-100">
                      <div className="flex flex-row items-start justify-start gap-2.5">
                        <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                          <div className="relative leading-[110%] inline-block min-w-[65px]">
                            Enable All
                          </div>
                        </div>
                        <div className="h-[18px] w-[33px] relative">
                          <div className="absolute h-[66.67%] w-[75.76%] top-[16.67%] right-[24.24%] bottom-[16.67%] left-[0%] rounded-md bg-colors-bluewood-30" />
                          <img
                            className="absolute h-full w-[54.55%] top-[0%] right-[0%] bottom-[0%] left-[45.45%] max-w-full overflow-hidden max-h-full z-[1]"
                            alt=""
                            src="/switch-indicator.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
                  <img
                    className="flex-1 relative max-w-full overflow-hidden max-h-full mt-[-1px]"
                    alt=""
                    src="/toggle-labels.svg"
                  />
                </div>
                <div className="w-[485px] flex flex-row items-start justify-between pt-0 pb-[5px] pl-0 pr-0.5 box-border gap-5 max-w-full mq450:flex-wrap">
                  <div className="w-[126px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                    <div className="relative leading-[24px] inline-block min-w-[97px]">
                      Policy Updates
                    </div>
                  </div>
                  <input
                    className="m-0 h-6 w-6 relative min-h-[24px]"
                    type="checkbox"
                  />
                  <input
                    className="m-0 h-6 w-6 relative min-h-[24px]"
                    type="checkbox"
                  />
                  <input
                    className="m-0 h-6 w-6 relative min-h-[24px]"
                    type="checkbox"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
                  <img
                    className="flex-1 relative max-w-full overflow-hidden max-h-full mt-[-1px]"
                    alt=""
                    src="/vector-401.svg"
                  />
                </div>
                <div className="w-[485px] flex flex-row items-start justify-between pt-0 px-0 pb-1.5 box-border gap-5 max-w-full mq450:flex-wrap">
                  <div className="relative leading-[24px] inline-block min-w-[127px]">
                    Payment Reminder
                  </div>
                  <input
                    className="m-0 h-6 w-6 relative min-h-[24px]"
                    type="checkbox"
                  />
                  <input
                    className="m-0 h-6 w-6 relative min-h-[24px]"
                    type="checkbox"
                  />
                  <input
                    className="m-0 h-6 w-6 relative min-h-[24px]"
                    type="checkbox"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
                  <img
                    className="flex-1 relative max-w-full overflow-hidden max-h-full mt-[-1px]"
                    loading="lazy"
                    alt=""
                    src="/vector-401.svg"
                  />
                </div>
                <div className="w-[485px] flex flex-row items-start justify-between pt-0 pb-1.5 pl-0 pr-0.5 box-border gap-5 max-w-full mq450:flex-wrap">
                  <div className="w-[126px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                    <div className="relative leading-[24px] inline-block min-w-[96px]">
                      Claim Updates
                    </div>
                  </div>
                  <input
                    className="m-0 h-6 w-6 relative min-h-[24px]"
                    type="checkbox"
                  />
                  <input
                    className="m-0 h-6 w-6 relative min-h-[24px]"
                    type="checkbox"
                  />
                  <input
                    className="m-0 h-6 w-6 relative min-h-[24px]"
                    type="checkbox"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full">
                  <img
                    className="flex-1 relative max-w-full overflow-hidden max-h-full mt-[-1px]"
                    loading="lazy"
                    alt=""
                    src="/vector-1181.svg"
                  />
                </div>
                <div className="w-[489px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[17px]">
                      <div className="relative leading-[24px] inline-block min-w-[105px]">
                        News and Blogs
                      </div>
                    </div>
                    <input
                      className="m-0 h-6 w-6 relative min-h-[24px]"
                      type="checkbox"
                    />
                    <input
                      className="m-0 h-6 w-6 relative min-h-[24px]"
                      type="checkbox"
                    />
                    <input
                      className="m-0 h-6 w-6 relative min-h-[24px]"
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch border-lightgray border-t-[1px] border-solid flex flex-row items-start justify-between pt-[13px] pb-[15px] pl-8 pr-5 gap-5 mq750:flex-wrap">
        <div className="relative leading-[22px] mix-blend-normal">
          © 2024 Smart IMS. All rights reserved.
        </div>
        <div className="relative leading-[22px] text-dark whitespace-pre-wrap">
          Terms of Service Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Profile;
