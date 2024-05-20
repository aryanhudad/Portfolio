import React from 'react'

export default function About() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center">
        <img
          src="your-profile-image.jpg"
          alt=""
          className="rounded-full w-32 h-32 mb-4"
        />
        <h2 className="text-3xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-600 mb-6">
          Hi there! I'm a passionate web developer with a strong interest in creating
          user-friendly and visually appealing websites.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Front-end</h3>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Back-end</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express</li>
              <li>RESTful APIs</li>
              <li>Database Management</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <ul className="list-disc list-inside">
              <li>UI/UX Design</li>
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
