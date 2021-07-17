const countCharacters = (character) => {
  return (str) => {
    let count = 0;
    str.split('').forEach((letter) => { if(letter === character) count++});
    return count;
  }
}
const countBs = countCharacters("B");
const countChar = (str, character) => countCharacters(character)(str);
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4