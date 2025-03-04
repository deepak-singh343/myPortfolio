import { FaPlane } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
export const DividerForExperience = () => {
  return (
    <div className="w-full absolute flex md:justify-center justify-start top-4 h-full z-1">
      <div className=" border w-[1px] border-dashed border-[#0096fa6b] h-[60%] ml-[-1rem] md:ml-0">
        <div className="timeline-traveller sticky top-[500px] z-2">
          <div className="plane min-w-6 w-6 h-6 relative">
            <FaCarSide
              size={20}
              className=" w-full h-full absolute left-[-0.7rem] transform rotate-90 block text-[#2857a4]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
