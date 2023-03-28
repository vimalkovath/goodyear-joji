export const fetchUrl = async (url, options) => {
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      return json;
    } catch (error) {
        return error;
    }
  };