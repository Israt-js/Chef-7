import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h6 className="text-lg font-semibold mb-4">Services</h6>
          <ul>
            <li><a href="#" className="block py-1 hover:underline">Branding</a></li>
            <li><a href="#" className="block py-1 hover:underline">Design</a></li>
            <li><a href="#" className="block py-1 hover:underline">Marketing</a></li>
            <li><a href="#" className="block py-1 hover:underline">Advertisement</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul>
            <li><a href="#" className="block py-1 hover:underline">About us</a></li>
            <li><a href="#" className="block py-1 hover:underline">Contact</a></li>
            <li><a href="#" className="block py-1 hover:underline">Jobs</a></li>
            <li><a href="#" className="block py-1 hover:underline">Press kit</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4">Legal</h6>
          <ul>
            <li><a href="#" className="block py-1 hover:underline">Terms of use</a></li>
            <li><a href="#" className="block py-1 hover:underline">Privacy policy</a></li>
            <li><a href="#" className="block py-1 hover:underline">Cookie policy</a></li>
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4">Follow Us</h6>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.5v15c0 2.5-2 4.5-4.5 4.5h-15c-2.5 0-4.5-2-4.5-4.5v-15c0-2.5 2-4.5 4.5-4.5h15c2.5 0 4.5 2 4.5 4.5zm-15 0h-3v15h3v-15zm-1.5-3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm15 10.5c0-3-2.5-5.5-5.5-5.5h-3.5v11h3.5c3 0 5.5-2.5 5.5-5.5zm-2.5 0c0 1.6-1.4 3-3 3h-1.5v-6h1.5c1.6 0 3 1.4 3 3z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.55C0 23.23.79 24 1.77 24H22.2c.98 0 1.8-.77 1.8-1.73V1.73C24 .77 23.23 0 22.23 0zm-4.07 8.18l.01.47c0 4.75-3.63 10.22-10.23 10.22-2.03 0-3.92-.6-5.51-1.63.29.04.59.06.9.06 1.69 0 3.25-.57 4.5-1.54-1.58-.03-2.92-1.08-3.38-2.52.22.04.45.06.69.06.33 0 .65-.04.95-.12-1.64-.33-2.87-1.79-2.87-3.54v-.05c.48.26 1.03.41 1.62.43-.96-.63-1.59-1.71-1.59-2.94 0-.64.18-1.25.5-1.77 1.83 2.26 4.56 3.75 7.64 3.91-.06-.25-.08-.51-.08-.78 0-1.88 1.52-3.4 3.39-3.4.97 0 1.84.41 2.45 1.06.77-.15 1.48-.43 2.12-.81-.26.81-.81 1.49-1.52 1.92.69-.08 1.35-.27 1.96-.54-.46.68-1.04 1.26-1.72 1.73z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.573 3.805 10.22 8.805 11.488.65.118.887-.282.887-.628 0-.31-.01-1.136-.016-2.23-3.58.77-4.337-1.444-4.337-1.444-.591-1.498-1.444-1.897-1.444-1.897-1.18-.806.09-.79.09-.79 1.303.091 1.988 1.336 1.988 1.336 1.159 1.983 3.04 1.409 3.78 1.08.117-.84.45-1.409.817-1.735-2.856-.324-5.856-1.434-5.856-6.382 0-1.41.503-2.566 1.33-3.47-.133-.324-.576-1.632.127-3.403 0 0 1.08-.345 3.54 1.315.986-.272 2.044-.409 3.09-.413 1.048.004 2.106.141 3.093.413 2.457-1.66 3.534-1.315 3.534-1.315.707 1.771.264 3.079.13 3.403.828.904 1.33 2.06 1.33 3.47 0 4.956-3.008 6.054-5.873 6.368.462.398.875 1.184.875 2.384 0 1.72-.015 3.106-.015 3.529 0 .352.23.752.894.623C20.195 22.213 24 17.573 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
