const makeDuck = require('./makeDuck');

const { fly, noFly, flyWithWings } = require('../behaviours/fly');
const { quack, noQuack } = require('../behaviours/quack');
const makeDisplay = require('../behaviours/makeDisplay');

const duck = makeDuck(fly, quack, makeDisplay());
const lameDuck = makeDuck(noFly, noQuack, makeDisplay('I look like a lame duck'));
const mallardDuck = makeDuck(flyWithWings, quack, makeDisplay('I look like a mallard duck'));
const rubberDuck = makeDuck(noFly, quack, makeDisplay('I look like a rubber duck'));

module.exports = { duck, lameDuck, mallardDuck, rubberDuck };
