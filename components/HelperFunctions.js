export const generateRandomMemory = (items) => {
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
};
