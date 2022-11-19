import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-neutral-800 ">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-sky-500 tracking-widest text-sm mb-3">Support</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-neutral-300 hover:text-gray-800">Help Centre</a>
          </li>
          <li>
            <a className="text-neutral-300 hover:text-gray-800">FAQs</a>
          </li>
          <li>
            <a className="text-neutral-300 hover:text-gray-800">Password Generator </a>
          </li>
          <li>
            <a className="text-neutral-300 hover:text-gray-800">Multi Factor authentication</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-sky-500 tracking-widest text-sm mb-3">How it works</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-neutral-300 hover:text-gray-800">Password management</a>
          </li>
          <li>
            <a className="text-neutral-300 hover:text-gray-800">Theft protection</a>
          </li>
          <li>
            <a className="text-neutral-300 hover:text-gray-800">NFT implementation</a>
          </li>
          <li>
            <a className="text-neutral-300 hover:text-gray-800">Security Policies</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-sky-500 tracking-widest text-sm mb-3">Address</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-neutral-300 hover:text-gray-800">Rosetta church, Church road</a>
          </li>
          <li>
            <a className="text-neutral-300 hover:text-gray-800">Opp Kashmere gate</a>
          </li>
          <li>
            <a className="text-neutral-300 hover:text-gray-800">Delhi-110006</a>
          </li>
          <li>
            <a className="text-neutral-300 hover:text-gray-800">India</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-sky-500 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label className="leading-7 text-sm text-neutral-300">Newsletter</label>
            <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">Email</button>
        </div>
        <p className="text-neutral-300 text-sm mt-2 md:text-left text-center">Enter email here
          <br className="lg:block hidden"> and stay updated.</br>
        </p>
      </div>
    </div>
  </div>
  <div className="bg-blue-500">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col ">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">KiroKEYS</span>
      </a>
      <p className="text-sm text-zinc-100 sm:ml-6 sm:mt-0 mt-4">© —copyright 
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-zinc-50 ml-1" target="_blank">@kiroKEYS</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-zinc-100">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-zinc-100">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-zinc-100">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-zinc-100">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer