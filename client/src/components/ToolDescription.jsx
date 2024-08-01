import { useEffect, useState } from 'react';
import GroupComponent from './GroupComponent';
import axios from 'axios';

const ToolDescription = ({ notes }) => {

  

  return (
    <section
      className={`flex-1 flex flex-col items-start justify-start pt-6 pb-0 box-border w-full text-left text-lg text-black font-roboto overflow-y-scroll h-[630px] px-6 `}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-5 max-w-full">
        {notes?.map((note)=>(
          <GroupComponent
          key={note._id}
          note={note}
          propFlex="unset"
          propAlignSelf="stretch"
          propAlignSelf1="stretch"
          propFlex1="unset"
          propHeight="unset"
        />
        ))}
        
      </div>
    </section>
  );
};

export default ToolDescription;
