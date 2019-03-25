let people = [
    {
        firstName: "Jax",
        lastName:"Jax"
    },
    {
        firstName: "The Doctor",
        lastName:""
    },
    {
        firstName: "River",
        lastName:"Song"
    },
    {
        firstName: ["Alice"],
        lastName:["Alice"]
    }
]

// => [ 
//   { firstName: 'Jax!', lastName: 'same' },
//   { firstName: 'The Doctor', lastName: '' },
//   { firstName: 'River', lastName: 'Song' },
//   { firstName: [ 'Alice' ], lastName: [ 'Alice' ] } 
//   ]


let people2 = [
    {
        firstName: "Lara",
        lastName:"Croft"
    },
    {
        firstName: 2,
        lastName:2
    },
    {
        firstName: {alias:'Banksy'},
        lastName: {alias:'Banksy'}
    },
    {
        firstName: true,
        lastName:true
    }
]
// => [ { firstName: 'Lara', lastName: 'Croft' },
//   { firstName: '2!', lastName: 'same' },
//   { firstName: { alias: 'Banksy' },
//     lastName: { alias: 'Banksy' } },
//   { firstName: 'true!', lastName: 'same' } ]
   

function nameCheck (array){
    for (i=0; i < array.length; i++){
      if(array[i].firstName === array[i].lastName ){
        array[i].firstName = array[i].firstName+"!"
        array[i].lastName = 'same'
      }
    }
    return array
}

nameCheck(people2)


// time complexity 0(n)
// tests are the ppl arrays i made 


