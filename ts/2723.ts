type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  let num1 = await promise1.then((data) => {
    return data;
  });

  let num2 = await promise2.then((data2) => {
    return data2;
  });

  return num1 + num2;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
