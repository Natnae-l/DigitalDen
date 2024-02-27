export interface Category {
  Category: string[];
}

async function homeLoader() {
  try {
    let response = await fetch(
      "https://digitalden-backend.onrender.com/categories"
    );
    let data: Category = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default homeLoader;
