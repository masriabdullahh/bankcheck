export interface CountryRestrictions {
  mercury: {
    residence: string[];
    nationality: string[];
    notes: {
      en: string;
      ar: string;
    };
  };
  wise: {
    residence: string[];
    nationality: string[];
    notes: {
      en: string;
      ar: string;
    };
  };
  relay: {
    residence: string[];
    nationality: string[];
    notes: {
      en: string;
      ar: string;
    };
  };
  payoneer: {
    residence: string[];
    nationality: string[];
    notes: {
      en: string;
      ar: string;
    };
  };
  revolut: {
    residence: string[];
    nationality: string[];
    notes: {
      en: string;
      ar: string;
    };
  };
  slash: {
    residence: string[];
    nationality: string[];
    notes: {
      en: string[];
      ar: string[];
    };
  };
  graph: {
    residence: string[];
    nationality: string[];
    notes: {
      en: string;
      ar: string;
    };
  };
}

export const bankRestrictions: CountryRestrictions = {
  mercury: {
    residence: [
      'Afghanistan',
      'Albania',
      'Belarus',
      'Bosnia & Herzegovina',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Central African Republic',
      'Congo',
      'Democratic Republic of the Congo',
      'Croatia',
      'Cuba',
      'Eritrea',
      'Haiti',
      'Iran',
      'Iraq',
      'Lebanon',
      'Liberia',
      'Libya',
      'Mali',
      'Mozambique',
      'Myanmar',
      'Nicaragua',
      'Nigeria',
      'North Korea',
      'Pakistan',
      'Palestine',
      'Philippines',
      'Russia',
      'Somalia',
      'South Sudan',
      'Sudan',
      'Syria',
      'Ukraine',
      'Venezuela',
      'Yemen',
      'Zimbabwe'
    ],
    nationality: [],
    notes: {
      en: "Recommended for general use - most popular choice among founders",
      ar: "ننصح به للاستخدامات العامة - الخيار الأكثر شيوعًا بين المؤسسين"
    }
  },
  wise: {
    residence: [
      'Afghanistan',
      'Belarus',
      'Burundi',
      'Central African Republic',
      'Chad',
      'Congo',
      'Democratic Republic of the Congo',
      'Cuba',
      'Eritrea',
      'Iran',
      'Iraq',
      'North Korea',
      'Libya',
      'Myanmar',
      'Somalia',
      'South Sudan',
      'Russia',
      'Sudan',
      'Syria',
      'Yemen',
      'Venezuela'
    ],
    nationality: [],
    notes: {
      en: "Best for international payments and currency exchange with lowest fees",
      ar: "الأفضل للدفعات الدولية وتبادل العملات بأقل الرسوم"
    }
  },
  relay: {
    residence: [
      'Afghanistan',
      'Albania',
      'Barbados',
      'Belarus',
      'Bosnia And Herzegovina',
      'Burkina Faso',
      'Burma (Myanmar)',
      'Burundi',
      'Cambodia',
      'Cayman Islands',
      'Central African Republic',
      'Congo, Republic of the (Congo-Brazzaville)',
      'Congo, Democratic Republic of the (Congo-Kinshasa)',
      'Cote D\'Ivoire (Ivory Coast)',
      'Cuba',
      'Cyprus',
      'Eritrea',
      'Ethiopia',
      'Gibraltar',
      'Guinea',
      'Guinea-Bissau',
      'Haiti',
      'Hong Kong',
      'Iran',
      'Iraq',
      'Jamaica',
      'Jordan',
      'Lebanon',
      'Liberia',
      'Libya',
      'Macao',
      'Madagascar',
      'Mali',
      'Malta',
      'Morocco',
      'Mozambique',
      'Nicaragua',
      'Nigeria',
      'North Korea',
      'Pakistan',
      'Panama',
      'Philippines',
      'Russia',
      'Senegal',
      'Sierra Leone',
      'Somalia',
      'South Sudan',
      'Sri Lanka',
      'Sudan',
      'Syria',
      'Turkey',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'Venezuela',
      'Vietnam',
      'Yemen',
      'Zimbabwe'
    ],
    nationality: [
      'Afghanistan',
      'Albania',
      'Barbados',
      'Belarus',
      'Bosnia And Herzegovina',
      'Burkina Faso',
      'Burma (Myanmar)',
      'Burundi',
      'Cambodia',
      'Cayman Islands',
      'Central African Republic',
      'Congo, Republic of the (Congo-Brazzaville)',
      'Congo, Democratic Republic of the (Congo-Kinshasa)',
      'Cote D\'Ivoire (Ivory Coast)',
      'Cuba',
      'Cyprus',
      'Eritrea',
      'Ethiopia',
      'Gibraltar',
      'Guinea',
      'Guinea-Bissau',
      'Haiti',
      'Hong Kong',
      'Iran',
      'Iraq',
      'Jamaica',
      'Jordan',
      'Lebanon',
      'Liberia',
      'Libya',
      'Macao',
      'Madagascar',
      'Mali',
      'Malta',
      'Morocco',
      'Mozambique',
      'Nicaragua',
      'Nigeria',
      'North Korea',
      'Pakistan',
      'Panama',
      'Philippines',
      'Russia',
      'Senegal',
      'Sierra Leone',
      'Somalia',
      'South Sudan',
      'Sri Lanka',
      'Sudan',
      'Syria',
      'Turkey',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'Venezuela',
      'Vietnam',
      'Yemen',
      'Zimbabwe'
    ],
    notes: {
      en: "Full-featured business banking solution",
      ar: "حل مصرفي متكامل لقطاع الأعمال"
    }
  },
  payoneer: {
    residence: [
      'Afghanistan',
      'Belarus',
      'Central African Republic',
      'Congo, Democratic Republic of the',
      'Cuba',
      'Iran',
      'Lebanon',
      'Libya',
      'North Korea',
      'Somalia',
      'Sudan',
      'Syria',
      'Venezuela',
      'Burma (Myanmar)',
      'Eritrea',
      'Guinea-Bissau',
      'Kyrgyzstan',
      'Turkmenistan',
      'Yemen'
    ],
    nationality: [],
    notes: {
      en: "Extended documentation required - longer application process",
      ar: "إجراءاته طويلة ومعقدة"
    }
  },
  revolut: {
    residence: [
      'Afghanistan',
      'Albania',
      'Belarus',
      'Bosnia & Herzegovina',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Central African Republic',
      'Congo',
      'Democratic Republic of the Congo',
      'Croatia',
      'Cuba',
      'Eritrea',
      'Haiti',
      'Iran',
      'Iraq',
      'Lebanon',
      'Liberia',
      'Libya',
      'Mali',
      'Mozambique',
      'Myanmar',
      'Nicaragua',
      'Nigeria',
      'North Korea',
      'Pakistan',
      'Palestine',
      'Philippines',
      'Russia',
      'Somalia',
      'South Sudan',
      'Sudan',
      'Syria',
      'Ukraine',
      'Venezuela',
      'Yemen',
      'Zimbabwe'
    ],
    nationality: [
      'Syria',
      'Yemen',
      'Iran',
      'Afghanistan',
      'Russia',
      'Myanmar',
      'South Sudan',
      'Sudan',
      'Libya',
      'Belarus'
    ],
    notes: {
      en: "Skip the waitlist - we help you join directly (US companies normally require waitlist) + US signer required",
      ar: "تجاوز قائمة الانتظار - نحن نساعدك على الانضمام مباشرة (الشركات الأمريكية تتطلب عادةً قائمة انتظار) + يتطلب وجود مُوقِّع أمريكي"
    }
  },
  slash: {
    residence: [
      'Afghanistan',
      'Albania',
      'Belarus',
      'Bosnia & Herzegovina',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Central African Republic',
      'Congo',
      'Democratic Republic of the Congo',
      'Croatia',
      'Cuba',
      'Eritrea',
      'Haiti',
      'Iran',
      'Iraq',
      'Lebanon',
      'Liberia',
      'Libya',
      'Mali',
      'Mozambique',
      'Myanmar',
      'Nicaragua',
      'Nigeria',
      'North Korea',
      'Pakistan',
      'Palestine',
      'Philippines',
      'Russia',
      'Somalia',
      'South Sudan',
      'Sudan',
      'Syria',
      'Ukraine',
      'Venezuela',
      'Yemen',
      'Zimbabwe'
    ],
    nationality: [
      'Syria',
      'Yemen',
      'Iran',
      'Afghanistan',
      'Russia',
      'Myanmar',
      'South Sudan',
      'Sudan',
      'Libya',
      'Belarus'
    ],
    notes: {
      en: [
        "New and innovative fintech solution",
        "2% cashback on all ad spend",
        "Requires special invite (which we can help provide)"
      ],
      ar: [
        "حل مالي تقني جديد ومبتكر",
        "استرداد نقدي بنسبة 2% على جميع مصاريف الإعلانات",
        "يتطلب دعوة خاصة (ونحن نستطيع مساعدتك في الحصول عليها)"
      ]
    }
  },
  graph: {
    residence: [
      'North Korea',
      'Iran',
      'Albania',
      'Barbados',
      'Burkina Faso',
      'Cayman Islands',
      'Democratic Republic of the Congo',
      'Gibraltar',
      'Haiti',
      'Jamaica',
      'Jordan',
      'Mali',
      'Mozambique',
      'Panama',
      'Philippines',
      'Senegal',
      'South Sudan',
      'Syria',
      'Tanzania',
      'Trinidad and Tobago',
      'Turkey',
      'Uganda',
      'United Arab Emirates',
      'Yemen',
      'Bosnia-Herzegovina',
      'Belarus',
      'Burundi',
      'Central African Republic',
      'Croatia',
      'Cuba',
      'Cyprus',
      'Iraq',
      'Lebanon',
      'Libya',
      'Macedonia',
      'Montenegro',
      'Pakistan',
      'Russian Federation',
      'Serbia',
      'Slovenia',
      'Somalia',
      'Saudi Arabia',
      'Sudan',
      'Ukraine',
      'Venezuela',
      'Zimbabwe',
      'Bahamas',
      'British Virgin Islands',
      'Netherlands Antilles',
      'Cook Islands',
      'Fiji',
      'Nauru',
      'Vanuatu'
    ],
    nationality: [
      'North Korea',
      'Iran',
      'Albania',
      'Barbados',
      'Burkina Faso',
      'Cayman Islands',
      'Democratic Republic of the Congo',
      'Gibraltar',
      'Haiti',
      'Jamaica',
      'Jordan',
      'Mali',
      'Mozambique',
      'Panama',
      'Philippines',
      'Senegal',
      'South Sudan',
      'Syria',
      'Tanzania',
      'Trinidad and Tobago',
      'Turkey',
      'Uganda',
      'United Arab Emirates',
      'Yemen',
      'Bosnia-Herzegovina',
      'Belarus',
      'Burundi',
      'Central African Republic',
      'Croatia',
      'Cuba',
      'Cyprus',
      'Iraq',
      'Lebanon',
      'Libya',
      'Macedonia',
      'Montenegro',
      'Pakistan',
      'Russian Federation',
      'Serbia',
      'Slovenia',
      'Somalia',
      'Saudi Arabia',
      'Sudan',
      'Ukraine',
      'Venezuela',
      'Zimbabwe',
      'Bahamas',
      'British Virgin Islands',
      'Netherlands Antilles',
      'Cook Islands',
      'Fiji',
      'Nauru',
      'Vanuatu'
    ],
    notes: {
      en: "New banking solution with modern features and quick setup",
      ar: "حل مصرفي جديد بميزات عصرية وإعداد سريع"
    }
  }
};