function noop() { return this; }

const makeDuck = (
  fly = noop,
  quack = noop,
  display = noop
) => ({
  fly,
  quack,
  display,
  float: function () {
    console.log('I float like a duck');
    return this;
  },
});

module.exports = makeDuck;