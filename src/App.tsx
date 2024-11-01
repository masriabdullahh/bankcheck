import React, { useState } from 'react';
import { Globe2, Languages, Instagram, Moon, Sun } from 'lucide-react';
import CountrySelect from './components/CountrySelect';
import BankResult from './components/BankResult';
import { bankRestrictions } from './data/bankRestrictions';
import { countries } from './data/countries';

const App: React.FC = () => {
  const [nationality, setNationality] = useState('');
  const [residence, setResidence] = useState('');
  const [isArabic, setIsArabic] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const availableBanks = React.useMemo(() => {
    if (!nationality || !residence) return [];

    const banks: string[] = [];

    if (!bankRestrictions.mercury.residence.includes(residence) &&
        !bankRestrictions.mercury.nationality.includes(nationality)) {
      banks.push('mercury');
    }

    if (!bankRestrictions.wise.residence.includes(residence) &&
        !bankRestrictions.wise.nationality.includes(nationality)) {
      banks.push('wise');
    }

    if (!bankRestrictions.relay.residence.includes(residence) &&
        !bankRestrictions.relay.nationality.includes(nationality)) {
      banks.push('relay');
    }

    if (!bankRestrictions.payoneer.residence.includes(residence) &&
        !bankRestrictions.payoneer.nationality.includes(nationality)) {
      banks.push('payoneer');
    }

    if (!bankRestrictions.revolut.residence.includes(residence) &&
        !bankRestrictions.revolut.nationality.includes(nationality)) {
      banks.push('revolut');
    }

    if (!bankRestrictions.slash.residence.includes(residence) &&
        !bankRestrictions.slash.nationality.includes(nationality)) {
      banks.push('slash');
    }

    if (!bankRestrictions.graph.residence.includes(residence) &&
        !bankRestrictions.graph.nationality.includes(nationality)) {
      banks.push('graph');
    }

    return banks;
  }, [nationality, residence]);

  const resetForm = () => {
    setNationality('');
    setResidence('');
    setShowResults(false);
  };

  return (
    <div className={`min-h-screen py-6 sm:py-12 px-4 sm:px-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}`}>
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Header Section with Profile, Language Toggle, and Dark Mode */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-8 sm:mb-12">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/abdullah-masri.jpg"
                alt="Abdullah Masri"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1 rounded-full shadow-lg">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                {isArabic ? 'عبدالله المصري' : 'Abdullah Masri'}
              </h2>
              <a
                href="https://instagram.com/masriabdullahh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1"
              >
                <Instagram size={14} />
                <span>@masriabdullahh</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`inline-flex items-center gap-2 px-4 py-2 ${
                isDarkMode 
                  ? 'bg-gray-700 text-gray-200' 
                  : 'bg-white/80 text-gray-700'
              } backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-sm`}
            >
              {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
              <span className="text-sm font-medium">
                {isDarkMode ? 'Light' : 'Dark'}
              </span>
            </button>
            
            <button
              onClick={() => setIsArabic(!isArabic)}
              className={`inline-flex items-center gap-2 px-4 py-2 ${
                isDarkMode 
                  ? 'bg-gray-700 text-gray-200' 
                  : 'bg-white/80 text-gray-700'
              } backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-sm`}
            >
              <Languages size={16} />
              <span className="text-sm font-medium">
                {isArabic ? 'English' : 'العربية'}
              </span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className={`glass-card rounded-2xl p-4 sm:p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-6">
              <Globe2 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              {isArabic
                ? <>
                    اكتشف ما هي البنوك الرقمية
                    <br />
                    التي بإمكانك فتح حساب فيها لشركتك الأمريكية
                  </>
                : 'Bank Eligibility Check for Foreign-Owned US LLCs'}
            </h1>
            <p className={`max-w-2xl mx-auto mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {isArabic
                ? 'اختر جنسيتك وبلد اقامتك لعرض الخيارات'
                : 'Find out which digital banks you can apply for based on your nationality and country of residence'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            <CountrySelect
              label={isArabic ? 'بلد الجنسية' : 'Country of Nationality'}
              value={nationality}
              onChange={setNationality}
              countries={countries}
              placeholder={isArabic ? 'اختر دولتك' : 'Select a country'}
              isError={!nationality && residence !== ''}
              isDarkMode={isDarkMode}
            />
            <CountrySelect
              label={isArabic ? 'بلد الإقامة' : 'Country of Residence'}
              value={residence}
              onChange={setResidence}
              countries={countries}
              placeholder={isArabic ? 'اختر دولتك' : 'Select a country'}
              isError={nationality !== '' && !residence}
              isDarkMode={isDarkMode}
            />
          </div>

          <div className="flex justify-center gap-4">
            {!showResults ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={!nationality || !residence}
                className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                  !nationality || !residence
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'
                }`}
              >
                {isArabic ? 'عرض النتائج' : 'Show Results'}
              </button>
            ) : (
              <button
                onClick={resetForm}
                className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {isArabic ? 'جرب دول مختلفة' : 'Try Another Combination'}
              </button>
            )}
          </div>

          {showResults && (
            <BankResult
              availableBanks={availableBanks}
              isArabic={isArabic}
              isDarkMode={isDarkMode}
            />
          )}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {isArabic ? (
              <>
                صُنعت بـ ❤️ من قبل{' '}
                <a
                  href="https://instagram.com/masriabdullahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  عبدالله المصري
                </a>
              </>
            ) : (
              <>
                Made with ❤️ by{' '}
                <a
                  href="https://instagram.com/masriabdullahh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Abdullah Masri
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;