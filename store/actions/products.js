export const DELETE_PRODUCT = "DELETE PRODUCT";

export const deleteProduct = (productId) => {
  return { type: DELETE_PRODUCT, pid: productId };
};
