function MostCommonStr(array){
    let count = {};
    for (i=0; i<array.length; i++){
      if (count[array[i]]){
        count[array[i]]+=1
      }else{
      (count[array[i]]=1);
      }
    }
  
  let countsArray = (Object.values(count));
  let elements = (Object.keys(count));
  
  let mostCount = 0 ;
  let resultElement;
  
  for (i=0; i<countsArray.length; i++){
    if(countsArray[i]>mostCount){
      mostCount = countsArray[i];
      resultElement = elements[i];
    }
   
  }
  return resultElement
  }

//   runtime 0(n)

//   tests:
//   MostCommonStr(["dog","cat","dog","cat","cat","panda"]) => cat 

//   MostCommonStr([])=> ''

//   MostCommonStr([[4,5,6],"fff",3,[4,5,6]]) => '4,5,6' ??? this is the wrong data type, the way to handle it would be based on more information

