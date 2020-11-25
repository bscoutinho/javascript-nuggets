const person = ['hello', 'great'];

const testPerson = person.map(function (item) {
  console.log(item);
});

const newPerson = person.map(function (item) {
  if (item === 'hello') {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);

/* --- */

//dot notation
const person2 = {
  name: 'John'
}

console.log(person2.name)

person.age = 25

console.log(person)

//square bracket notation
const items = {
  'featured-items':['item1', 'item2']
}

console.log(items['featured-items'])

let appState = 'loading'
const keyName = 'computer'

const app = {
  [appState]: true
}
app[keyName] = 'apple'

console.log(app)

const state = {
  loading: true,
  name: '',
  job: ''
}

function updateState(key, value) {
  state[key] = value
}

updateState('name', 'john')
updateState('job', 'developer')
updateState('loading', false)

console.log(state)