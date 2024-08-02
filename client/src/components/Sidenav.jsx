import React, { useEffect, useState } from 'react';
import NotePreview from './NotePreview';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import axios from 'axios';

const colorOptions = [
  { name: 'Medium Purple', value: '#6a0dad' },
  { name: 'Red', value: '#ff0000' },
  { name: 'Dark Turquoise', value: '#00d4d9' },
  { name: 'Dark Salmon', value: '#e9967a' },
  { name: 'Medium Blue', value: '#0000cd' },
];

const Sidenav = ({ data, selected, setSelected }) => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const fetchGroups = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_DOMAIN}/api/groups`);
      console.log(response);
      setGroups(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   if(!selectedColor || !name){
     alert('Please fill all the fields');
     return;
   }
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_DOMAIN}/api/groups`, {
        name,
        color: selectedColor,
      });
      setName('');
      setSelectedColor('');
      setIsOpen(false);
      fetchGroups();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchGroups();
  }, []);

  if (loading) return <p className='flex justify-center items-center h-screen md:w-[420px]'>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="h-screen md:h-[982px] w-[420px] top-[0px] left-[0px]overflow-y-hidden">
      <h2 className="m-0 ml-[44px] pt-10 pb-4 md:absolute md:p-0 text-[44px] md:top-[50px] md:left-[45px] md:text-[35px] tracking-[0.02em] font-[inherit]  mq975:text-[28px] font-semibold ">
        Pocket Notes
      </h2>
      <div className="md:absolute w-full h-screen md:top-[134px] overflow-y-scroll">
        {groups.map((item) => (
          <NotePreview
            key={item._id}
            data={item}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}  >
        <DialogTrigger asChild>
          <div
            className="absolute z-50 top-[600px] right-[10px] rounded-[50%] md:top-[850px] md:left-[300px] w-[93px] h-[93px] text-[70px] text-white cursor-pointer 
          "
          >
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkblue w-full h-full" />
            <h1 className="m-0 absolute mq450:top-[22px] mq450:left-[34px] top-[12px] left-[27px] text-inherit tracking-[0.02em] leading-[97.69%] font-medium font-[inherit] z-[1] mq450:text-[42px] mq450:leading-[41px] mq975:text-[56px] mq975:leading-[55px]">
              +
            </h1>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white flex rounded-xl font-roboto w-[284px] md:w-[740px]">
          <DialogHeader className="flex flex-col items-start">
            <DialogTitle className="text-[18px] md:text-[29px] -mb-1 font-medium md:p-0 ">
              Create New Group
            </DialogTitle>
            <DialogDescription>
              <div className="flex flex-row gap-8 items-center ">
                <p className="md:text-[28px] text-[16px] font-medium  md:p-0 text-nowrap">
                  Group Name
                </p>
                <input
                  type="text"
                  className="py-1 px-4 md:h-[30px] w-1/2 border-2 border-[#cccccc] outline-none hover:outline-none focus:outline-none rounded-3xl md:w-[250px]"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter group name"
                />
              </div>
              <div className="flex items-center flex-row gap-8">
                <h1 className="md:text-[28px] text-[16px]  font-medium md:p-0">
                  Choose color
                </h1>

                <div className="flex flex-row items-start justify-start gap-3 md:max-w-full flex-wrap">
                  {colorOptions.map((option) => (
                    <div
                      key={option.value}
                      onClick={() => {
                        console.log(option.value)
                        handleColorSelect(option.value)}}
                      className={`h-[17px] w-[17px] md:h-10 md:w-10 rounded-full cursor-pointer ${
                        selectedColor == option.value
                          ? 'border-4 border-black bg-red-800 animate-bounce'
                          : ''
                      }`}
                      style={{ backgroundColor: option.value }}
                      aria-label={`Select ${option.name}`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-end md:items-end md:justify-end justify-center mt-4">
                <button
                  className="bg-blue-900 text-white py-2 px-10 rounded-xl cursor-pointer hover:bg-opacity-75 "
                  onClick={handleSubmit}
                >
                  Create
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sidenav;
