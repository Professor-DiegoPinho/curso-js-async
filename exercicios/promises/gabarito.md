## Exercício - Saindo dos callbacks para as Promises

```js
function readData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve(`Data from Id: ${id}`);
      } else {
        reject("Erro: Invalid Id");
      }
    }, 1000);
  });
}

function recordData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve("Data recorded sucessfully.");
      } else {
        reject("Error: Invalid data");
      }
    }, 1000);
  });
}

readData(1)
  .then((data) => {
    console.log(data);
    return recordData(data);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
```
