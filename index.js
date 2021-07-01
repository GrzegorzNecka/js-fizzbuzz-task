import fizzBuzz from './fizzBuzz';

const fizzBuzzExecute = fizzBuzz([[3, 'fizz'], [5, 'buzz']]);

// console.log('sprawdzenie', fizzBuzzExecute(3));

for (let i = 1; i < 9; i++) {
  console.log(fizzBuzzExecute(i));
}
