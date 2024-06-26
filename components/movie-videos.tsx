import { API_URL } from "../app/(home)/page";

async function getVideo(id: string) {
  //console.log(`Fetching movie: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  //throw new Error("something broken..");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
