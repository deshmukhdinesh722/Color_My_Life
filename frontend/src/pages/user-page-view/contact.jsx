import React from 'react';
import abc from '../../assets/abc.png'
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <div className="text-center mb-8">
          <img
            src={abc}
            alt="Profile Picture"
            className="w-32 h-32 mx-auto "
          />
          <h1 className="text-3xl font-bold mt-4 text-gray-800">COLOR MY LIFE</h1>
          <p className="text-gray-500">PRANITA PAWASKAR</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-3 rounded-full shadow-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram Logo"
                className="w-6 h-6"
              />
            </div>
            <Link
              to="https://www.instagram.com/colormylife555/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline font-medium"
            >
              @COLOR_MY_LIFE
            </Link>
          </div>

          
           
          

          <div className="flex items-center space-x-4">
            <div className="bg-indigo-50 p-3 rounded-full shadow-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Logo"
                className="w-6 h-6"
              />
            </div>
            <Link
              to="https://wa.me/7387931531"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline font-medium"
            >
              7387931531
            </Link>
          </div>
        </div>

        <div className="mt-8 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Info</h2>
          <p className="mb-2 flex justify-between">
            <span className="font-medium">EMAIL :</span> <a href="mailto:john.doe@example.com" className="text-indigo-500 hover:underline">colormylife555@gmail.com</a>
          </p>
          <p className="mb-2 flex justify-between">
            <span className="font-medium ">PHONE :</span>  7387931531
          </p>
          <p className='flex justify-between'>
            <span className="font-medium">OFFILE ADDRESS:</span> 
            KAMAL NIWAS, SOMWAR PETH<br/>
            KARAD-MAHARASTRA 415110.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
