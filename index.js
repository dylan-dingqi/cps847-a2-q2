
function absolute(number) {
    if (number >= 0) {
        return number;
    }
    else {
        return -number;
    }
}

module.exports = {
    absolute: absolute
}