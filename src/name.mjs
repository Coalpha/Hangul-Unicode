export default ((obj) => {
  Object.keys(obj).forEach((key) => {
    obj[key].displayName = key;
  });
});
