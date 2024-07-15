import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <main>
        <h1>Meal Page</h1>
        <p>Welcome to our meal page!</p>
        <Link href="meals/post-1">Post 1</Link>
        <p></p>
        <Link href="meals/post-2">Post 2</Link>
      </main>
    </>
  );
}
