import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full max-sm:mt-10'>
      <div className='text-[#753F21] text-[35px] font-bold mb-5 max-sm:text-[20px]'>FEEDBACK & SUGGESTIONS</div>
      <form className='flex flex-col gap-5'>
        <div className='flex flex-col'>
            <label htmlFor="fullname" className='text-[#753F21]'>Full Name*</label>
            <input type="text" id='fullname' className='border border-[#753F21] px-3 py-2 rounded-md outline-none text-[#753F21]'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="pno" className='text-[#753F21]'>Phone Number*</label>
            <input type="number" id='pno' className='border border-[#753F21] px-3 py-2 rounded-md outline-none text-[#753F21]'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="mail" className='text-[#753F21]'>Email*</label>
            <input type="email" id='mail' className='border border-[#753F21] px-3 py-2 rounded-md outline-none text-[#753F21]'/>
        </div>
        <div className='flex flex-col'>
            <label htmlFor="msg" className='text-[#753F21]'>Message*</label>
            <textarea id='msg' className='border border-[#753F21] px-3 py-2 rounded-md outline-none text-[#753F21]'/>
        </div>
        <button className='bg-[#753F21] text-[#fff] px-10 py-2 rounded-lg'>
            Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm
