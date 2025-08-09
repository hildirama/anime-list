import Image from "next/image";

const AnimeList = ({title, images}) => {
  return (
    <div className="">
      <Image src={images} alt="..." width={400} height={300} />
      <h3>{title}</h3>
    </div>
  )
}
export default AnimeList
