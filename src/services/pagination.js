export const handleProductPagination = (pageNumber, router) => {
  router.push({
    pathname: `/products/page/${pageNumber.selected + 1}`,
  });
};

export default {
  handleProductPagination,
};
