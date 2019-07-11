const { duck, lameDuck, mallardDuck, rubberDuck } = require('./ducks');

(() => {
  duck
    .float()
    .quack()
    .fly()
    .display();

  console.log('---');

  mallardDuck
    .float()
    .quack()
    .fly()
    .display();

  console.log('---');

  rubberDuck
    .float()
    .quack()
    .fly()
    .display();

  console.log('---');

  lameDuck
    .float()
    .quack()
    .fly()
    .display();
})();
