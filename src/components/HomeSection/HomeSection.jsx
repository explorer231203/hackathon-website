/* eslint-disable no-unused-vars */
import { GiElectricalResistance } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { IoBookSharp } from "react-icons/io5";
import { FaBucket } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa6";
import Slideshow from "../Slideshow/Slideshow";
import "animate.css";
import FeedPosts from "../FeedPosts/FeedPosts";

const HomeSection = () => {
  const handleclick = (index) => {
    if (index === 0) console.log("Electrical and Mechanical components");
    if (index === 1) console.log("Sports and gym");
    if (index === 2) console.log("Academic");
    if (index === 3) console.log("Amenities");
    if (index === 4) console.log("Others");
  };
  const categoryList = [
    {
      title: "Electrical components",
      img: <GiElectricalResistance size={30} />,
    },
    {
      title: "Sports and gym",
      img: <CgGym size={30} />,
    },
    {
      title: "Academic",
      img: <IoBookSharp size={30} />,
    },
    {
      title: "Amenities",
      img: <FaBucket size={30} />,
    },
    {
      title: "Mechanical components",
      img: <FaCartPlus size={30} />,
    },
  ];
  return (
    <main
      className="w-5/6 overflow-y-auto  flex flex-col scrollbar-hidden bg-gradient-to-b from-[#090e16] to-[#06090E]"
      style={{ height: "calc(100vh - var(--navbar-height))" }}
    >
      <Slideshow />
      {/* categories */}
      <div className="categories w-full bg-transparent px-10 pt-10 m-0 bg-gradient-to-b from-[#06090E] to-gray-900">
        <h2 className="text-2xl font-bold text-gray-200 mb-10">
          Browse by categories
        </h2>
        <div className="categories-container flex justify-between animation-element">
          {categoryList.map((catItem, index) => {
            return (
              <div
                className="catItem border-[3px] rounded-xl bg-transparent border-neutral-200 h-[10rem] w-[10rem] text-neutral-300 font-mono text-lg font-bold flex flex-col gap-3 justify-center items-center text-center hover:bg-red-500 hover:border-red-500 hover:tezt-black cursor-pointer active:border-[2.5px] active:border-red-500 active:text-red-500 active:bg-transparent  animate_animated hover:animate__pulse"
                key={index}
                onClick={() => handleclick(index)}
              >
                <h2>{catItem.title}</h2>
                {catItem.img}
              </div>
            );
          })}
        </div>
        <div className="item-section py-10 bg-transparent w-auto overflow-x-scroll">
          <h1 className="text-2xl text-gray-200 font-bold mb-8">Products</h1>
          <div className="item-container h-96 flex">
            <FeedPosts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeSection;
