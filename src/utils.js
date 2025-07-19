export const getImageUrl = (path) => {
  
  
  const photo = new URL(`/src/assets/${path}`, import.meta.url).href;
  console.log(photo)
  return photo 
};




