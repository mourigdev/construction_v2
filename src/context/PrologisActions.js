export const SearchProperties = (text, data) => {
  const newData = data.filter(
    (ele) =>
      String(ele.city.trim().toUpperCase()) ===
      String(text.trim().toUpperCase())
  );

  return newData;
};

export const FilterProperty = (type, data) => {
  const newData = data.filter(
    (ele) =>
      type === "All" ||
      String(ele.type.trim().toUpperCase()) ===
        String(type.trim().toUpperCase())
  );

  return { filter: type, newData: newData };
};

export const FilterPrice = (price, data) => {
  const minPrice = +price.min;
  const maxPrice = +price.max;

  const newData = data.filter(
    (item) => item.price > minPrice && item.price < maxPrice
  );

  return newData;
};

export const FilterSize = (size, data) => {
  const minSize = +size.min;
  const maxSize = +size.max;

  const newData = data.filter(
    (item) => item.size > minSize && item.size < maxSize
  );

  return newData;
};

export const FilterBrand = (brand, data) => {
  const newData = data.filter((d) => d.brand === brand);

  return newData;
};
