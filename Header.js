import React from 'react'

export default function Header() {
  return (

       <header className="bg-blue-500 text-white p-4 ">
      <h1 className="text-2xl font-bold">Ankit Prajapati</h1>
      <p className="text-sm">React Developer</p>
      <div class="flex-auto">
             <ul class="px-28 py-4 flex space-x-2 justify-end ">
            <li class="mx-2 hover:text-gray-400">home</li>
            <li class="mx-2 hover:text-gray-400">about</li>
            <li class="mx-2 hover:text-gray-400">project</li>
            <li class="mx-2 hover:text-gray-400">contact</li>
        </ul>
    
      </div>
      
    </header>

  )
}
