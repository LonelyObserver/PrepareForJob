/**
游戏网站提供若干升级补丁，每个补丁大小不一，玩家要升级到最新版，如何选择下载哪些补丁下载量最小。
输入
第一行输入                        第一个数为用户版本  第二个数为最新版本，空格分开
接着输入N行补丁数据        第一个数补丁开始版本 第二个数为补丁结束版本 第三个数为补丁大小，空格分开
输出
对于每个测试实例，输出一个升级路径以及最后实际升级的大小

样例输入
1000 1050
1000 1020 50
1000 1030 70
1020 1030 15
1020 1040 30
1030 1050 40
1040 1050 20
样例输出
1000->1020->1040->1050(100)
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

    var start = arr[0].split(" ")[0];
    var end = arr[0].split(" ")[1];
    var res =[];
    var resNum=[];
    var len = arr.length;
    while(arr.length>1) {
        for (var i = 1; i < len; i++) {
            var num=0;
            var arr1 =[];
            input_array = arr[i].split(" ");
            if (input_array[0] == start && input_array[1] == end) {
                num += parseInt(input_array[2]);
                arr1.push(input_array[0]);
                arr1.push(input_array[1]);
                arr.splice(i, 1);
                res.push(arr1.join('->') + '(' + num + ')');
                resNum.push(num);
            }
            else if (input_array[0] == start) {
                start = input_array[1];
                num += parseInt(input_array[2]);
                arr1.push(input_array[0]);
                arr.splice(i, 1);
            }
        }
    }

    resNum.sort();
    var numstr = resNum[resNum.length-1].toString();
    for(var j=0;j<res.length;j++) {
        if(res[j].lastIndexOf(numstr)==res.length-2){
            console.log(res[j]);
        }
    }
});