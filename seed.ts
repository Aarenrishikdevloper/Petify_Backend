import mongoose from "mongoose";
import { Product } from "./src/models/productmodel"; // make sure this path is correct

const MONGO_URI =
  "mongodb+srv://Realizz:gmrwRqZetc3p5qkL@cluster0.7ua0zvw.mongodb.net/petify?appName=Cluster0";

const seedProducts = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("🌱 Connected to MongoDB");

  await Product.deleteMany({});
  console.log("🧹 Cleared old product data");

  const products = [
  // 🐾 FOOD
  {
    name: "Premium Dog Food",
    description: "High-protein chicken formula for active dogs.",
    image: "https://media.zooplus.com/bilder/1/400/harri_adult_dog_lamb_15kg_opt_2_1.jpg",
    oldPrice: 569,
    newPrice: 540,
    category: "food",
    maxQuantity: 100,
  },
  {
    name: "Cat Tuna Delight",
    description: "Soft tuna-based wet food for picky cats.",
    image: "https://media.zooplus.com/bilder/3/400/61227_pla_royalcanin_sensible33_9_3.jpg",
    oldPrice: 456,
    newPrice: 417,
    category: "food",
    maxQuantity: 90,
  },
  {
    name: "Puppy Starter Meal",
    description: "Balanced starter food for growing puppies.",
    image: "https://media.zooplus.com/bilder/1/400/harri_adult_dog_lamb_15kg_opt_2_1.jpg",
    oldPrice: 280,
    newPrice: 223,
    category: "food",
    maxQuantity: 80,
  },
  {
    name: "Organic Cat Dry Food",
    description: "Grain-free dry food enriched with vitamins.",
    image: "https://media.zooplus.com/bilder/3/400/61227_pla_royalcanin_sensible33_9_3.jpg",
    oldPrice: 120,
    newPrice: 110,
    category: "food",
    maxQuantity: 95,
  },

  // 🐾 COLLARS
  {
    name: "Adjustable Nylon Dog Collar",
    description: "Soft, durable collar for dogs of all sizes.",
    image: "/images/dog_collar_1.jpg",
    oldPrice: 224,
    newPrice: 201,
    category: "collars",
    maxQuantity: 120,
  },
  {
    name: "Bell Cat Collar",
    description: "Cute collar with a gentle bell for indoor cats.",
    image: "/images/cat_collar_1.jpg",
    oldPrice: 150,
    newPrice: 147,
    category: "collars",
    maxQuantity: 130,
  },
  {
    name: "Reflective Dog Collar",
    description: "Reflective safety collar for night walks.",
    image: "https://media.zooplus.com/bilder/1/400/323034_pla_neoprene_geschirr_xl_grau__fg_8071_1.jpg",
    oldPrice: 200,
    newPrice: 165,
    category: "collars",
    maxQuantity: 110,
  },
  {
    name: "Leather Cat Collar",
    description: "Soft leather collar with adjustable strap.",
    image: "https://media.zooplus.com/bilder/1/400/323034_pla_neoprene_geschirr_xl_grau__fg_8071_1.jpg",
    oldPrice: 170,
    newPrice: 166,
    category: "collars",
    maxQuantity: 125,
  },

  // 🧸 TOYS
  {
    name: "Rubber Chew Toy",
    description: "Durable chew toy perfect for dogs who love to bite.",
    image: "https://media.zooplus.com/bilder/8/400/46452_pla_kong_classic_hs_03_8.jpg",
    oldPrice: 10,
    newPrice: 8,
    category: "toys",
    maxQuantity: 150,
  },
  {
    name: "Feather Cat Teaser",
    description: "Interactive toy designed to excite playful cats.",
    image: "https://media.zooplus.com/bilder/6/400/383842_pla_tiaki_lime_feather_teaser_fg_4359_6.jpg",
    oldPrice: 12,
    newPrice: 10,
    category: "toys",
    maxQuantity: 200,
  },
  
];


  await Product.insertMany(products);
  console.log("✅ Seed data inserted!");

  mongoose.connection.close();
  console.log("🔌 MongoDB connection closed");
};

seedProducts().catch((err) => {
  console.error(err);
  mongoose.connection.close();
});
