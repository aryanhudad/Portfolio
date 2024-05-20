import React from 'react'

export default function Phone() {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
  )
}
