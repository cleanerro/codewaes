function comes_after(str,l) {
   let result = ''
   for (let i =0 ; i < str.length-1; i++) {
      if(l.toLowerCase() === str[i].toLowerCase()) {
         result += str[i+1]
      }
   }
   return result.replace(/[^A-Za-z]/g, '')
}



