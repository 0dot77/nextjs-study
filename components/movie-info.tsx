import { URL } from "../app/(home)/page";

async function getMovie(id: string) {
  const res = await fetch(`${URL}/${id}`);
  const json = await res.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
