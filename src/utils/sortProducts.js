export const sortProducts = (products, sortOption) => {
  let sortedArray = [...products];
  switch (sortOption) {
    case "price_asc":
      sortedArray.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      sortedArray.sort((a, b) => b.price - a.price);
      break;
    case "az":
      sortedArray.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "za":
      sortedArray.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      break;
  }
  return sortedArray;
};