function transmute(startNumber){
    let seq = []
  
    while (startNumber > 0){
      seq.push(startNumber)
      console.log(seq)
  
      if (startNumber === 1){
        return seq;
      }
      if(startNumber % 2 === 0){
        console.log("?")
       startNumber = startNumber/2 
  
      }else{
        startNumber = startNumber* 3 + 1;
      }
    } 
    return `something went wrong`
  } 
  
//  run time 0(n) ? 

//   tests
//   transmute(10) => [10, 5, 16, 8, 4, 2, 1 ]
//   transmute(-10) => 'something went wrong'
//  transmute("m")=> 'something went wrong'
// transmute([10]) =>[ [ 10 ], 5, 16, 8, 4, 2, 1 ]
// transmute([10, 10]) => 'something went wrong'

