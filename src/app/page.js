import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <>
    {/*anime terpopuler */}
      <section>
      <header title="Paling Populer" linktitle="Lihat Semua" linkhref="/populer"/>
      <AnimeList api={topAnime}/>
      </section>
    </>
  )  
}

export default Home
