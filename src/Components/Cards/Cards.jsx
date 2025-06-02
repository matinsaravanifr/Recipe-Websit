import { Link } from "react-router-dom";
export default function Cards({ imageURL, categori, id, type }) {
  const linkPath =
    type === "category"
      ? `/category/${encodeURIComponent(categori)}`
      : `/food/${id}`;
  return (
    <Link to={linkPath}>
      <div className="w-[300px] h-[250px] flex flex-col items-center justify-center shadow-md rounded-2xl">
        <img
          className="w-full h-[140px]  object-cover rounded-md"
          src={imageURL}
          alt="categories"
        />
        <h1 className="text-center font-bold text-2xl mt-5  ">{categori}</h1>
      </div>
    </Link>
  );
}
