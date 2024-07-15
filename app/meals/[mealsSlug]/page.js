export default function MealsSlug({ params }) {
  return (
    <>
      <main>
        <h1>Meal Details</h1>
        <p>{params.mealsSlug}</p>
      </main>
    </>
  );
}
