const awesomeFunction = (req, res, next) => {
    res.json('Julie Da Silva');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awesome person');
};

module.exports = { awesomeFunction, returnAnotherPerson };
