const people = [
   {
     name: 'bob',
     location: { 
       street: '123 main street',
       timezone: { 
          offset: '+7:00'
        }
     }
   },
   {
     name: 'peter',
     location: {
      street: '123 Pine street'
     }
   },
   {
    name: 'susan',
    location: { 
      street: '123 Apple street',
      timezone: { 
         offset: '+9:00'
       }
    }
  },
]


people.forEach((person) => {

  // Wrong approach - It will generate an error
  console.log(person.location.timezone.offset)

  // Good approach - It works, but too much code.
  console.log(person.location && person.location.timezone && person.location.timezone.offset)

  // Best approach - It works, shorthand code.
  console.log(person?.location?.timezone?.offset)

  // Best approach with else condition
  console.log(person?.location?.timezone?.offset || 'Default value')
})