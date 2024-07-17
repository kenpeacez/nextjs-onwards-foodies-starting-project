import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  try {
    //throw new Error('Custom error message');
  } finally {
  }
  return db.prepare("SELECT * FROM meals").all();
}

export function getMealById(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
