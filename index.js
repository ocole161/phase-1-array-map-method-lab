const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// function properCase(array) {
//   lowerArray = array.map(string => {string.toLowerCase()})
//   const properArray = []
//   for (const string of lowerArray) {
//     const stringSplit = string.split(" ")
//       for (let i = 0; i < stringSplit.length; i++) {
//         stringSplit[i] = stringSplit[i][0].toUpperCase() + stringSplit[i].slice(1)
//         properString = stringSplit.join("")
//         properArray.push(properString)
//       }
//   }
//   console.log(properArray)
//   return properArray
// }

// properCase(tutorials)

const titleCased = () => {
  return tutorials.map(function(string) {
    const words = string.split(" ")
    const capWords = words.map(function(words) {
      return words.charAt(0).toUpperCase() + words.slice(1)
    }
    )
    const properString = capWords.join(" ")
    return properString
  })
}

console.log(titleCased())
