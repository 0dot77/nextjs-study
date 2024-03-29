import { URL } from "../app/(home)/page";
import potato from "../styles/movie-info.module.css";

async function getMovie(id: string) {
  const res = await fetch(`${URL}/${id}`);
  const json = await res.json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        className={potato.poster}
        alt={movie.title}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a
          href={movie.homepage}
          target={"_blank"}
        >
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
