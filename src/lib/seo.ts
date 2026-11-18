export const SITE_URL = "https://www.sunwellnessacupuncture.com";
export const SITE_NAME = "Sun Wellness Acupuncture";
export const SITE_SUBTITLE = "Chinese Acupuncture & Herbal Clinic";
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/3053+W+Olympic+Blvd,+Los+Angeles,+CA+90006";
export const YELP_URL =
  "https://www.yelp.com/biz/sun-wellness-acupuncture-los-angeles";

export const CLINIC_INFO = {
  name: SITE_NAME,
  legalName: "Sun Wellness Acupuncture",
  Practitioner: "Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac.",
  phoneDisplay: "(323) 933-1212",
  phoneHref: "tel:+13239331212",
  phoneE164: "+1-323-933-1212",
  email: "sun.acubeauty@gmail.com",
  address: {
    streetAddress: "3053 W. Olympic Blvd. Suite 309",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90006",
    addressCountry: "US",
    neighborhood: "Koreatown",
  },
  geo: {
    latitude: 34.052872,
    longitude: -118.301718,
  },
  hoursDisplay: "Mon – Fri: 8:00 AM – 5:00 PM",
  openingHours: "Mo-Fr 08:00-17:00",
} as const;

export const FAQ_ITEMS = [
  {
    question: "Do you accept HMO health insurance for acupuncture?",
    answer:
      "Yes, Sun Wellness Acupuncture accepts HMO health insurance plans. Contact us with your insurance ID number, full name, date of birth, and a copy of the front and back of your insurance card, and we will verify your acupuncture benefits before your first visit.",
  },
  {
    question: "What are your clinic hours and where are you located?",
    answer:
      "We are open Monday through Friday from 8:00 AM to 5:00 PM. Our clinic is located at 3053 W. Olympic Blvd. Suite 309, Los Angeles, CA 90006 in Koreatown, with free patient parking available in the building garage.",
  },
  {
    question: "How long does an acupuncture session take?",
    answer:
      "Please allow 1.5 to 2 hours for your initial consultation and first treatment so Dr. Kim can thoroughly evaluate your health history and symptoms. Follow-up sessions typically last 45 to 60 minutes.",
  },
  {
    question: "How should I prepare for my first acupuncture visit?",
    answer:
      "Please wear loose, comfortable clothing for easy access to acupuncture points, and have a light snack or meal a few hours beforehand rather than visiting on an empty stomach or immediately after a heavy meal.",
  },
  {
    question: "What conditions can acupuncture and Oriental medicine treat?",
    answer:
      "Dr. Sunny Kim treats acute and chronic pain (back pain, neck pain, sciatica, migraines, shoulder and knee pain, neuropathy), women's health and fertility (PMS, menopause, irregular cycles, IVF/pregnancy support), digestive disorders (IBS, acid reflux, colitis), stress and anxiety, allergies, and holistic weight management.",
  },
] as const;

export function getMedicalClinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": `${SITE_URL}/#clinic`,
        name: SITE_NAME,
        alternateName: `${SITE_NAME} - ${SITE_SUBTITLE}`,
        url: SITE_URL,
        telephone: CLINIC_INFO.phoneE164,
        email: CLINIC_INFO.email,
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Check, Visa, Mastercard, HMO Health Insurance",
        image: [
          `${SITE_URL}/images/acupuncture.webp`,
          `${SITE_URL}/images/drkim.webp`,
          `${SITE_URL}/images/cupping.webp`,
        ],
        logo: `${SITE_URL}/icon.svg`,
        description:
          "Sun Wellness Acupuncture in Koreatown, Los Angeles. Dr. Sunny Sun-Eui Kim, Ph.D., L.Ac. offers over 25 years of clinical experience in acupuncture, cupping, cosmetic facial acupuncture, and Chinese herbal medicine. HMO health insurance accepted.",
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC_INFO.address.streetAddress,
          addressLocality: CLINIC_INFO.address.addressLocality,
          addressRegion: CLINIC_INFO.address.addressRegion,
          postalCode: CLINIC_INFO.address.postalCode,
          addressCountry: CLINIC_INFO.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CLINIC_INFO.geo.latitude,
          longitude: CLINIC_INFO.geo.longitude,
        },
        hasMap: GOOGLE_MAPS_URL,
        openingHours: [CLINIC_INFO.openingHours],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Free Patient Garage Parking",
            value: true,
          },
        ],
        areaServed: [
          { "@type": "City", name: "Los Angeles" },
          { "@type": "Place", name: "Koreatown, Los Angeles" },
          { "@type": "Place", name: "Mid-Wilshire, Los Angeles" },
          { "@type": "Place", name: "Hancock Park, Los Angeles" },
          { "@type": "Place", name: "Downtown Los Angeles" },
          { "@type": "Place", name: "Miracle Mile, Los Angeles" },
        ],
        medicalSpecialty: [
          "Traditional Chinese Medicine",
          "Acupuncture",
          "Herbal Medicine",
          "Pain Management",
        ],
        founder: {
          "@id": `${SITE_URL}/about#dr-sunny-kim`,
        },
        employee: {
          "@id": `${SITE_URL}/about#dr-sunny-kim`,
        },
        sameAs: [YELP_URL, GOOGLE_MAPS_URL],
      },
      {
        "@type": "Physician",
        "@id": `${SITE_URL}/about#dr-sunny-kim`,
        name: "Dr. Sunny Sun-Eui Kim",
        honorificPrefix: "Dr.",
        honorificSuffix: "Ph.D., L.Ac.",
        jobTitle: "Founder & Licensed Acupuncturist",
        image: `${SITE_URL}/images/drkim.webp`,
        url: `${SITE_URL}/about`,
        telephone: CLINIC_INFO.phoneE164,
        worksFor: {
          "@id": `${SITE_URL}/#clinic`,
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Emperor's College of Traditional Oriental Medicine",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Santa Monica",
            addressRegion: "CA",
            addressCountry: "US",
          },
        },
        knowsAbout: [
          "Acupuncture",
          "Traditional Oriental Medicine",
          "Chinese Herbal Medicine",
          "Cosmetic Facial Acupuncture",
          "Cupping Therapy",
          "Pain Management",
          "Women's Health & Fertility",
          "Digestive Wellness",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: `${SITE_NAME} — ${SITE_SUBTITLE} in Koreatown, Los Angeles`,
        publisher: {
          "@id": `${SITE_URL}/#clinic`,
        },
        inLanguage: "en-US",
      },
    ],
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
