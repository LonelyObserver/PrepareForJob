/**
 * bind 方法模拟
 绑定this， 科里化

 例子：
 function foo() {
	this.b = 100;
	return this.a;
}

 var func = foo.bind({a : 1});

 func(); //1
 new func(); //{b : 100}
 */

//简单模拟绑定
if(!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            throw Error('Not callable');
        }

        var fToBind = this,
            fBound = function() {
                return fToBind.apply(oThis);
            };
        fBound.prototype = Object.create(this.prototype);

        return fBound;
    }
}

//深度模拟绑定(包括new之后bind无效,科里化)
if(!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            throw Error('Not callable');
        }

        var fToBind = this,
            aArgs = Array.prototype.slice.call(arguments, 1),
            fNOP = function(){},
            fBound = function() {
                //new func()之后的this指向构造出来的空对象,protype属性指向func
                // 所以this是function的实例
                return fToBind.apply(this instanceof fNOP ? this : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
            };
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    }
}