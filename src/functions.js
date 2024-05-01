// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return x / y
}
let div = divide(10, 2)

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2
}
let aver = average(10 + 2 / 2)

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true

function approximatelyEqual(x, y) {
  let absolute = Math.abs(x - y)
  if (absolute < 0.001) {
    return true 
  } else {
    return false
  }
}
let aprox = approximatelyEqual(10.001, 10)


// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName
}
let result = fullName('John', 'Doe')

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
   return person + 'was drinking' + beverage + 'at' + location + '.'
}
let generate = generateSentence('kay', 'was drinking', 'coffee', 'at', 'the local cafe')


// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'

const censorVowels = 'javascript'
const censorVowelsArray = [...censorVowels]

let replacedEveryOther = ''
censorVowelsArray.foreach((letter, idx) => {
  if (idx % 2 === 0) {
    replacedEveryOther += letter
  } else {
    replacedEveryOther += '*'
  }
}



// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'

function stickyCase(string) {
  let result = ''
  for (let i = 0; i < string.length; i += 1){
    if (i % 2 === 0) {
      result += string[i].tolowerCase()
    } else {
      result += string[i].toUpperCase()
    }
   }
  return result
}


// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'

function leetspeak(string) {
  const leetspeakMap = {
    'a': '4',
    'e': '3',
    'i': '1',
    'o': '0',
    's': '5',
    't': '7'
  }
    
let leetspeakString = ''
  for (let i = 0; i < string.length; i++) {
    if (leetspeakMap.hasOwnProperty(char.toLowerCase())) {
      leetspeakString += leetspeakMap[char.toLowerCase()]
    } else {
      leetspeakString += char
    }
  }
   return leetspeakString


  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
