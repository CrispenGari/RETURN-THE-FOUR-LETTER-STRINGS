
RETURN THE FOUR LETTER STRINGS
Write a function that takes  an array of string and returns the words that
are exactly four letters.
isFourLetters(["Tomato", "Potato", "Pair"])=> Pair
isFourLetters(["Helo", "World", "give","me", "freedom"])=>Helo give
*/


const isFourLetters=(arr)=>{
    var arr_four_letters =[]
    arr.map((element)=>{
        if(element.length==4){
            arr_four_letters.push(element)
        }
    })
    return arr_four_letters;
}

console.log(isFourLetters(["Helo", "World", "give","me", "freedom"]))