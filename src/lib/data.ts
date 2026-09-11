export interface Product {
  name: string;
  sanskrit: string;
  tag: string;
  desc: string;
  ingredients: string;
  price: number;
  mrp: number;
  badge?: string;
  img: string;
}

export const PRODUCTS: Product[] = [
  {
    name: "Shakti Amrit",
    sanskrit: "शक्ति अमृत",
    tag: "Immunity Booster Drops",
    desc: "Daily drops that awaken your body's inner defence force — stay protected through every season.",
    ingredients: "Echinacea · Tulsi · Guduchi",
    price: 499,
    mrp: 649,
    badge: "Bestseller",
    img: "/images/product-shakti.jpg",
  },
  {
    name: "Kesh Nikhar",
    sanskrit: "केश निखार",
    tag: "Hair Revive Oil",
    desc: "Vedic oil ritual for strong roots, reduced hair fall and a natural, lustrous shine.",
    ingredients: "Brahmi · Amla · Bhringraj",
    price: 549,
    mrp: 699,
    badge: "New",
    img: "/images/product-kesh.jpg",
  },
  {
    name: "Agni Deep",
    sanskrit: "अग्नि दीप",
    tag: "Digestive Care Drops",
    desc: "Kindles the sacred digestive fire — freedom from gas, acidity and a sluggish gut.",
    ingredients: "Triphala · Ajwain · Saunf",
    price: 449,
    mrp: 599,
    img: "/images/product-agni.jpg",
  },
  {
    name: "Sandhi Sukh",
    sanskrit: "संधि सुख",
    tag: "Joint & Pain Relief",
    desc: "Gentle yet deep relief for stiff joints, backaches and age-related discomfort.",
    ingredients: "Boswellia · Ginger · Rasna",
    price: 599,
    mrp: 749,
    badge: "Bestseller",
    img: "/images/product-sandhi.jpg",
  },
  {
    name: "Twacha Glow",
    sanskrit: "त्वचा ग्लो",
    tag: "Skin & Detox Drops",
    desc: "Purifies the blood from within for clear, radiant, naturally glowing skin.",
    ingredients: "Neem · Manjistha · Rose",
    price: 529,
    mrp: 679,
    img: "/images/product-twacha.jpg",
  },
  {
    name: "Man Shanti",
    sanskrit: "मन शांति",
    tag: "Stress & Sleep Care",
    desc: "Calms the restless mind — deep, refreshing sleep without habit-forming sedatives.",
    ingredients: "Ashwagandha · Jatamansi",
    price: 479,
    mrp: 629,
    img: "/images/product-manshanti.jpg",
  },
  {
    name: "Ojas Vital",
    sanskrit: "ओजस् वाइटल",
    tag: "Vitality & Energy Tonic",
    desc: "Rebuilds your ojas — all-day stamina, sharp focus and warrior-like vigour.",
    ingredients: "Safed Musli · Shatavari · Gold",
    price: 649,
    mrp: 799,
    badge: "Premium",
    img: "/images/product-ojas.jpg",
  },
];

export interface Testimonial {
  name: string;
  loc: string;
  concern: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ramesh Sharma",
    loc: "Jaipur",
    concern: "Chronic Acidity — 20 yrs",
    text: "Twenty years of antacids, yet real peace came only with Agni Deep. Three months in, I eat like a young man again. The vaidya ji personally guided my dosage on WhatsApp.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    loc: "Indore",
    concern: "Severe Hair Fall",
    text: "After my pregnancy, clumps of hair would fall daily. Kesh Nikhar changed everything in 8 weeks. My hairline has filled back — even my parlour didi asked my secret!",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    loc: "Varanasi",
    concern: "Knee Pain",
    text: "Climbing the ghat steps had become impossible at 62. Sandhi Sukh drops made my knees young again — I now walk to Vishwanath ji every morning, pain-free.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    loc: "Ahmedabad",
    concern: "Insomnia & Anxiety",
    text: "Corporate stress stole my sleep for years. Man Shanti gave me deep, natural sleep within days — no heaviness, no addiction. I wake up before my alarm, fresh.",
    rating: 5,
  },
  {
    name: "Kavita Singh",
    loc: "Lucknow",
    concern: "Skin Allergy",
    text: "Ten years of creams and steroid tubes. Twacha Glow healed me from inside out in four months. My skin finally breathes — the glow is pure, not painted.",
    rating: 4,
  },
  {
    name: "Mohan Das",
    loc: "Haridwar",
    concern: "Low Immunity",
    text: "Every changing season meant fever and cough for my whole family. Since Shakti Amrit entered our home, even the children sail through winters untouched.",
    rating: 5,
  },
  {
    name: "Deepika Rao",
    loc: "Bengaluru",
    concern: "Fatigue & Low Energy",
    text: "By 4 PM I used to drag myself through the day. Ojas Vital brought back a vitality I had not felt since my twenties. It genuinely feels like liquid prana.",
    rating: 5,
  },
  {
    name: "Harpreet Gill",
    loc: "Ludhiana",
    concern: "Gas & Bloating",
    text: "I was sceptical of homeopathy, honestly. But one consultation on WhatsApp — such patient listening — and Agni Deep fixed what years of tablets could not.",
    rating: 4,
  },
];
