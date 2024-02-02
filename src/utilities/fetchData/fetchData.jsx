export default async function FetchDate(Url) {
  return await fetch(Url).then((response) => {
    return response.json();
  });
}
