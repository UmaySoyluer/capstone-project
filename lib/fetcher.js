export default async function fetcher(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await response.json();
    error.message = response.statusText;
    throw error;
  }

  return response.json();
}
