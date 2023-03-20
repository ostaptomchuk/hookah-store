import axiosClient from "./axiosClient";

export const getProductsByCategory = ({ category, brand, puffsCount, packSize }) => {
  return axiosClient.get(
    `/products/${category ? category : ""}${brand ? `/${brand}` : ""}${
      puffsCount ? `/${puffsCount}` : ""}${packSize ? packSize : ""}`
  );
};

export const getProductsByID = (id) => {
  return axiosClient.get(`/product/${id ? id : ''}`);
};
