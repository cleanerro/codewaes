words = "is2 Thi1s T4est 3a"

function order(words){
   return words.split(' ').sort(function(a, b){return a.match(/\d/) - b.match(/\d/)}).join(' ')
}

order(words)



