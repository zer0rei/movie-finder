// String to camel case
export const toUpperInitial = string => {
  if (typeof string !== "string") return string;
  return string[0].toUpperCase() + string.substr(1);
};
