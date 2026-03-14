function isArmstrong(number) {
  let temp = number;
  let check = number;
  let count = 0;
  let result = 0;

  // count digits
  while (number > 0) {
    number = Math.floor(number / 10);
    count++;
  }

  while (temp > 0) {
    let lastDigit = temp % 10;
    let mul = 1;

    for (let i = 0; i < count; i++) {
      mul *= lastDigit;
    }

    result += mul;
    temp = Math.floor(temp / 10);
  }

  return result === check;
};

export default isArmstrong;