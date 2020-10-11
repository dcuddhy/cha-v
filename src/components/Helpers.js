
const firstCap = (string) => {
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); 
  }
  return string;
}

const titleCase = (string) => {
  if (string.length <= 2) {
    return string;
  }

  let newString = string.toLowerCase();
  let stringArray = [];

  if (newString.includes(',')) {
    stringArray = newString.toLowerCase().split(',');
    newString = firstCap(stringArray);
    newString = newString.join(',');
  } else {
    stringArray = newString.toLowerCase().split(' ');
    newString = firstCap(stringArray);
    newString = newString.join(' ');
  }

  return newString;
}

export const generateList = (data, key) => {
  const fullArray = data && data.length ? data.map((item) => titleCase(item[key]).split(',')).flat().sort() : [];

  return [...new Set(fullArray)];
}