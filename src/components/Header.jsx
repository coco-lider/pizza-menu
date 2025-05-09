import React from 'react'
import location from '../assets/loacation.png'
import logoPizza from '../assets/pizza-b.png'
import Sidebar from './Sidebar'
import Navigation from './Navigation'

const Header = () => {
  return (
    <div className='container mx-auto'>
      <header>
        <div className='w-full bg-gray-800  flex justify-between items-center gap-1  p-1.5'>
            <div className='flex gap-1'>
            <img src={location} alt="" />
            <select className='outline-0 text-amber-50  text-[15px]'>
                <option className='text-black' value="Москва">Москва</option>
                <option className='text-black' value="Москва">Москва</option>
                <option className='text-black' value="Москва">Москва</option>
                <option className='text-black' value="Москва">Москва</option>
            </select>
            </div>
            <p className='text-[10px] text-amber-50'>Среднее время доставки*: 00:24:19</p>
        </div>

        <div className='flex justify-between p-1'>
            <div className='flex gap-1 items-center m-1'>
                <img src={logoPizza} alt="" />
            <h1 className='text-[20px]'>Куда пицца</h1>
            </div>
            <Sidebar/>
        </div>
            <div>
            <Navigation/>
            </div>
      </header>
    </div>
  )
}

export default Header
