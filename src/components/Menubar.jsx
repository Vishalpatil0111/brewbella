import React from 'react'

function Menubar({ setIsOpen }) {
    return (
        <div className=" w-full h-screen fixed inset-0  bg-white flex flex-col">
            <div className='w-1/3 h-screen bg-[#B3A58D]'>
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-xl">
                    ❌
                </button>
            </div>



        </div>
    );
};



export default Menubar
