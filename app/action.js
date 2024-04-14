"use server";
import { redirect } from "next/navigation";

export async function handleForm(formData) {
  "use server";
  const city = encodeURIComponent(formData.get("city"));
  redirect(`/${city}`);
}

export async function redirectLink(direction) {
  redirect(`/${direction}`);
}
