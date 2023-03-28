
export const DownloadAfileByUrl = async (urlquery) => {
    try {
        fetch(urlquery)
        .then((res) => res.blob())
        .then((blob) => {
          var file = window.URL.createObjectURL(blob);
          window.location.assign(file);
        });
    } catch (error) {
        return error;
    }
  };