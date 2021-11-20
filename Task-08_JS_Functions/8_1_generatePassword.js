function generatePassword(min, max){
    function randInt(min, max) {
      return min + (Math.random() * (max - min)) | 0;
  }
  
  function getRandomValue(values) {
      let index = randInt(0, values.length);
      return values[index];
  }
  const numbers = '0123456789';
  const lettersLow = 'abcdefghijklmnopqrstuvwxyz';
  const lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  const strLength = randInt(6, 20 + 1);
  
  let str = ''
  for (let i = 0; i < 3; i++){
    let variant = randInt(i, 3);
    switch (variant) {
      case 0:
          str += getRandomValue(numbers);
          break;
      case 1:
          str += getRandomValue(lettersLow);
          break;
      case 2:
          str += getRandomValue(lettersUpper);
          break;
  }
  }
  //let str = getRandomValue(lettersLow)+ getRandomValue(numbers) + getRandomValue(lettersUpper);
  while (str.length < strLength) {
      let variant = randInt(1, 3);
      switch (variant) {
          case 1:
              str += getRandomValue(numbers);
              break;
          case 2:
              str += getRandomValue(lettersLow);
              break;
          case 3:
              str += getRandomValue(lettersUpper);
              break;
      }
  }
  
  return str;
  
  }
  
    console.log("Password generator: ")
    console.log(generatePassword())
    console.log(generatePassword())
    console.log(generatePassword())
    console.log(generatePassword())
    console.log(generatePassword())
    console.log(generatePassword())
    console.log(generatePassword())
    console.log(generatePassword())
    console.log(generatePassword())
    console.log(generatePassword())
    console.log("");