import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/Constants";
import Shimmer from "../utils/Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0314279&lng=80.190809&restaurantId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json);
    console.log(json);
  }
  if (restaurant != null) {
    console.log(restaurant?.data?.cards[0]?.card?.info);
  }
  return restaurant == null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h1>{restaurant.data.cards[0].card.card.info.name}</h1>
        <h1>{restaurant.data.cards[0].card.card.info.city}</h1>
        <h1>{restaurant.data.cards[0].card.card.info.costForTwoMessage}</h1>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            restaurant.data.cards[0].card.card.info?.cloudinaryImageId
          }
        />
        {/* {restaurant.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards.map(
          (e) => {
            e.card.info.name;
          }
        )} */}
      </div>
    </>
  );
};

export default RestaurantMenu;
