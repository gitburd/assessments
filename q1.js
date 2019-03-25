function isTargetInRange(target, min, max){
   return (target>=min && target<=max)? true:false;
}

// runtime 0(1)

// test for inclusion 
// isTargetInRange(11,5,70)=>true
// isTargetInRange(11.4,11,70) =>true 

// test for inclusion 
// isTargetInRange(11,11,70)=>true 


// test for false 
// isTargetInRange(5,11,70)=>false 
// isTargetInRange(11,11.4,70)=>false

// test for input type
// isTargetInRange("m",11,70)=> false 
// isTargetInRange([0,20],11,70)=>false

