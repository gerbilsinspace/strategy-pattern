const makeDisplay = (description = 'I look like a duck') => () => {
    console.log(description);
    return this;
}

module.exports = makeDisplay;