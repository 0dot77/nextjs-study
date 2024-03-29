import { URL } from "../app/(home)/page";
import styles from "../styles/movie-video.module.css";

async function getVideos(id: string) {
  const res = await fetch(`${URL}/${id}/videos`);
  const json = await res.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
        />
      ))}
    </div>
  );
}
