import React, { useEffect, useState } from 'react';

function Eyes( {rotate}) {
    
  return (
    <>
        <div className='h-[200px] ddd w-[100%] -bg-[blue] flex justify-center items-center'>
        <div className='eyes-outer-container'>
            <div className='eyes-container flex gap-[10px]'>
                <div className="eye-1 h-[120px] w-[120px] rounded-full border-[--primary] border-[1px] bg-[--secondry] flex justify-center items-center">
                    <div className='eyes-black-circle h-[85px] w-[85px] bg-[--primary] rounded-full flex items-center justify-center'>
                        <div className='h-[20px] w-[90%] -bg-[--secondry] flex justify-center' style={{transform:` -rotate(${rotate}deg)`}}>
                            <div className='eye-ball h-[20px] w-[20px] rounded-full bg-[--secondry]'></div>
                        </div>
                    </div>
                </div>
                <div className="eye-1 h-[120px] w-[120px] rounded-full border-[--primary] border-[1px] bg-[--secondry] flex justify-center items-center">
                    <div className='eyes-black-circle h-[85px] w-[85px] bg-[--primary] rounded-full flex items-center justify-center'>
                        <div className='h-[20px] w-[90%] -bg-[--secondry] flex justify-center' style={{transform:` -rotate(${rotate}deg)`}}>
                            <div className='eye-ball h-[20px] w-[20px] rounded-full bg-[--secondry]'></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  );
}

export default Eyes;
