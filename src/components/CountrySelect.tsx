import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface CountrySelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  countries: string[];
  placeholder: string;
  isError?: boolean;
  isDarkMode?: boolean;
}

export default function CountrySelect({
  label,
  value,
  onChange,
  countries,
  placeholder,
  isError = false,
  isDarkMode = false
}: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter countries based on search
  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle selection
  const handleSelect = (country: string) => {
    onChange(country);
    setSearch('');
    setIsOpen(false);
  };

  // Clear selection
  const handleClear = () => {
    onChange('');
    setSearch('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full" ref={dropdownRef}>
      <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
        {label}
      </label>
      <div className="relative">
        <div
          className={`relative flex items-center rounded-lg shadow-sm transition-all duration-200
            ${isError ? 'ring-2 ring-red-500 border-red-500' : 'border border-gray-300'}
            ${isDarkMode 
              ? 'bg-gray-700 text-white border-gray-600' 
              : 'bg-white text-gray-900'
            }
          `}
        >
          <input
            ref={inputRef}
            type="text"
            value={isOpen ? search : value}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className={`w-full px-4 py-3 rounded-lg appearance-none focus:outline-none
              ${isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'}
            `}
          />
          {value && !isOpen && (
            <button
              onClick={handleClear}
              className={`absolute right-8 p-1 rounded-full hover:bg-gray-100
                ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}
              `}
            >
              <X size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
            </button>
          )}
          <ChevronDown 
            className={`absolute right-3 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}
              ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}
            `}
            size={20}
          />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className={`absolute z-50 w-full mt-1 rounded-lg shadow-lg border
            ${isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
            }
          `}>
            <div className="max-h-60 overflow-y-auto">
              {filteredCountries.length === 0 ? (
                <div className={`px-4 py-2 text-sm
                  ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}
                `}>
                  No results found
                </div>
              ) : (
                filteredCountries.map((country) => (
                  <button
                    key={country}
                    onClick={() => handleSelect(country)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100
                      ${isDarkMode 
                        ? 'text-gray-200 hover:bg-gray-700' 
                        : 'text-gray-900 hover:bg-gray-100'
                      }
                      ${value === country 
                        ? isDarkMode 
                          ? 'bg-gray-700' 
                          : 'bg-gray-100'
                        : ''
                      }
                    `}
                  >
                    {country}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}