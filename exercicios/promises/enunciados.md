# Exercícios

Nestes exercícios iremos praticar o uso de `Promises`.

## Exercício - Saindo dos callbacks para as Promises

Você está trabalhando em uma aplicação que realiza operações simuladas de leitura e gravação de dados em um banco de dados. Atualmente, o código usa callbacks para lidar com as operações assíncronas, mas isso está dificultando a manutenção e legibilidade do código. Sua tarefa é converter o código baseado em callbacks para utilizar Promises.

```js
function readData(id, callback) {
  setTimeout(() => {
    if (id) {
      callback(null, `Data from Id: ${id}`);
    } else {
      callback("Error: Invalid Id", null);
    }
  }, 1000);
}

function recordData(data, callback) {
  setTimeout(() => {
    if (data) {
      callback(null, "Data recorded sucessfully.");
    } else {
      callback("Error: Invalid data", null);
    }
  }, 1000);
}

readData(1, (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
    recordData(data, (error, message) => {
      if (error) {
        console.error(error);
      } else {
        console.log(message);
      }
    });
  }
});
```

**Tarefa**

1. Reescreva as funções lerDados e gravarDados para retornarem Promises em vez de usarem callbacks.
2. Reescreva o código de uso (a sequência de leitura e gravação) para usar as novas funções baseadas em Promises.

**Requisitos**

- Utilize o método Promise para encapsular a lógica das funções.
- A sequência de operações deve ser feita utilizando .then e .catch.
- Certifique-se de lidar corretamente com os erros.
