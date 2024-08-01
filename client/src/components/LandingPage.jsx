import React from 'react';

const LandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-row items-start justify-start pl-11 pr-0 box-border gap-[30px] leading-[normal] tracking-[normal] text-left text-16xl text-black font-roboto lg:flex-wrap lg:pb-5 lg:box-border ml-24 py-0 md:h-[980px]">

      <main className="flex-1 bg-lavender flex flex-col items-center justify-start pt-[237px] pb-[26px] pl-[21px] pr-5 box-border gap-[227px] min-w-[700px] max-w-full text-left text-3xl text-gray-100 font-roboto mq1050:pt-[154px] mq1050:pb-5 mq1050:box-border mq1050:min-w-full mq450:pt-[100px] mq450:box-border">
        <div className="w-[1077px] h-[982px] relative bg-lavender hidden max-w-full" />
        <section className="w-[650px] flex flex-col items-start justify-start gap-[11.5px] max-w-full text-left text-[50px] text-black font-roboto">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[11px] pr-[13px] box-border max-w-full">
            <img
              className="h-[313px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/imageremovebgpreview-1@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5">
            <h1 className="m-0 relative text-inherit tracking-[0.02em] font-bold font-[inherit] z-[1] mq450:text-[30px] mq750:text-[40px]">
              Pocket Notes
            </h1>
          </div>
          <div className="h-16 relative text-3xl tracking-[0.02em] leading-[32px] font-medium text-gray-100 inline-block z-[1] text-[22px]">
            <p className="m-0">
              Send and receive messages without keeping your phone online
            </p>
            <p className="m-0">
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        </section>
        <div className="w-[650px] flex flex-row items-start justify-center py-0 pl-0 pr-px box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[7px]">
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <img
                className="w-[17px] h-[21px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/vector1.svg"
              />
            </div>
            <div className="relative tracking-[0.02em] leading-[32px] z-[1] mq450:text-lg mq450:leading-[26px]">
              end-to-end encrypted
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;

{
  /* <div className="absolute bottom-5 right-[27%] flex flex-row items-center gap-2 justify-start pt-[5px] px-0 pb-0">
        <img
          className="w-[17px] h-[21px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/vector1.svg"
        />
        <div className=" tracking-[0.02em] leading-[32px] z-[1] mq450:text-lg mq450:leading-[26px]">
          end-to-end encrypted
        </div>
      </div> */
}
