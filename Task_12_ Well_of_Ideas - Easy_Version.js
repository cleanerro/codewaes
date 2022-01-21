function well(x){
   let goodIdea = 0
   for(let i=0; i<x.length; i++){
      if (x[i]==='good'){goodIdea+=1 }
   }
   return goodIdea === 0
       ? "Fail!"
       : goodIdea > 2
           ? "I smell a series!"
           : "Publish!";
}


