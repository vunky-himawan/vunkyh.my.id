const useLoading = async (
  data: any,
  setter: Function,
  loader: Function,
  location: string
) => {
  if (typeof data === "string") {
    const promise = new Promise<string>((resolve, reject) => {
      const img = new Image();

      img.src = location + data;
      img.onload = () => resolve(img.src);
      img.onerror = reject;
    });

    const loadedImages = await Promise.resolve(promise);
    setter(loadedImages as string);
  } else if (typeof data === "object") {
    const promises = data.map((data: any) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.src = location + data;
        img.onload = () => resolve(img.src);
        img.onerror = reject;
      });
    });

    const loadedImages = await Promise.all(promises);
    setter(loadedImages as Array<string>);
  }

  loader(false);
};

export default useLoading;
