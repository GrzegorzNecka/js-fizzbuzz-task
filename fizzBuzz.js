export default function fizzBuzz(fizzBuzzArgs) {
  console.log(fizzBuzzArgs);

  return function(i) {
    let result = '';

    fizzBuzzArgs.forEach(([num, name]) => {
      const fizzBuzzCondition = i % num;

      if (!fizzBuzzCondition) {
        result += i;
        return;
      }

      result += name;
    });

    return result;
  };
}
