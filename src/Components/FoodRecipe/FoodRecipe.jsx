import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { apicall } from "../../API/API";
import BackNav from "../BackNav/BackNav";

export default function FoodDetail() {
  const { idMeal } = useParams();
  const [foodDetail, setFoodDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apicall
      .get(`lookup.php?i=${idMeal}`)
      .then((res) => {
        setFoodDetail(res.data.meals[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [idMeal]);

  if (loading) return <Spinner />;
  if (!foodDetail)
    return <p className="text-center mt-10">اطلاعات غذا یافت نشد.</p>;


  const ingredientsList = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = foodDetail[`strIngredient${i}`];
    const measure = foodDetail[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientsList.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  return (
    <>
    <BackNav/>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {foodDetail.strMeal}
        </h1>

        <img
          src={foodDetail.strMealThumb}
          alt={foodDetail.strMeal}
          className="w-full rounded-md mb-6 object-cover max-h-96 mx-auto"
        />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Necessary materials: </h2>
          <ul className="list-disc list-inside space-y-1">
            {ingredientsList.map(({ ingredient, measure }, idx) => (
              <li key={idx}>
                {ingredient} {measure && `- ${measure}`}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">recipe:</h2>
          <p className="whitespace-pre-line">{foodDetail.strInstructions}</p>
        </section>
      </div>
    </>
  );
}
