import React from 'react'

export default function Navbar() {
  return(

    <nav class="bg-slate-500  flex justify-between text-white">
        <h2 class="h-12 py-4">Portfolio</h2>
        <ul class="px-28 py-4 flex space-x-2 justify-end ">
            <li class="mx-2 hover:text-gray-400">home</li>
            <li class="mx-2 hover:text-gray-400">about</li>
            <li class="mx-2 hover:text-gray-400">contact</li>
        </ul>
    </nav>
  ) 
}
