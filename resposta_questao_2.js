const duplicatedNumbers = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        newArray.push(array[i]);
        j = array.length;
      }
    }
  }
  console.log(newArray);
};
duplicatedNumbers([4, 5, 44, 98, 4, 5, 6, 7]);
