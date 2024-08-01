import PersonalNote from '../components/PersonalNote';
import ToolDescription from '../components/ToolDescription';
import NotePreview from '../components/NotePreview';
import { useEffect, useState } from 'react';
import Sidenav from '../components/Sidenav';
import InputNote from '../components/InputNote';
import axios from 'axios';
import LandingPage from '../components/LandingPage';

const NotesPageOpenScrollableSe = () => {
  const [selected, setSelected] = useState(null);
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_DOMAIN}/api/groups/${selected._id}/notes`
      );
      console.log({ notes: response.data });
      setNotes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (selected) {
      fetchNotes();
    }
  }, [selected]);

  return (
    <div className="w-full h-full bg-white overflow-hidden leading-[normal] tracking-[normal] text-left text-5xl text-black font-roboto max-h-[1100px]">
      {/* Desktop view */}
      <div className="hidden md:flex">
        {/* Sidebar */}
        <Sidenav setSelected={setSelected} selected={selected} />
        {/* Main content */}
        {selected ? (
          <>
            <PersonalNote selected={selected} />
            <main className="absolute top-[98px] left-[435px] rounded-t-none rounded-br-none bg-lavender w-[1090px] h-[630px] flex flex-row items-start justify-start pt-0 pb-40 pr-0 box-border gap-7 max-w-full z-[1]">
              <ToolDescription notes={notes} />
            </main>
            <InputNote selected={selected} fetchNotes={fetchNotes} />
          </>
        ) : (
          <LandingPage />
        )}
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        {!selected ? (
          <div className="bg-white z-50 inset-0">
            <Sidenav setSelected={setSelected} selected={selected} />
          </div>
        ) : (
          <div className="w-full h-screen flex flex-col bg-red-300">
            <PersonalNote selected={selected} setSelected={setSelected} />
            <main className="bg-lavender w-full h-full flex flex-col items-start justify-start pr-0 box-border gap-7 overflow-scroll z-[1]">
              <ToolDescription notes={notes} />
            </main>
            <InputNote selected={selected} fetchNotes={fetchNotes} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesPageOpenScrollableSe;
