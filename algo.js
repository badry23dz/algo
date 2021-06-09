let vowels = ["a", "e", "u", "o", "i", "y"];

let phrase = "Go My Code."

let numberOfChart = 0
let numberOfWords = 0
let numberOfVowels = 0
for (let i=0; i < phrase.length; i++){
    chart = phrase[i];
    if (chart === "."){
      break;
    }
      else{
        
          if(chart === " ")
            numberOfWords++
          if(vowels.includes(chart))
           numberOfVowels++
              
    }
}
console.log(numberOfChart)
console.log(numberOfWords+1)
console.log(numberOfVowels)