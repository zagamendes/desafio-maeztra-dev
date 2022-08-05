const options = (qtd) => {
  let total = 1;
  for (let i = 1; i <= qtd; i++) total *= i;
  console.log(total);
};
options(10);
