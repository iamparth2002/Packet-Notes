import { ArrowLeft } from 'lucide-react';
import { convertToInitials } from '../utils/utils';

const PersonalNote = ({ selected ,setSelected }) => {
  return (
    <header
      className={`md:absolute top-[0px] left-[434px] bg-midnightblue w-[1090px] flex flex-row items-center justify-start pt-[15px] px-[17px] pb-[14.1px] box-border gap-4 md:gap-[26.1px] max-w-full text-left text-5xl-1 text-white font-roboto `}
    >
      <div className="h-[98px] w-[1078px] relative bg-midnightblue hidden max-w-full " />
      <ArrowLeft size={30} 
      className='flex md:hidden'
      onClick={()=>setSelected(null)}/>

      <div className="h-[68.9px] w-[68.9px] relative">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
          loading="lazy"
          alt=""
          src="/ellipse-17.svg"
          style={{ color: selected?.color }}
        />
        <div
          className="absolute flex items-center justify-center p-8 rounded-full tracking-[0.02em] leading-[24px] font-medium  whitespace-nowrap z-[2]"
          style={{
            backgroundColor: selected?.color,
            width: '10px', // Set your desired width and height
            height: '10px',
          }}
        >
          {selected && convertToInitials(selected?.name)}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start md:pt-5 px-0 pb-0 text-5xl md:mb-5">
        <a className="[text-decoration:none] relative tracking-[0.02em] font-medium text-[inherit] inline-block min-w-[107px] whitespace-nowrap z-[1]">
          {selected?.name}
        </a>
      </div>
    </header>
  );
};

export default PersonalNote;
