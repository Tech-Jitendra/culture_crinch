// components/ResponsiveContainer.js
import Image from "next/image";
// import sampleImage from "/maggieUser.png"; // Replace with your image path

const ResponsiveContainer = () => {
  return (
    <div className="relative mx-auto my-12 w-full max-w-3xl p-4 transition-opacity duration-300 ease-in-out hover:opacity-100 bg-dark">
      <div className="flex flex-col items-center md:flex-row bg-black">
        {/* gap-12 */}
        <div
          className="flex-1 text-center md:text-right bg-danger"
          // style={{ background: "red" }}
        >
          <p className="font-inter text-[48px] font-light leading-tight md:leading-[58.09px] mx-4 opacity-90">
            Late Night Maggie Party for the boost
          </p>
        </div>
        <div className="flex-1">
          <div className="relative mx-auto h-80 w-80 md:h-[391.29px] md:w-[392.13px] transition-transform duration-300 ease-in-out hover:-rotate-[11deg] hover:scale-105">
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
                //   background:
                //     "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56))",
                // opacity: 100,
                // transform: "rotate(11.33deg)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveContainer;
