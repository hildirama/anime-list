import AnimeList from "@/app/components/listAnime";

const home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime}`
  );
  const anime = await response.json();

  return (
    <div>
      <h1>MOST POPULAR</h1>
      {anime.data.map((data) => {
        return (
          <AnimeList title={data.title} images={data.images.webp.image_url} />
        );
      })}
    </div>
  );
};

export default home;
