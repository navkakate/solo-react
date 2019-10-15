export default async function fetchPhotos () {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const response = await fetch(url);
  return response.json();
}
