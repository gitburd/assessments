function factorial(n){
    if (n===0){ return 1}
    return n * factorial(n-1);
  }
  
//   runtime: uhhh? 0(nlogn)

//   test:
//   factorial(-6)=> error: stack overflow 
//   factorial(3)=> 6
