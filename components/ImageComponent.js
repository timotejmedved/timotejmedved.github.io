import { useState } from 'react';
import Image from 'next/image';
import imageSrc from '../public/images/clanek.jpeg';

export default function ImageComponent({ src = '/images/clanek.jpeg', alt = 'Članek štajerski tednik', text }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal function
  const toggleModal = (e) => {
    e.stopPropagation(); // Prevents event bubbling, in case that's necessary
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full md:w-2/3 md:max-w-full mx-auto flex justify-center">
      <div className="p-3">
        <div className="h-96 w-80 relative">
          <Image
            alt={alt}
            src={src}
            className="p-3 rounded-sm"
            layout='fill'
            onClick={toggleModal} // This toggles the modal on click
          />
          {isModalOpen && (
            <div className="modal" onClick={toggleModal}> {/* Optionally, make the modal background also close the modal */}
              <span className="close" onClick={(e) => {
                e.stopPropagation(); // Prevents the modal background click handler from firing
                setIsModalOpen(false);
              }}>&times;</span>
              {/* Modal image, clicking this will also toggle the modal state */}
              <Image 
                className="modal-content" 
                src={src} 
                alt={alt} 
       
                onClick={toggleModal}
              />
            </div>
          )}
        </div>
        <div className="p-1 w-80 bg-color">
          <h1 className="text-white font-mono text-base flex justify-center">{text || "Celoten članek"}</h1>
        </div>
      </div>
    </div>
  );
}
