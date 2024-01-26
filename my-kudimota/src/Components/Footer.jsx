import React from 'react'
import logo from '../Assets/logo.png'


const Footer = () => {
  return (
    <div>

    <footer class=" flex justify-center flex-col mx-112 mt-32">

        <img src={logo} 

            alt="logo" 
            class="w-40 ml-2 "/>

        <p class="pt-6 pb-6 text-sm">&copy; 2022 All Rights Reserved</p>

    </footer>


    </div>
  )
}

export default Footer