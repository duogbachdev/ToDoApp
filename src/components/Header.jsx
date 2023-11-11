import React from 'react'
import todoIcon from '../assets/todoIcon.svg'
import InputForm from './InputForm';

const Header = () => {
  return (
    <div className='relative flex justify-center items-center gap-3 py-3 xl:py-20 bg-[#0D0D0D]'>
      <img src={todoIcon} alt="" />
      <h1 className='header-todo xl:text-5xl not-italic font-black'>ToDoApp - DuogBachDev</h1>

      <div className='absolute -bottom-5 md:-bottom-8 xl:-bottom-7'>
        <InputForm />
      </div>
    </div>
  )
}

export default Header