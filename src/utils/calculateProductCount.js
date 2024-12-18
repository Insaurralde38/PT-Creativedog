export const calculateProductCount = (products, categoryId) => {
  return products.filter((product) =>
    product.categories.some((category) => category.id === categoryId)
  ).length;
};