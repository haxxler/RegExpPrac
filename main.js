
const str = `
010-9393-7061
haxxkim@gmail.com
https://www.omdbapi.com/?apikey=5e7c7a82&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
    str.match(/.{1,}(?=@)/g),  
    str.match(/(?<=@).{1,}/g)
)