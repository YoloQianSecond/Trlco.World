import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {



  return (
    <div>
      <Topbar />
      <Header />
      <div className='max-w-7xl mx-auto md:min-h-[auto] min-h-[60vh] md:block flex flex-row items-center justify-center'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 text-center md:py-32 py-16'>
            <h1 className='orange-text3 md:text-[55px] text-[30px] outfit-bold'>404 - Page Not Found</h1>
            <p className='md:text-[20px] text-[#565656] md:mb-8 md:mt-5 mt-3 mb-8'>Sorry, the page you are looking for does not exist.</p>
            <Link className="text-[#fff] bg-[#FF4A3F] border-[2px] border-[#FF4A3F] text-[16px] outfit-semibold md:px-6 px-3 py-2 rounded-[25px]" to="/">Go back to the homepage</Link>
          </div>
        </div>
      </div>
      <div>

      </div>
      <Footer/>
    </div>
  );
}

export default NotFound;