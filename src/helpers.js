export const parseQueryString = (queryString) => {
  let queryObject = {};

  if (queryString) {
    queryString
      .replace(/^[^?=]*\?/, "")
      .split("&")
      .forEach(function (param) {
        var parts = param.split("=").map(function (part) {
          return decodeURIComponent(part.replace(/\+/g, " "));
        });
        queryObject[parts[0]] = parts[1];
      });
  }

  return queryObject;
};
