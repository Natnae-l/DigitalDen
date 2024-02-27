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

import { useNavigate } from "react-router-dom";

// }
export interface Category {
  Category: string[];
}

async function homeLoader() {
  let navigate = useNavigate();
  try {
    let response = await fetch(
      "https://digitalden-backend.onrender.com/categories"
    );
    let data: Category = await response.json();

    return data;
  } catch (error) {
    console.log(error);

    return navigate("*");
  }
}

export default homeLoader;
