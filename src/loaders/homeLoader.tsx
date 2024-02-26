// interface headPhone {
//   id: string;
//   name: string;
//   description: string;
//   category: string;
//   price: number;
//   rating: number;
//   image: string;
// }
// interface HeadPhones {
//   headPhones: headPhone[];
// }
export interface Category {
  Category: string[];
}

async function homeLoader() {
  let response = await fetch(
    "https://digitalden-backend.onrender.com/categories"
  );
  let data: Category = await response.json();

  return data;
}

export default homeLoader;
