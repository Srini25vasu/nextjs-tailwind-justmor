import ContainerView from "@/components/container-view";
//import SideBarContainer from "@/components/side-bar-container";

//import type { NextPage } from "next";
export default function Page(): JSX.Element {
  return (
    <>
      <div className="relative bg-white w-full h-[891px] flex flex-row items-start justify-start gap-[1px] text-left text-2xl text-text-21 font-tomorrow">
        <div className="py-11 px-[54px]">Dashboard</div>
        <div className="w-[1116px] h-[891px] flex flex-col py-11 px-[54px] box-border items-start justify-start gap-[51px] sm:pl-5 sm:pr-5 sm:box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px] md:flex-col">
            <div className="flex-1 flex flex-col items-start justify-start gap-[25px] md:pr-0 md:box-border md:flex-[unset] md:self-stretch sm:w-full">
              <div className="self-stretch relative">JusMore Dashboard</div>
              <div className="self-stretch overflow-x-auto flex flex-row items-center justify-between sm:w-full sm:gap-[5px] sm:overflow-hidden">
                <div className="relative w-12 h-12">
                  <div className="absolute top-[7px] left-[7px] rounded-3xs bg-green-400 w-[34px] h-[34px]" />
                  <img
                    className="absolute h-[27.08%] w-[18.75%] top-[37.5%] right-[41.67%] bottom-[35.42%] left-[39.58%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector3.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-smi box-border w-12 h-12 border-[2px] border-solid border-pallet-3-primary" />
                </div>
                <img
                  className="relative w-12 h-12"
                  alt=""
                  src="/group-711.svg"
                />
                <div className="relative w-12 h-12">
                  <div className="absolute top-[7px] left-[7px] rounded-3xs bg-red-700 w-[34px] h-[34px]" />
                  <img
                    className="absolute h-[31.25%] w-[28.13%] top-[35.42%] right-[38.54%] bottom-[33.33%] left-[33.33%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/shape.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-smi box-border w-12 h-12 border-[2px] border-solid border-white" />
                </div>
                <img
                  className="relative w-12 h-12"
                  alt=""
                  src="/group-713.svg"
                />
                <div className="relative w-12 h-12">
                  <div className="absolute top-[7px] left-[7px] rounded-3xs bg-blue-500 w-[34px] h-[34px]" />
                  <img
                    className="absolute h-[22.9%] w-[19.84%] top-[39.12%] right-[39.05%] bottom-[37.98%] left-[41.11%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/fill-925.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-smi box-border w-12 h-12 border-[2px] border-solid border-white" />
                </div>
                <img
                  className="relative w-12 h-12"
                  alt=""
                  src="/group-715.svg"
                />
                <div className="relative w-12 h-12 mq500small:hidden">
                  <div className="absolute top-[7px] left-[7px] rounded-3xs bg-cyan-400 w-[34px] h-[34px]" />
                  <img
                    className="absolute h-[27.08%] w-[23.7%] top-[34.38%] right-[38.15%] bottom-[38.54%] left-[38.15%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/shape1.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-smi box-border w-12 h-12 border-[2px] border-solid border-white" />
                </div>
                <img
                  className="relative w-12 h-12 mq500small:hidden"
                  alt=""
                  src="/group-717.svg"
                />
                <div className="relative w-12 h-12 mq500small:hidden">
                  <div className="absolute top-[7px] left-[7px] rounded-3xs bg-purple-600 w-[34px] h-[34px]" />
                  <img
                    className="absolute h-[33.33%] w-[18.75%] top-[31.25%] right-[39.58%] bottom-[35.42%] left-[41.67%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/fill-79.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] rounded-smi box-border w-12 h-12 border-[2px] border-solid border-green-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-[41px] text-base text-black2 md:flex-col">
            <ContainerView />
          </div>
        </div>
      </div>
    </>
  );
}
