export function sortFormattedForDropdown(sortFilters) {
  return sortFilters.map(sort => {
    return {
      value: sort.id,
      text: sort.firstName + ' ' + sort.lastName
    };
  });
}
