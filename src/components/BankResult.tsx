import React from 'react';
import { Building2, AlertCircle, ExternalLink, Instagram, Star } from 'lucide-react';
import { bankWebsites } from '../data/bankWebsites';
import { bankLogos } from '../data/bankLogos';

interface BankResultProps {
  availableBanks: string[];
  isArabic: boolean;
  isDarkMode: boolean;
}

export default function BankResult({ availableBanks, isArabic, isDarkMode }: BankResultProps) {
  if (!availableBanks.length) {
    return (
      <div className={`${isDarkMode ? 'bg-red-900/20 border-red-800' : 'bg-red-50/50 border-red-200'} backdrop-blur-sm rounded-xl p-6`}>
        <div className="flex items-center gap-3">
          <AlertCircle className="text-red-500" size={24} />
          <h3 className="text-lg font-semibold text-red-700">
            {isArabic ? 'لا توجد بنوك متاحة' : 'No Available Banks'}
          </h3>
        </div>
        <p className={`mt-2 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
          {isArabic
            ? 'للأسف، بناءً على البلدان المختارة، أنت غير مؤهل لأي من البنوك المدرجة. يمكنك استكشاف خيارات مصرفية بديلة أو استشارة مستشار مالي.'
            : 'Unfortunately, based on your selected countries, you are not eligible for any of the listed banks. Consider exploring alternative banking options or consulting with a financial advisor.'}
        </p>
      </div>
    );
  }

  const getBankNotes = (bank: string, isArabic: boolean) => {
    const arabicNotes = {
      mercury: 'ننصح به للاستخدامات العامة - الخيار الأكثر شيوعًا بين المؤسسين',
      wise: 'الأفضل للدفعات الدولية وتبادل العملات بأقل الرسوم',
      relay: 'حل مصرفي متكامل لقطاع الأعمال',
      payoneer: 'إجراءاته طويلة ومعقدة',
      revolut: 'تجاوز قائمة الانتظار - نحن نساعدك على الانضمام مباشرة (الشركات الأمريكية تتطلب عادةً قائمة انتظار) + يتطلب وجود مُوقِّع أمريكي',
      slash: [
        'حل مالي تقني جديد ومبتكر',
        'استرداد نقدي بنسبة 2% على جميع مصاريف الإعلانات',
        'يتطلب دعوة خاصة (ونحن نستطيع مساعدتك في الحصول عليها)'
      ],
      graph: 'حل مصرفي جديد بميزات عصرية وإعداد سريع'
    };

    const englishNotes = {
      mercury: "Recommended for general use - most popular choice among founders",
      wise: "Best for international payments and currency exchange with lowest fees",
      relay: "Full-featured business banking solution",
      payoneer: "Extended documentation required - longer application process",
      revolut: "Skip the waitlist - we help you join directly (US companies normally require waitlist) + US signer required",
      slash: [
        "New and innovative fintech solution",
        "2% cashback on all ad spend",
        "Requires special invite (which we can help provide)"
      ],
      graph: "New banking solution with modern features and quick setup"
    };

    return isArabic ? arabicNotes[bank as keyof typeof arabicNotes] : englishNotes[bank as keyof typeof englishNotes];
  };

  return (
    <div className="space-y-8">
      <div className={`${isDarkMode ? 'bg-green-900/20 border-green-800' : 'bg-green-50/50 border-green-200'} backdrop-blur-sm rounded-xl p-6`}>
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="text-green-500" size={24} />
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>
            {isArabic ? 'البنوك المتاحة' : 'Available Banks'}
          </h3>
        </div>
        <div className="grid gap-4">
          {availableBanks.map((bank) => {
            const website = bankWebsites[bank as keyof typeof bankWebsites];
            const notes = getBankNotes(bank, isArabic);
            const isRecommended = bank === 'mercury';
            const BankLogo = bankLogos[bank as keyof typeof bankLogos];
            
            return (
              <div
                key={bank}
                className={`${
                  isDarkMode 
                    ? 'bg-gray-800/70 border-gray-700' 
                    : 'bg-white/70 border-gray-200'
                } backdrop-blur-sm p-4 rounded-xl border shadow-sm hover:shadow-md transition-all duration-200`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {BankLogo(isDarkMode)}
                    <span className={`font-medium capitalize ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {bank}
                    </span>
                    {isRecommended && (
                      <Star className="text-blue-500 fill-blue-500" size={18} />
                    )}
                  </div>
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600"
                  >
                    {isArabic ? 'زيارة الموقع' : 'Visit Website'}
                    <ExternalLink size={16} />
                  </a>
                </div>
                
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} pl-5`}>
                  {Array.isArray(notes)
                    ? notes.map((note, index) => (
                        <div key={index} className="flex items-center gap-2 mb-1">
                          <span className="w-1 h-1 bg-gray-400 rounded-full" />
                          <span>{note}</span>
                        </div>
                      ))
                    : <p>{notes}</p>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://www.instagram.com/masriabdullahh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg shadow-blue-500/20"
        >
          <Instagram size={20} />
          {isArabic
            ? 'محتاج مساعدة؟ اضغط هنا وارسل لي رسالة'
            : 'Need help? Click here to send me a message'}
        </a>
      </div>
    </div>
  );
}