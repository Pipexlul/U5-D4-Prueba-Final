export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0; // Will probably not work for objects that are not raw objects
};
