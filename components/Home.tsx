'use client';

import {useState} from 'react';

const Homepage = () => {
  const [url, setUrl] = useState('');

  return (
    <div className="w-full h-[100vh] pt-24 flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-4">Responsive Previewer</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter the URL"
        className="p-2 border rounded-md w-full max-w-lg mb-6"
      />
      <div className="w-full h-full flex gap-4 justify-between">
        {/* Desktop View */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden relative">
          <h2 className="text-center font-semibold mb-2">Desktop View</h2>
          <div className="w-[1280px] transform scale-75 origin-top-left">
            <iframe
              src={url}
              className="w-full h-[100vh]"
              title="Desktop Preview"
              style={{border: 'none'}}
            />
          </div>
        </div>

        {/* Tablet View */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden relative">
          <h2 className="text-center font-semibold mb-2">Tablet View</h2>
          <div className="w-[768px] transform scale-75 origin-top-left">
            <iframe
              src={url}
              className="w-full h-[100vh]"
              title="Tablet Preview"
              style={{border: 'none'}}
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden relative">
          <h2 className="text-center font-semibold mb-2">Mobile View</h2>
          <div className="w-[375px]  transform scale-75 origin-top-left">
            <iframe
              src={url}
              className="w-full h-[100vh]"
              title="Mobile Preview"
              style={{border: 'none'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
