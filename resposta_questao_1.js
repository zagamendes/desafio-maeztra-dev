const isOrdenaded = (number) => {
  if (number < 0) return console.log("somente números positivos");

  const arrayNumber = number
    .toString()
    .split("")
    .map((number) => parseInt(number));
  let isTrue = true;

  arrayNumber.forEach((element, i) => {
    if (isTrue && arrayNumber[i + 1]) {
      let next = arrayNumber[i + 1];
      let previous = i - 1 == -1 ? arrayNumber[0] : arrayNumber[i - 1];
      let current = element;
      let difference = Math.abs(current - next);

      if (difference <= 1) {
        if (previous < current && current >= next && previous == next) {
          isTrue = false;
        } else {
          isTrue = true;
        }
      } else {
        isTrue = false;
      }
    }
  });

  if (isTrue) console.log(`input ${number}-> Está ordenado`);
  else console.log(`input ${number}-> não Está ordenado`);
};

isOrdenaded(12345678);
isOrdenaded(1223455678);
isOrdenaded(876543210);
isOrdenaded(152456457);
isOrdenaded(12356789);
isOrdenaded(13579);
isOrdenaded(9765421);
isOrdenaded(123454321);
isOrdenaded(12222222);
isOrdenaded(2111111);
isOrdenaded(1599);
