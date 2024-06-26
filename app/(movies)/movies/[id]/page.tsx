import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// async function getMovie(id: string) {
//   console.log(`Fetching movie: ${Date.now()}`);
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const response = await fetch(`${API_URL}/${id}`);
//   return response.json();
// }

//async function getVideo(id: string) {
//  console.log(`Fetching movie: ${Date.now()}`);
//  await new Promise((resolve) => setTimeout(resolve, 5000));
//  const response = await fetch(`${API_URL}/${id}/videos`);
//  return response.json();
//}

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetail({ params: { id } }: IParams) {
  // 순차적으로 실행
  //const movie = await getMovie(id);
  //const videos = await getVideo(id);

  // 한번에 실행 그러나 둘다 끝나야 한다.
  //const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
  //return <h1>{movie.title}</h1>;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
