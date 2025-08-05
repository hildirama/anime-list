import AnimeList from "@/app/components/listAnime";

const home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime}`
  );
  const anime = await response.json();
  console.log(anime);

  return (
    <div>
      <h1>MOST POPULAR</h1>
      <AnimeList />
    </div>
  );
};

export default home;
