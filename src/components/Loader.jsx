import React from 'react'
import loader from '../assets/loader.gif'

const Loader = () => {
    return (
        <div className='fixed top-0 left-0 w-screen h-screen  flex items-center justify-center bg-[#0000009d]'>
            <img src={loader} alt="" />
        </div>
    )
}

export default Loader