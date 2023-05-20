import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router-dom";
import { URL } from "../utils/Constants";
import { searchItem } from "../utils/Helper";

//const filterSearch( )=>{}
const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    swiggy_call();
  }, []);

  async function swiggy_call() {
    const data = await fetch(URL);
    const response = await data.json();
    setListOfRestaurants(response?.data?.cards[2]?.data?.data?.cards);
    setFilteredListOfRestaurants(response?.data?.cards[2]?.data?.data?.cards);
  }

  const reset = () => {
    setFilteredListOfRestaurants(listOfRestaurants);
  };

  const searchItem = (searchString) => {
    const searchValue = listOfRestaurants.filter((item) =>
      item.data.name.includes(searchString)
    );
    setFilteredListOfRestaurants(searchValue);
  };

  const filterSearch = (searchString) => {
    reset();
    searchItem(searchString);
  };
  return filteredListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="body-panel">
          <div className="search">
            <input
              type="text"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button
              className="search-btn"
              onClick={() => filterSearch(searchString)}
            >
              Search for Restaurant
            </button>
          </div>
          <div className="filter">
            <button
              className="filer-btn"
              onClick={() => {
                const filterValue = listOfRestaurants.filter(
                  (res) => res.data.avgRating > 4.3
                );
                setFilteredListOfRestaurants(filterValue);
              }}
            >
              Top Rated Restaurant
            </button>
          </div>
          <button className="reset" onClick={() => reset()}>
            Reset
          </button>
        </div>
        <div className="res-container">
          {filteredListOfRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BodyComponent;
