import { convertToInitials } from "../utils/utils";

const NotePreview = ({ data, selected , setSelected }) => {

  return (
    <div
      className={`rounded-2xl ${
        selected?._id == data._id && "bg-darkslategray-200"
      } cursor-pointer flex flex-row items-start justify-start pt-[15px] px-[37px] pb-[14.1px] box-border gap-[30px] w-[435px] z-[2] text-left text-5xl text-white font-roboto mq450:flex-wrap `}
      onClick={()=>setSelected(data)}
    >
      <div className="h-[98px] w-[434px] relative rounded-2xl bg-darkslategray-200 hidden max-w-full" />
      <div className="h-[68.9px] w-[68.9px] relative">
        <div className={`absolute top-[0px] left-[0px] rounded-[50%] w-full h-full z-[3]`}  style={{ backgroundColor: data.color }} />
        <div className="absolute top-6 left-5  md:top-[23px] md:left-[17px] tracking-[0.02em] leading-[24px] font-medium inline-block min-w-[40px] z-[4] mq450:text-lgi mq450:leading-[19px]">
          {convertToInitials(data.name)}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-5 px-0 pb-0 text-black">
        <div className="relative tracking-[0.02em] font-medium inline-block min-w-[107px] z-[3] mq450:text-lgi">
          {data.name}
        </div>
      </div>
    </div>
  );
};

export default NotePreview;
