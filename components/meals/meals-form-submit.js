"use client";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus(); //use pending property
  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
