import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Slice/counterSlice'

const MainComp = () => {

    const SliceData = useSelector((state)=>state.DataStore.value)

    const dispatch = useDispatch()

    const add = ()=>{

        dispatch(increment())
    }

    const remove = ()=>{

        dispatch(decrement())
    }




  return (
    <>

   <div className="div w-[400px] h-[300px]  bg-transparent border-[3px] border-solid border-white shadow-[0px_0px_37px_-3px_rgba(234,_179,_8,_0.5)] flex flex-col justify-center items-center">
   <div className='text-[50px] font-mono font-extrabold text-black' >{SliceData} </div>

   <div className="buttons flex gap-6 mt-8"> 
    <button onClick={add}  className='py-1 px-6 bg-white  hover:bg-blue-300 font-serif font-medium  text-[25px] text-[#000]  '> Add </button>
    <button onClick={remove} className='py-1 px-6 bg-white  hover:bg-blue-300 font-serif font-medium text-[25px] text-[#000] '> Remove </button>

   </div>

   </div>
    
    </>
  )
}

export default MainComp