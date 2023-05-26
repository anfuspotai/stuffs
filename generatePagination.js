function generatePagination(page, itemsPerPage, paginationArrayLength, totalItems) {
  // Calculate the total number of pages based on the total number of items and items per page
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Ensure the current page is not less than 1
  const currentPage = Math.max(1, page);

  // Calculate the number of elements before and after the current page
  const halfArrayLength = Math.floor(paginationArrayLength / 2);

  let startNumber;

  // Determine the starting number based on the current page and its proximity to the first or last page
  if (currentPage <= halfArrayLength + 1) {
    startNumber = 1;
  } else if (currentPage >= totalPages - halfArrayLength) {
    startNumber = Math.max(totalPages - paginationArrayLength + 1, 1);
  } else {
    startNumber = currentPage - halfArrayLength;
  }

  // Calculate the ending number based on the starting number and the desired array length
  const endNumber = Math.min(startNumber + paginationArrayLength - 1, totalPages);

  // Generate the pagination array
  const paginationArray = [];
  for (let i = startNumber; i <= endNumber; i++) {
    paginationArray.push(i);
  }

  return paginationArray;
}
