// components/ResponsiveContainer.js
import Image from "next/image";
// import sampleImage from "/maggieUser.png"; // Replace with your image path

const ResponsiveContainer = () => {
  return (
    <div className="relative my-12 w-full max-w-4xl p-4">
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex-2 text-center md:text-right self-end">
          <p
            className="font-inter text-[48px] font-light leading-tight md:leading-[58.09px] mx-[25px] opacity-90 mb-[50px]
          relative w-full max-w-[447px] h-[116px] md:h-auto md:max-h-[116px] md:left-auto gap-0 opacity-[0.37] "
          >
            Late Night Maggie Party for the boost
          </p>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto h-80 w-80 md:h-[391.29px] md:w-[392.13px] transition-transform duration-300 ease-in-out hover:-rotate-[15deg] hover:scale-105">
            <Image
              src={"/maggieUser.png"}
              alt="Sample"
              // width={390}
              // height={390}
              className=" opacity-60 hover:opacity-100"
              layout="fill"
              objectFit="cover"
              style={{
                borderRadius: "35.19px 0px 0px 0px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveContainer;
