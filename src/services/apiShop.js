import { formatTitle } from "../utils/helpers";

const API_URL = "http://localhost:8000";

export async function getAllCollections() {
  const res = await fetch(`${API_URL}/collections`);

  if (!res.ok) throw Error("Failed getting collections");

  const data = await res.json();

  return data;
}

export async function getProducts(query) {
  const res = await fetch(
    `${API_URL}/products?q=${query === "shop-all" ? "" : formatTitle(query)}`,
  );

  if (!res.ok) throw Error("Failed getting products");

  const data = await res.json();

  return data;
}

export async function getFavoritesList(query) {
  const res = await fetch(`${API_URL}/products?${query}`);

  if (!res.ok) throw Error("Failed getting favorites");

  const data = await res.json();

  return data;
}

export async function getFAQs() {
  const res = await fetch(`${API_URL}/faqs`);

  if (!res.ok) throw Error("Failed getting favorites");

  const data = await res.json();

  return data;
}
