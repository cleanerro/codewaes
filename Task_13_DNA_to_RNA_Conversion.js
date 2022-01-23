function DNAtoRNA(dna) {
   return dna.split('').map(l=> l==="T"? "U" : l).join('')
}


