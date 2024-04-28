import React, { useState } from 'react';


const CustomDropdown = ({ options, setselectedChain }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
 

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setselectedChain(option.value)
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-white text-black">
      <button className="flex items-center" onClick={toggleDropdown}>
        <img src={selectedOption.image} width={30} height={30} alt={selectedOption.alt} className="mr-2" />
        {selectedOption.label}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white white border border-gray-300 rounded-md shadow-lg justify-between flex flex-col text-black font-semibold">
          {options.map((option) => (
            
            <button
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="w-[150px] px-4 py-2 text-sm text-black font-semibold hover:bg-gray-100 flex flex-row items-center"
            >
              <img src={option.image} width={30} height={30} alt={option.alt} className="mr-2" />
              {option.label}
            </button>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
