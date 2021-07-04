size = 20;
for (i = 0; i < size; i++){
  let str = "";
  for (j = 0; j < size; j++){
    if (i % 2 === 0 && j % 2 !== 0) str = str + " ";
    else if (i % 2 !== 0 && j % 2 === 0) str = str + " ";
    else str = str + "#";
  }
  console.log(str);
}