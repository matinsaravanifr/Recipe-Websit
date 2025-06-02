import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apicall } from "../../API/API";
import Cards from "../Cards/Cards";
import BackNav from "../BackNav/BackNav";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
export default function Foods() {
  const { categoryName } = useParams();
  const [food, setfood] = useState([]);
  const [isloding, setisloding] = useState(true);

  useEffect(() => {
    apicall
      .get(`filter.php?c=${categoryName}`)
      .then((result) => {
        setfood(result.data.meals);
        console.log(result.data.meals);
        
        setisloding(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return isloding ? (
    <Spinner />
  ) : (
    <>
      <BackNav />
      <div className="w-full mt-10 mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center px-4">
        {food.map((item) => (
          <Link to={`/food/${item.idMeal}`} key={item.idMeal}>
          <Cards
            key={item.idMeal}
            imageURL={item.strMealThumb}
            categori={item.strMeal}
            id={item.idMeal}
            type={'food'}
            />
            </Link>
        ))}
      </div>
    </>
  );
}
