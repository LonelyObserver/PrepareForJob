/**
 * Created by joker on 16/9/1.
 */
function createFuncs() {
    var result = [];
    for(var i=0;i<10;i++) {
        result[i] = function() {
            return i;
        }
    }
    for(var j=0;j<result.length;j++) {
        console.log(result[j]());
    }
};

// createFuncs();

function createFuncs2() {
    var result = [];
    for(var i=0;i<10;i++) {
        result[i] = function(num) {
            return function () {
                return num;
            }
        }(i);
    }


    for(var j=0;j<result.length;j++) {
        console.log(result[j]());
    }
};

// createFuncs2();

function createFuncs3() {
    var result = [];
    for(var i=0;i<10;i++) {
        result[i] = function(num) {
            return num;
        }(i);
    }


    for(var j=0;j<result.length;j++) {
        console.log(result[j]);
    }
};

createFuncs3();