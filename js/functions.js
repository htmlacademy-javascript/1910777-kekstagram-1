function checkPalindrome(word) {
  let string = word.toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[[string.length - 1 - i]]) {
      return false;
    }
  }
  return true;
}

function getNumber(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(Number(string[i])) && string[i] !== " ") {
      result == "" ? (result = string[i]) : (result = result + string[i]);
    }
  }
  return result.trim() || NaN;
}

function checkLength(word, length) {
  if (word.length <= length) {
    return true;
  } else {
    return false;
  }
}

function addCharToString(string, length, symbol) {
  let newString;
  let newSymbol;

  if (string.length >= length) {
    return string;
  }
  if (symbol.length > length) {
    newSymbol = symbol.slice(0, length - 1);
    for (let i = 1; i < length; i++) {
      newString = newSymbol + string;
    }
    return newString;
  }
  for (let i = 1; i < length; i++) {
    newString = symbol + (newString || string);
  }
  if (newString.length > length) {
    return newString.slice(newString.length - length);
  }
  return newString;
}


