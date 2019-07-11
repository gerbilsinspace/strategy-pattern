function quack(noise = 'I quack like a duck') {
    console.log(noise);
    return this;
}

function noQuack() {
    console.log('I cannot quack');
    return this;
}

module.exports = { quack, noQuack };