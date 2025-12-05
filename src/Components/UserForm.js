import React from 'react';

function UserForm() {
  return (
    <>
      <div className=' flex justify-center w-[100%] min-h-[400px] '>
        <div className='w-[100%] pt-[20px] bg-[--primary] flex flex-col items-center'>
          <p className='text-[--secondry-text] text-[70px] footer-engaging-text font-[400] py-[30px] '>
            Let’s talk
          </p>
          <form className=' form-container w-[800px]'
            action="https://formspree.io/f/xvgovwzp"
            method="POST"
          >
            <div className='flex gap-[10px] first-last-box w-[100%] px- justify-center '>
              <input className='bg-[#331D2C] first-name-field px-[10px] text-[white] text-[18px] border-none outline-none rounded-[5px] h-[60px] w-[400px]' id='First name' name='First name' placeholder=' First name' type="text" />
              <input className='bg-[#331D2C] last-name-field px-[10px] text-[white] text-[18px] border-none outline-none rounded-[5px] h-[60px] w-[400px]' id='Last name' name='Last name' placeholder=' Last name' type="text" />
            </div>
            <div className='w-[100%] flex justify-center mt-[10px]'>
              <input className='bg-[#331D2C] email-field px-[10px] text-[white] text-[18px] border-none outline-none rounded-[5px] h-[60px] w-[800px]' id='Email' name='Email' placeholder='Email' required type="email" />
            </div>
            <div className='w-[100%] flex justify-center mt-[10px]'>
              <textarea className='bg-[#331D2C] text-area-field px-[10px] py-[10px] text-[white] text-[18px] border-none outline-none rounded-[5px] h-[150px] w-[800px]' id='Message' name='Message' placeholder="Lets's talk"></textarea>
            </div>
            <div className='flex justify-center'>
              <input className='h-[70px] w-[180px] submit-button rounded-[70px] mt-[10px] text-[18px] bg-[#331D2C] text-[white] hover:bg-[--secondry] hover:text-[#331D2C] duration-500 cursor-pointer hover:border-[2px] hover:border-[#3B1C32]' type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserForm;
