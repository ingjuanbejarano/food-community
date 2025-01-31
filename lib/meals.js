import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const meals = db.prepare("SELECT * FROM meals").all();
  //throw new Error("This is an error"); // trigger an intentional error
  return meals;
}

export function getMeal(slug) {
  //new Promise((resolve) => setTimeout(resolve, 2000));
  const meal = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return meal;
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}-${Math.floor(
    Math.random() * 10000
  )}.${extension}`;

  const buffer = await meal.image.arrayBuffer();
  fs.createWriteStream(`public/images/${filename}`).write(
    Buffer.from(buffer),
    (err) => {
      if (err) {
        throw new Error("Failed to save image");
      }
    }
  );

  meal.image = `/images/${filename}`;

  db.prepare(
    "INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)"
  ).run(meal);
}
