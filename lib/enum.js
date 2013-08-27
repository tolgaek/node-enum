module.exports = function(values) {
    var enumVar = {
        all : []
    };

    for ( var i = 1; i < values.length; i++) {
        enumVar[values[i]] = i;
        enumVar.all.push(i);
    }
    return enumVar;
};
