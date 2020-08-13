const albums = Array.from({ length: 5 }).map((_, index) => ({
  id: index,
  name: `Album ${index}`,
  description: `Some description of album`,
  date: `202${Math.floor(index / 3)}-0${index + 1}-23`,
  location: "Saint-Petersburg",
  model: "Katya",
}));

export { albums };
