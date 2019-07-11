function fly() {
    console.log('I fly like a duck');
    return this;
}

function flyWithWings() {
    console.log('I fly with wings like a duck');
    return this;
}

function noFly() {
    console.log('I cannot fly');
    return this;
}

module.exports = { fly, noFly, flyWithWings };