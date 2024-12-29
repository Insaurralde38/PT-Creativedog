import icons from "@/data/Icons";

const productsData = {
  title: {
    text: "Productos ",
    highlightedText: "destacados",
  },
  subtitle:
    "¡Descubre nuestros productos estrella! Encuentra lo mejor en tecnología y accesorios para simplificar tu vida.",
  sortOptions: [
    { label: "Menor precio", value: "price_asc" },
    { label: "Mayor precio", value: "price_desc" },
    { label: "A-Z", value: "az" },
    { label: "Z-A", value: "za" },
  ],
  sortButton: {
    label: "Ordenar por",
    icon: icons.options,
  },
  quickView: {
    label: "Vista rápida",
    icon: icons.eye,
  },
};

export default productsData;