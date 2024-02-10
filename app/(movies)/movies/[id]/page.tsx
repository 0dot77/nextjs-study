import { Suspense } from "react";
import { URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

async function getMovie(id: string) {
  const res = await fetch(`${URL}/${id}`);
  const json = await res.json();
  return json;
}

async function getVideos(id: string) {
  const res = await fetch(`${URL}/${id}/videos`);
  const json = await res.json();
  return json;
}

export default async function MovieDetails({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
