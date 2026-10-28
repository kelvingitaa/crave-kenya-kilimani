// Single place to edit restaurant facts for CRAVE KENYA - KILIMANI
export const restaurant = {
  name: "CRAVE",
  fullName: "CRAVE KENYA - Kilimani",
  tagline: "Satisfying every craving…™️",
  address: "Ring Rd Kilimani, Nairobi",
  plusCode: "PQ4P+HV Nairobi",
  phone: "0756 600600",
  phoneIntl: "+254756600600",
  whatsapp: "254756600600",
  closes: "Closes 1 am",
  hours: "Open daily · 7:00 am – 1:00 am",
  priceRange: "Ksh 1,000–5,000 per person",
  rating: "4.8",
  reviewCount: 2404,
  tripadvisorRating: "4.9",
  tripadvisorReviews: 673,
  tripadvisorRank: "#6 of 928 restaurants in Nairobi",
  uberEatsRating: "4.6",
  uberEatsReviews: 190,
  services: ["Dine-in", "Takeaway", "Delivery", "Private dining room", "Late night cocktails", "Happy-hour food"],
  mapsUrl: "https://maps.google.com/?cid=5104169722352822637",
  instagram: "https://www.instagram.com/crave_kenya/",
  glovo: null as string | null,
  uberEats: "https://www.ubereats.com/ke/store/crave-kenya-kilimani/caqn9iMoXN2OHH66N-xZ6g",
};

export type Dish = {
  name: string;
  sw?: string;
  desc: string;
  price: number | null;
  category: string;
  popular?: boolean;
};

export const menu: Dish[] = [
  // Breakfast & Brunch
  {
    name: "Fluffy American Buttermilk Pancakes",
    desc: "A towering stack of warm, golden, extra-fluffy buttermilk pancakes served with pure maple syrup, whipped butter and fresh berries.",
    price: 1200,
    category: "Breakfast & Brunch",
    popular: true,
  },
  {
    name: "Crave Full English Breakfast Platter",
    desc: "Farm eggs cooked to your style, crispy beef bacon, gourmet chicken sausages, sautéed herbed breakfast potatoes, baked beans, grilled tomato and toasted artisan bread.",
    price: 1650,
    category: "Breakfast & Brunch",
    popular: true,
  },

  // Starters & Small Plates
  {
    name: "Signature Loaded Fries",
    desc: "Crispy golden hand-cut fries smothered in warm melted cheddar sauce, seasoned pulled beef, jalapeños, spring onions and garlic herb aioli.",
    price: 1100,
    category: "Small Plates & Starters",
    popular: true,
  },
  {
    name: "Crispy Swahili Bhajia",
    sw: "Bhajia moto na chatne",
    desc: "Thinly sliced spiced potato fritters fried until golden-crisp, served with fresh coconut chutney and zesty tamarind dip.",
    price: 850,
    category: "Small Plates & Starters",
    popular: true,
  },

  // Burgers & Grills
  {
    name: "Crave Gourmet Monster Burger",
    desc: "Flame-grilled prime aged beef patty, melted cheddar, sweet caramelized onions, crisp lettuce, gherkins and smoky house burger sauce in a brioche bun. Served with fries.",
    price: 1600,
    category: "Burgers & Grills",
    popular: true,
  },
  {
    name: "Glazed BBQ Pork & Beef Ribs",
    desc: "Slow-smoked tender ribs basted in Crave's sticky sweet-smoky barbecue glaze, served with crunchy rainbow slaw and seasoned potato wedges.",
    price: 2400,
    category: "Burgers & Grills",
    popular: true,
  },

  // Mains & Seafood
  {
    name: "Creamy Garlic & Herb Seafood Linguine",
    desc: "Succulent pan-seared jumbo prawns and tender calamari tossed in rich garlic parmesan cream with cherry tomatoes, basil and cracked black pepper.",
    price: 2200,
    category: "Mains & Seafood",
    popular: true,
  },
  {
    name: "Swahili Coastal Coconut Fish",
    sw: "Samaki wa nazi",
    desc: "Fresh ocean fish simmered in a spiced coastal coconut cream sauce infused with cardamom and ginger, served with fragrant basmati rice.",
    price: 1950,
    category: "Mains & Seafood",
  },

  // Cocktails & Drinks
  {
    name: "Kilimani Sunset Signature Cocktail",
    desc: "Premium tropical rum shaken with passion fruit puree, fresh lime, mint leaves and topped with chilled prosecco. Ideal for happy hour.",
    price: 1100,
    category: "Cocktails & Drinks",
    popular: true,
  },
  {
    name: "Smoked Applewood Old Fashioned",
    desc: "Small-batch bourbon stirred with Angostura bitters, orange peel, cane syrup and presented in an applewood smoke cloud.",
    price: 1250,
    category: "Cocktails & Drinks",
  },
];
