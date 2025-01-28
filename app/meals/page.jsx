import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meals";

const MealsPage = async () => {
  const meals = await getAllMeals()
  return (
    <>
      <header className={classes.header}>
        <h1>
          Tasty meals, all created{" "}
          <span className={classes.highlight}>By you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself!, it is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your own recipe!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
