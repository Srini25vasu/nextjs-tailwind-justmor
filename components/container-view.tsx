import type { NextPage } from "next";
import NioWalletContainer from "./nio-wallet-container";

const ContainerView: NextPage = () => {
  return (
    <div className="w-[406px] flex flex-col items-start justify-start gap-[24px] text-left text-xl text-black1 font-tomorrow md:w-full">
      <div className="self-stretch relative">Overview</div>
      <div className="self-stretch bg-purple-500 flex flex-row py-[39px] px-10 items-center justify-start relative gap-[10px] text-xs text-white mq500small:pl-5 mq500small:pr-5 mq500small:box-border mq500small:justify-center">
        <div className="flex flex-col items-center justify-center gap-[25px] z-[0]">
          <img
            className="relative w-[205.25px] h-[306px] hidden mq500small:flex"
            alt=""
            src="/frame-2221.svg"
          />
          <div className="relative">Available balance in USD</div>
          <div className="relative text-11xl">134,510.15</div>
          <div className="w-[159px] flex flex-row items-center justify-between">
            <div className="relative w-[75px] h-[52.58px]">
              <div className="absolute top-[0px] left-[0px]">Transactions</div>
              <div className="absolute top-[26.58px] left-[0px] text-3xl">
                34,405
              </div>
            </div>
            <div className="relative w-[42px] h-[52.58px]">
              <div className="absolute top-[0px] left-[0px]">Wallets</div>
              <div className="absolute top-[26.58px] left-[0px] text-3xl">
                23
              </div>
            </div>
          </div>
          <div className="relative">Last activity at 21 May, 2021</div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[calc(50%_-_152.79px)] right-[-0.25px] w-[205.25px] h-[306px] z-[1] mq500small:hidden"
          alt=""
          src="/frame-2221.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[25px] text-2xs mq500small:flex-col">
        <NioWalletContainer
          walletBalance="NioWallet"
          walletBalanceNIO="4.434953"
          walletBalanceETH="NIO"
          walletAddressNIO="/bitcoin-icon.svg"
        />
        <NioWalletContainer
          walletBalance="Ethereum Wallet"
          walletBalanceNIO="0.000298"
          walletBalanceETH="ETH"
          walletAddressNIO="/icon.svg"
          propLetterSpacing="unset"
          propLetterSpacing1="unset"
          propWidth="12.67px"
        />
      </div>
    </div>
  );
};

export default ContainerView;
