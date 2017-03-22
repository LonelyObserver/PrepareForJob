/**
*题目描述：
随着全球文化的交融，英文逐渐融入到我们生活的方方面面，随处可见英文缩写的标志，因此小A就在考虑设计一个程序，可以将输入的英文单词转换为它们所对应的首字母大写，请你帮小A设计出该程序。
输入
要求每次输入的单词个数不超过10个，每个单词由一个或多个大写或者小写的字母组成，同时各个单词的长度不得超过10，每个单词之间用空格隔开。
输出
每组测试数据输出规定的缩写，每组输出各占一行。

样例输入
End of file
样例输出
EOF
 */

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var input = "";
var array = "";
process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
    var arr = input.split("\n");
    arr.pop();
    var res = [];
    for(var i=0; i<arr.length; i++) {
        array=arr[i].split(" ");
        var len = array.length;
        for (var j = 0; j < len; j++) {
            res.push(array[j].toUpperCase().substring(0, 1));
        }
    }
    console.log(res.join(''));
});


