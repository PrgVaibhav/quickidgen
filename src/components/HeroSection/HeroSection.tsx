import { useState } from "react";
import { LuClipboard, LuClipboardCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    setIsCopied((prev) => !prev);
  };

  return (
    <section className=" w-full mt-14   flex items-center   font-ubuntu ">
      <div className="hero-section-card flex flex-col gap-[2vw]">
        <div className="version-number bg-green-100 max-w-max px-3 py-1 border-2  border-green-700 rounded-md">
          <p className="text-green-600">🌟 V1.1.4</p>
        </div>
        <div className="info flex flex-col gap-[1.8vw]">
          <h1 className="text-4xl ">quickidgen</h1>
          <p className="text-gray-400 ">
            Quickidgen is a lightweight and customizable JavaScript utility for
            generating short, random unique IDs. It supports various character
            types—numbers, lowercase letters, uppercase letters, and special
            characters. You can easily exclude specific characters, making it a
            flexible solution for diverse applications.
          </p>
        </div>
        <div className="code-format flex gap-4 items-center">
          {/* <p className="flex items-center gap-4">
            npm install quickidgen
            {isCopied ? (
              <LuClipboardCheck
                className="cursor-pointer active:scale-90 "
                onClick={copyToClipboard}
              />
            ) : (
              <LuClipboard
                className="cursor-pointer active:scale-90 "
                onClick={copyToClipboard}
              />
            )}
          </p> */}
          <Link
            to={"/get-started"}
            className="bg-black px-4 py-2 rounded-md active:scale-90 flex gap-4 items-center shadow-md"
          >
            Get Started <FaLongArrowAltRight />
          </Link>
          <Link to={"/changelogs"}>Changelogs</Link>
        </div>
      </div>
    </section>
  );
};
