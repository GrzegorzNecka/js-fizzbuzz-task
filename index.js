import fizzBuzz from './fizzBuzz';

const fizzBuzzExecute = fizzBuzz([[3, 'fizz'], [5, 'buzz']]);

for (let i = 1; i < 15; i++) {
  console.log(fizzBuzzExecute(i));
}
