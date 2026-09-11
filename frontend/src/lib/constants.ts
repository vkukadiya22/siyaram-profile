export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  features?: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  questionGu: string;
  answerGu: string;
  questionHi: string;
  answerHi: string;
}

export const COMPANY_INFO = {
  name: "Siyaram Profile",
  tagline: "Quality That Takes Shape",
  description: "Situated in the industrial heart of Gujarat, Siyaram Profile delivers unparalleled quality in CNC and profile cutting for heavy industries worldwide.",
  address: "G.I.D.C. Mamasa, Opp. Khushbu Steel, Talaja Highway, Bhavnagar, Gujarat 364050, India",
  googleMapsUrl: "https://maps.app.goo.gl/zsFeiSK69JnX2iMi6",
  phone: "+91 96249 64125 (Mr. Mukesh Kukadiya)",
  phoneSecondary: "+91 98245 15170 (Mr. Kishor Sutariya)",
  phoneMukesh: "+91 96249 64125",
  phoneKishor: "+91 98245 15170",
  nameMukesh: "Mr. Mukesh Kukadiya",
  nameKishor: "Mr. Kishor Sutariya",
  email: "siyaramprofile82@gmail.com",
  whatsappNumber: "+9196249 64125",
  whatsappMessage: "Hello Siyaram Profile team, I would like to inquire about your engineering services.",
  workingHours: "Mon - Sat: 8:00 AM - 6:00 PM",
  yearEstablished: 2014,
  yearsOfExcellence: "20+",
  projectsDelivered: "610+",
  clientsServed: "140+",
  defectFreeRate: "100%",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "cnc-cutting",
    title: "CNC Cutting",
    description: "High-tolerance precision cutting utilizing advanced computer numerical control technology for complex geometries and exact specifications.",
    icon: "precision_manufacturing",
    image: "/cnc-cutting.webp",
    alt: "Automated CNC cutting machine head",
    features: ["High-quality cutting", "Custom dimensions", "Industrial applications"]
  },
  {
    id: "profile-cutting",
    title: "Profile Cutting",
    description: "Custom shape extraction from heavy M.S. plates, ensuring minimal material waste and exact dimensional adherence for structural frameworks.",
    icon: "architecture",
    image: "/profile-cutting.webp",
    alt: "Heavy gauge steel plates",
    features: ["Custom shapes", "Custom CAD/CAM Conversion","Minimal material waste"]
  },
  {
    id: "circle-cutting",
    title: "Circle Cutting",
    description: "Flawless circular cuts engineered for flanges, pressure vessels, and heavy-duty rotational components requiring absolute symmetry.",
    icon: "trip_origin",
    image: "/circle-cutting.webp",
    alt: "Circular steel flanges",
    features: ["Multiple sizes", "Smooth finish", "Accurate dimensions"]
  },
  {
    id: "ms-plate-supply",
    title: "M.S. Plate Supply",
    description: "Premium grade Mild Steel plates sourced and supplied to exact thickness and metallurgical requirements for heavy fabrication.",
    icon: "layers",
    image: "/profile-plate2.webp",
    alt: "Mild steel plates stock",
    features: ["Various thicknesses", "Custom Sizing & Slitting", "Quality material"]
  },
  {
    id: "agro-parts",
    title: "Agro Parts",
    description: "Robust and durable manufacturing of specialized components designed to withstand the brutal conditions of heavy agricultural equipment.",
    icon: "agriculture",
    image: "/agro-parts.webp",
    alt: "Agricultural steel parts",
    features: ["Strong construction", "Reliable performance", "Custom manufacturing"]
  },
  {
    id: "engineering-parts",
    title: "Engineering Parts",
    description: "Bespoke engineering solutions delivering custom-machined parts that integrate seamlessly into complex industrial machinery.",
    icon: "settings_suggest",
    image: "/engineering-parts.webp",
    alt: "Custom engineered parts",
    features: ["Custom fabrication", "Industrial components", "Quality workmanship"]
  },
  {
    id: "cultivator-tyne-parts",
    title: "Cultivator Tyne & Implement Parts",
    description: "Heavy-duty agricultural cultivator tynes (Tota Panja Front Tyne) and implement wear components built for high durability and soil penetration.",
    icon: "agriculture",
    image: "/tota-panja-tyne.webp",
    alt: "Tota Panja Front Tyne agricultural implement component",
    features: ["High wear resistance", "Forged strength", "Custom implement fitting"]
  },
  {
    id: "metal-blanking-cutting",
    title: "Custom Metal Blanking & Cutting",
    description: "Batch precision cutting and blanking of mild steel components ready for immediate assembly and structural integration.",
    icon: "content_cut",
    image: "/cutting-mall.webp",
    alt: "Custom cut profile metal components",
    features: ["Batch production", "Clean cut edges", "Ready for assembly"]
  },
  {
    id: "heavy-profile-plates",
    title: "Heavy Profile Plates",
    description: "Thick gauge M.S. profile plates engineered for heavy machinery bases, crane girders, and industrial foundation brackets.",
    icon: "foundation",
    image: "/profile-plate1.webp",
    alt: "Heavy structural profile steel plate",
    features: ["Thick gauge capacity", "High load strength", "Custom geometry"]
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "Capabilities",
    question: "What plate thicknesses can Siyaram Profile process?",
    answer: "We process Mild Steel (M.S.) plates ranging from 3mm up to 250mm thickness using high-power CNC Fiber Laser, Oxy-Fuel, and High-Definition Plasma cutting technology.",
    questionGu: "સિયારામ પ્રોફાઇલ કેટલી જાડાઈ (Thickness) ની પ્લેટો કટીંગ અને પ્રોસેસ કરી શકે છે?",
    answerGu: "અમે હાઇ-પાવર CNC ફાઇબર લેસર, ઓક્સી-ફ્યુઅલ (ગેસ કટીંગ) અને હાઇ-ડેફિનેશન પ્લાઝ્મા કટીંગ ટેકનોલોજીનો ઉપયોગ કરીને 3mm થી લઈને 250mm સુધીની જાડાઈ ધરાવતી માઇલ્ડ સ્ટીલ (M.S.) પ્લેટોનું સચોટ કટીંગ અને પ્રોસેસિંગ કરીએ છીએ.",
    questionHi: "सियाराम प्रोफाइल कितनी मोटाई (Thickness) की प्लेटों की कटिंग और प्रोसेसिंग कर सकता है?",
    answerHi: "हम हाई-पावर सीएनसी फाइबर लेजर, ऑक्सी-फ्यूल (गैस कटिंग) और हाई-डेफिनिशन प्लाज्मा कटिंग तकनीक का उपयोग करके 3 मिमी से लेकर 250 मिमी तक की मोटाई वाली माइल्ड स्टील (M.S.) प्लेटों की सटीक कटिंग और प्रोसेसिंग करते हैं।"
  },
  {
    id: "faq-2",
    category: "Quality",
    question: "What tolerances do your CNC cutting services achieve?",
    answer: "Our CNC Fiber Laser achieves tolerances down to ±0.05 mm, while our heavy multi-torch plasma and flame profile systems maintain tolerances within ±0.5 mm.",
    questionGu: "તમારી CNC કટીંગ સર્વિસમાં કેટલી ચોકસાઈ (Accuracy / Tolerance) મળે છે?",
    answerGu: "અમારું CNC ફાઇબર લેસર કટીંગ ±0.05 mm સુધીની ઉત્તમ માઇક્રો-ચોકસાઈ આપે છે, જ્યારે અમારી હેવી મલ્ટી-ટોર્ચ પ્લાઝ્મા અને ફ્લેમ પ્રોફાઇલ સિસ્ટમ્સ ±0.5 mm ની અંદર સચોટ માપ જાળવી રાખે છે.",
    questionHi: "आपकी सीएनसी कटिंग सेवा में कितनी सटीकता (Tolerance / Accuracy) मिलती है?",
    answerHi: "हमारी सीएनसी फाइबर लेजर कटिंग ±0.05 मिमी तक की उच्च सटीकता प्रदान करती है, जबकि हमारी हैवी मल्टी-टॉर्च प्लाज्मा और फ्लेम प्रोफाइल सिस्टम ±0.5 मिमी के भीतर सटीक माप बनाए रखते हैं।"
  },
  {
    id: "faq-3",
    category: "Materials",
    question: "What grades of steel plates do you stock and cut?",
    answer: "We regularly supply and profile cut IS 2062 Grade E250 / E350, SA 516 Gr 70, High Tensile plates, Hardox wear-resistant plates, and custom alloy grades upon request.",
    questionGu: "તમે કયા ગ્રેડની સ્ટીલ પ્લેટોનો સ્ટોક રાખો છો અને કટીંગ કરો છો?",
    answerGu: "અમે નિયમિતપણે IS 2062 Grade E250 / E350, SA 516 Gr 70, હાઇ-ટેન્સાઇલ પ્લેટો, હાર્ડોક્સ (Hardox) વેર-રેઝિસ્ટન્ટ પ્લેટો તેમજ ગ્રાહકની જરૂરિયાત મુજબ કસ્ટમ એલોય ગ્રેડની સ્ટીલ પ્લેટો સપ્લાય અને પ્રોફાઇલ કટીંગ કરીએ છીએ.",
    questionHi: "आप किस ग्रेड की स्टील प्लेटों का स्टॉक रखते हैं और कटिंग करते हैं?",
    answerHi: "हम नियमित रूप से IS 2062 Grade E250 / E350, SA 516 Gr 70, हाई-टेंसिल प्लेट्स, हार्डॉक्स (Hardox) वियर-रेसिस्टेंट प्लेट्स और कस्टम अलॉय ग्रेड की स्टील प्लेट्स की आपूर्ति और प्रोफाइल कटिंग करते हैं।"
  },
  {
    id: "faq-4",
    category: "Logistics",
    question: "Do you deliver processed components outside Gujarat?",
    answer: "Yes, we ship heavy engineered profiles, flanges, and M.S. plates across all major industrial hubs in India with full protective packaging and material test certificates.",
    questionGu: "શું તમે ગુજરાત બહાર પણ તૈયાર થયેલા પાર્ટ્સ અને પ્લેટોની ડિલિવરી કરો છો?",
    answerGu: "હા, અમે સંપૂર્ણ સુરક્ષિત પેકિંગ અને મટિરિયલ ટેસ્ટ સર્ટિફિકેટ (MTC) સાથે ભારતના તમામ મુખ્ય ઔદ્યોગિક વિસ્તારોમાં હેવી એન્જિનિયર્ડ પ્રોફાઇલ્સ, ફ્લેંજ્સ અને M.S. પ્લેટો સપ્લાય અને ટ્રાન્સપોર્ટ કરીએ છીએ.",
    questionHi: "क्या आप गुजरात के बाहर भी तैयार पार्ट्स और प्लेटों की डिलीवरी करते हैं?",
    answerHi: "हाँ, हम पूरे भारत के प्रमुख औद्योगिक हब और राज्यों में सुरक्षित पैकेजिंग और मटेरियल टेस्ट सर्टिफिकेट (MTC) के साथ भारी इंजीनियर्ड प्रोफाइल्स, फ्लैंग्स और M.S. प्लेट्स की डिलीवरी करते हैं।"
  },
  {
    id: "faq-5",
    category: "Inquiries",
    question: "How quickly can I receive a quotation for custom drawings?",
    answer: "Upload or send your DXF, DWG, or PDF blueprints to siyaramprofile82@gmail.com, and our technical estimating team will provide a comprehensive quote within 24 hours.",
    questionGu: "કસ્ટમ ડ્રોઇંગ / ઓર્ડર માટે મને કેટલા સમયમાં ભાવ (Quotation) મળી શકે છે?",
    answerGu: "તમે તમારી DXF, DWG અથવા PDF ડ્રોઇંગ મુકેશભાઈ (+91 96249 64125) કે કિશોરભાઈ (+91 98245 15170) ને WhatsApp અથવા ઈમેઇલ siyaramprofile82@gmail.com પર મોકલી શકો છો. અમારી ટેકનિકલ ટીમ 24 કલાકની અંદર સંપૂર્ણ કોટેશન આપશે.",
    questionHi: "कस्टम ड्राइंग / ऑर्डर के लिए मुझे कितनी जल्दी कोटेशन (मूल्य) मिल सकता है?",
    answerHi: "आप अपनी DXF, DWG या PDF ड्राइंग मुकेशभाई (+91 96249 64125) या किशोरभाई (+91 98245 15170) को WhatsApp या ईमेल siyaramprofile82@gmail.com पर भेज सकते हैं। हमारी टेक्निकल टीम 24 घंटे के भीतर आपको विस्तृत कोटेशन प्रदान करेगी।"
  }
];
