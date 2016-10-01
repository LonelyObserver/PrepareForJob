/**
 * Created by joker on 16/8/23.
 * 数组去重
 参与人数：727时间限制：3秒空间限制：32768K
 算法知识视频讲解
 题目描述

 为 Array 对象添加一个去除重复项的方法
 输入例子:
 [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq()

 输出例子:
 [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
 */


Array.prototype.uniq = function () {
    var flag = false;
    var result = [];
    for(var i=0;i<this.length;i++) {
        if(result.indexOf(this[i]) == -1) {
            if(this[i]==this[i]) {
                result.push(this[i]);
            }
            else if(!flag) {
                result.push(this[i]);
                flag = true;
            }
        }
    }
    return result;
}

console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq());