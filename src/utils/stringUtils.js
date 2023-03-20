export const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const injectStyle = (requiredStyles) => {
  return (customStyles) => {
    if (customStyles) {
      return `${requiredStyles} ${customStyles}`;
    } else {
      return requiredStyles;
    }
  };
};
