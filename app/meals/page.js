import { Suspense } from "react";
import Link from "next/link";
import MealsGrid from "@/components/meals/meal-grids";
import { getMeals } from "@/lib/meal";
import classes from "./page.module.css";

export const metadata = {
  title: 'All Meals',
  description: 'Browse the Delicious meals served by our community.',
};

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, created{" "}
          <span className={classes.highlight}>by You</span>
        </h1>
        <p>Choose your favourite recipe & cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Fav Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
