// Write String methods to the logger.
function printStringMethods() {
    var strMethods =
        Object.getOwnPropertyNames(
            String.prototype);
    Logger.log('String has ' +
        strMethods.length +
        ' properties.');
    Logger.log(strMethods.sort().join('\n'));
}

function google() {

}