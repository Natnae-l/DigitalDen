interface headPhone {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

interface Category {
  categories: { mainCategory: string[] };
  headPhones: headPhone[];
}

async function homeLoader() {
  let response = await fetch("https://digitalden-backend.onrender.com/");
  let data: Category = await response.json();

  return data;
}

export default homeLoader;
