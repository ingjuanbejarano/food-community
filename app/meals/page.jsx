import { Suspense } from "react";
import Link from "next/link";

import MealsGrid from "@/components/meals/meals-grid";
import LoadingMeals from "./loading-meals";

import { getAllMeals } from "@/lib/meals";
import classes from "./page.module.css";

const Meals = async () => {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
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
        <Suspense fallback={<LoadingMeals />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
