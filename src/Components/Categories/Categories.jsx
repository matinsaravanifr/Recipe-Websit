import { useEffect, useState } from "react";
import { apicall } from "./../../API/API";
import Cards from "../Cards/Cards";
import Spinner from "../Spinner/Spinner";

export default function Categories() {
  const [Categories, setcategories] = useState([]);
  const [isloding, setisloding] = useState(true);
  useEffect(() => {
    apicall
      .get("categories.php")
      .then((result) => {
        console.log(result.data);

        setcategories(result.data.categories);
        setisloding(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return isloding ? (
    <Spinner />
  ) : (
    <div className="w-[90%] mx-auto mt-10 mb-10">
      <h1 className="font-bold text-2xl underline text-center mb-10">
        Categories
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2.5 gap-y-3.5 justify-items-center">
        {Categories.map((e) => (
          <Cards
            key={e.idCategory}
            imageURL={e.strCategoryThumb}
            categori={e.strCategory}
            id={e.idCategory}
            type={'category'}
          />
        ))}
      </div>
    </div>
  );
}
