import Image from "next/image";

const AnimeList = ({ title, images }) => {
  return (
    <div className="bg-sky-500">
      <Image src={images} alt="..." width={600} height={600} />
      <h3>{title}</h3>
    </div>
  );
};
export default AnimeList;
