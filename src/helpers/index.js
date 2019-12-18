const capitalize = (targetString) => {
  if (!targetString || typeof targetString !== 'string') return targetString;
  return targetString.charAt(0).toUpperCase() + targetString.slice(1).toLowerCase();
};
export default capitalize;
