import axios from 'axios';
import React, { useState } from 'react';

const InputNote = ({ selected, fetchNotes }) => {
  const [content, setContent] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_DOMAIN}/api/note`, {
        content,
        groupId: selected._id,
      });
      fetchNotes();
      console.log('response', response);
      setContent('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:absolute md:top-[727px] md:left-[435px] md:w-[1090px] md:h-[255px] z-[3] bg-midnightblue p-4 md:p-0 max-w-md:flex  md:justify-center ">
      <div className="md:relative  md:top-8 md:left-10 rounded-4xs bg-white border-lightgray border-[1px] border-solid box-border md:w-[1016px] flex items-start justify-start pt-[15px] pb-[22px] pl-[29px] pr-[55px] md:gap-[106px] md:max-w-full z-[4] text-[29.8px] text-darkgray">
        <div className="md:w-[1016px] md:h-[213px] md:relative rounded-4xs bg-white border-lightgray border-[1px] border-solid box-border hidden md:max-w-full p-2" />
        <textarea
          className="w-full md:h-[150px] resize-none text-lg focus:outline-none p-2 relative tracking-[0.02em] inline-block md:max-w-full z-[5] mq450:text-5xl "
          placeholder="Enter your text here....."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className=" flex justify-end -mr-10 mt-32 cursor-pointer " onClick={handleSubmit}>
          <svg
            width="35"
            height="29"
            viewBox="0 0 35 29"
            fill="gray"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
              fill={content.trim() ? 'midnightblue ' : 'gray'}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputNote;
