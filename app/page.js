import MealSharePage from "./meals/share/page";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
        <p>
          <Link href="/meals/">Meals Page</Link>
        </p>
        <p>
          <Link href="/meals/share/">Share Page</Link>
        </p>
        <p>
          <Link href="/community">Community Page</Link>
        </p>
      </h1>
    </main>
  );
}
