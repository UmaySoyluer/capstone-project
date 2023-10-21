export default async function fetcher(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const error = new Error("An error occurred while fetching the data.");

      error.info = await response.json();
      error.message = response.statusText;
      throw error;
    }

    return response.json();
  } catch (err) {
    console.error(`Failed to fetch: ${err}`);
    console.error(err.stack);
    throw err;
  }
}
