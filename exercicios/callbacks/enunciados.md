# Exercícios

Nestes exercícios iremos praticar o uso de `callbacks`.

## Exercício - Hora de acordar

Você está criando um sistema básico de alarmes para uma aplicação de produtividade. Este alarme tem a funcionalidade de exibir uma mensagem (o label) após um tempo específico definido pelo usuário.

**Requisitos**

Implemente uma função chamada `alarm`, que deve:

Receber dois parâmetros:

- `label`: uma string que será exibida quando o alarme disparar.
- `time`: o tempo (em milissegundos) após o qual o alarme deve disparar.
- Exibir a mensagem no console após o tempo especificado.

**Exemplo de uso**

```js
alarm("Hora de estudar!", 2000);

// após 2 segundos
// Hora de estudar!
```

## Exercício - Função soneca tem limite

Você foi contratado para criar um sistema de despertador inteligente para uma aplicação de organização pessoal.

Este despertador deve funcionar da seguinte maneira:

- Após um tempo inicial especificado, o despertador dispara uma mensagem (o label) indicando que é hora de acordar.
- Após o disparo inicial, ele entra em modo "soneca", disparando mensagens de SNOOZE em intervalos regulares (definidos pelo usuário).
- O modo "soneca" deve parar automaticamente após atingir um limite de tentativas (também definido pelo sistema).

**Requisitos**

Implemente uma função chamada `alarm`, que deve:

Receber três parâmetros:

- label: uma string que será exibida quando o alarme disparar.
- time: o tempo inicial (em milissegundos) após o qual o alarme dispara pela primeira vez.
- snoozeTime: o intervalo de tempo (em milissegundos) entre as mensagens de "soneca" (SNOOZE).
- Limitar as tentativas de "soneca" a um número máximo fixo de 5 vezes.
- Garantir que ao atingir o limite de "sonecas", o alarme seja desligado.

**Exemplo de uso**

```js
alarm("Acorda!", 1000, 500);

// após 1 segundo
// Acorda!

// a cada 500 ms
// SNOOZE 1
// SNOOZE 2
// SNOOZE 3
// SNOOZE 4
// SNOOZE 5
```

## Exercício: Sequência de Alarmes

Você está desenvolvendo um sistema de alarmes que precisa disparar mensagens em ordem, uma após a outra. Diferente do alarme simples, cada mensagem (o label) só deve ser exibida após um tempo específico definido pelo usuário e, assim que disparada, o próximo alarme deve começar.

**Requisitos**

Implemente uma função chamada `alarmSequence`, que deve:

Receber um array de objetos, onde cada objeto contém:

- `label`: uma string com a mensagem do alarme.
- `time`: o tempo (em milissegundos) após o qual o alarme deve disparar.
- Garantir que os alarmes sejam disparados em ordem, respeitando o tempo especificado.
- Ao final, adicione uma mensagem "Todos os alarmes foram disparados".

**Exemplo de uso**

```js
alarmSequence([
  { label: "Acorde!", time: 1000 },
  { label: "Hora de se exercitar!", time: 2000 },
  { label: "Hora do almoço!", time: 1500 },
]);

// após 1 segundo
// Acorde!
// 2 segundos depois (total de 3 segundos)
// Hora de se exercitar!
// 1,5 segundos depois
// Hora do almoço
```
