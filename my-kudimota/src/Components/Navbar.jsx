import React from 'react'

const Navbar = () => {
  return (
    <div>
    
    <nav class="flex justify-between mx-32 ml-48 z-50 relative top-20">        
        <div class="flex justify-center w-1/12" id="logo">
            <img src="/logo.png" alt="" class=""/>
            <p class="bg">KUDIMOTA</p>
        </div>
        
        <div class="flex justify-center align-middle opacity-90">
            <div class="flex justify-center">
            <input type="text" placeholder="Search for cars by name" class="text-sm text-white px-3 bg-transparent"/>
            <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>
            
            <div class="text-white text-sm flex">
                <p class="mx-3 mt-2">City : <span id="location">Jos</span><i class="mx-2 fa-solid fa-circle-chevron-down" style="color: #ffffff;"></i></p>
                 </div>    
            </div>   
            </div>            
    </nav> 
    
    
    </div>
  )
}

export default Navbar