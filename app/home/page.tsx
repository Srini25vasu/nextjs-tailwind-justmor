"use client";
import Typewriter from "typewriter-effect";

const Page = (): JSX.Element => {
  return (
    <div className='bg-[url("../assets/beach-1.jpg")] h-screen bg-cover bg-fixed flex items-center'>
      <div className="container mx-auto px-4">
        <div className="max-w-[450px] text-white flex flex-col gap-[40px]">
          <div>
            <h1 className="text-3xl">I am Srinivasu Kakaraparti</h1>
            <h4 className="text-2xl mt-3">
              {" "}
              Srini
              <Typewriter
                options={{
                  strings: ["Fullstack Developer", "Software Architect"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h4>
          </div>
          <div className="bg-[#ff4D41] h-[2px] w-[40px]"></div>
          <div>
            <p>
              In a professional context it often happens developing fullstack
              for most of the client applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
