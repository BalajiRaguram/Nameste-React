export const searchItem = (searchString) => {
  const searchValue = listOfRestaurants.filter((item) =>
    item.data.name.includes(searchString)
  );
  setFilteredListOfRestaurants(searchValue);
};
