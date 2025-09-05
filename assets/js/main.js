const numbers = [65, 44, 32, 4];
numbers.forEach((item, index, arr) => {
  let text = `  item = ${item}

  index = ${index}

  array = ${arr}`;
  console.log(text);
});
