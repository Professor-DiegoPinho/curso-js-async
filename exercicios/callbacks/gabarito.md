## Exercício - Hora de acordar

```js
function alarm(label, time) {
  setTimeout(() => {
    console.log(label);
  }, time);
}
```

## Exercício - Função soneca tem limite

```js
const SNOOZE_TIMES_LIMIT = 5;
let alarmTimes = 0;
let snoozeInterval = null;

function alarm(label, time, snoozeTime) {
  setTimeout(() => {
    console.log(label);
    snoozeInterval = setInterval(() => {
      if (alarmTimes === SNOOZE_TIMES_LIMIT) {
        clearInterval(snoozeInterval);
      } else {
        alarmTimes++;
        console.log(`SNOOZE ${alarmTimes}`);
      }
    }, snoozeTime);
  }, time);
}

alarm("Acorda!", 1000, 500);
```

## Exercício - Sequência de alarmes

```js
function alarmSequence(alarms) {
  let accumulatedTime = 0;

  alarms.forEach(({ label, time }) => {
    accumulatedTime += time;
    setTimeout(() => {
      console.log(label);
      if (
        accumulatedTime === alarms.reduce((acc, alarm) => acc + alarm.time, 0)
      ) {
        console.log("Todos os alarmes foram disparados!");
      }
    }, accumulatedTime);
  });
}
```
