import React from 'react';

const Footer = () => {
  return (
    <div className='bg-white py-12'>
      <div className='max-w-6xl mx-auto px-6' >        
        {/* Grid Layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* Logo & Description */}
          <div>
            <h1 className='text-2xl md:text-3xl font-bold'>
              <span className='text-4xl text-pink-700'>A</span>ppify
            </h1>
            <p className='mt-4 text-sm text-gray-600 leading-relaxed'>
              We provide modern and innovative solutions to grow your business with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className='text-lg font-semibold mb-3'>Quick Links</h2>
            <ul className='space-y-2 text-gray-600'>
              <li><a href="#" className='hover:text-pink-700 transition'>Home</a></li>
              <li><a href="#" className='hover:text-pink-700 transition'>About</a></li>
              <li><a href="#" className='hover:text-pink-700 transition'>Services</a></li>
              <li><a href="#" className='hover:text-pink-700 transition'>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className='text-lg font-semibold mb-3'>Our Services</h2>
            <ul className='space-y-2 text-gray-600'>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className='text-lg font-semibold mb-3'>Contact</h2>
            <p className='text-gray-600'>Email: support@appify.com</p>
            <p className='text-gray-600'>Phone: +91 98765 43210</p>
            <p className='text-gray-600'>Address: Hathras, India</p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className='mt-10 text-center border-t pt-6 text-gray-500 text-sm'>
          &copy; 2025 Appify. All rights reserved.
        </div>

      </div>
    </div>
  );
};

export default Footer;
