const str = "########";
str.split("").reduce((arr) => {console.log(arr); return arr + "#";}); 