const API_URL = "http://localhost:8000";

export async function getCollections() {
  const res = await fetch(`${API_URL}/collections`);

  if (!res.ok) throw Error("Failed getting collections");

  const data = await res.json();

  return data;
}
