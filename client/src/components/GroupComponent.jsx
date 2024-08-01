import { useMemo } from 'react';
import { formatDate, formatTime } from '../utils/utils';
const GroupComponent = ({
  note,
  propFlex,
  propAlignSelf,
  propAlignSelf1,
  propFlex1,
  propHeight,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const exampleDetailsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const timeIconContainerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`flex-1 shadow-lg rounded-8xs bg-white  flex flex-col items-start justify-start pt-7 pb-3.5 pl-6 pr-[19px] box-border gap-[34px] max-w-full z-[2] text-left text-lg text-black font-roboto last:mb-4`}
      style={groupDivStyle}
    >
      <div className="md:w-[997px] md:h-[210px] relative shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white hidden md:max-w-full" />
      <div className="self-stretch relative tracking-[0.04em] leading-[160.19%] z-[1]">
        {note.content}
      </div>
      <div
        className="flex flex-row items-start justify-end py-0 md:pl-[726px] pr-0 box-border max-w-full text-darkslategray-100"
        style={exampleDetailsStyle}
      >
        <div
          className="flex flex-row items-start justify-start md:gap-4 gap-2 mq1025:flex-wrap"
          style={frameDivStyle}
        >
          <div className="relative tracking-[0.02em] leading-[18px] font-medium inline-block md:min-w-[96px] z-[1]">
            {formatDate(note.createdAt)}
          </div>
          <div
            className="h-2 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border"
            style={timeIconContainerStyle}
          >
            <div className="w-2 h-2 relative rounded-[50%] bg-darkslategray-100 z-[1]" />
          </div>
          <div className="relative tracking-[0.02em] leading-[18px] font-medium inline-block min-w-[81px] whitespace-nowrap z-[1]">
            {formatTime(note.createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
