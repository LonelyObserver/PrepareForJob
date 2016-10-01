/**
*
题目描述：
现在有一棵合法的二叉树，树的节点都是用数字表示，现在给定这棵树上所有的父子关系，求这棵树的高度
输入
输入的第一行表示节点的个数n（1<=n<=1000，节点的编号为0到n-1）组成，
下面是n-1行，每行有两个整数，第一个数表示父节点的编号，第二个数表示子节点的编号
输出
输出树的高度，为一个整数

样例输入
5
0 1
0 2
1 3
1 4
样例输出
3
 */

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
var input_array = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    var arr = input.split("\n");
    arr.pop();

    var res=[arr[1].split(' ')];

    for (var i=2; i<arr.length; i++) {
        input_array=arr[i].split(" ");
        for(var k=0;k<res.length;k++){
            if(input_array[0]==res[k][res[k].length-1]){
                res[k].push(input_array[1]);
            }
        }
    }

    var max=0;
    for(var j=0;j<res.length;j++) {
        if(res[j].length>max){
            max=res[j].length;
        }
    }
    console.log(max);

});







