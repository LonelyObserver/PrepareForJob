/**
* 题目描述：
某城市准备举行50公里长跑比赛，组委会提前在城市中规划好了一条25公里的环形跑道，那么要想完成比赛每位选手都将跑完2圈的跑道。
 现在有n位运动员参加比赛，为了能分析运动员第一圈和第二圈的情况，组委会只记录了每位运动员单圈的成绩h1:m1:s1和h2:m2:s2，现在请你计算出每位运动员的总成绩。
输入
输入数据由多行组成，第一行为一个整数n表示有n名运动员；
然后是n行数据，每行有6个整数h1  m1  s1  h2  m2  s2，分别表示每位运动员第一圈和第二圈用时的时分秒。
输出
对于每名运动员输出长跑总用时，同时满足时间规则（即：分和秒的取值范围在0~59），每个输出占一行，且所有的部分都可以用空格隔开的整数表示即： 时 分 秒。

样例输入
2
1 2 3 4 5 6
34 45 56 12 23 34
样例输出
5 7 9
47 9 30
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

    for (var i=1; i<arr.length; i++) {
        array=arr[i].split(" ");
        var time = [];
        var s = 0,
            m = 0,
            h = 0;
        var s1 = parseInt(array[2])+parseInt(array[5]);
        if(s1 < 60) {
            s += s1;
        } else {
            s += s1-60;
            m += 1;
        }
        var m1 = parseInt(array[1])+parseInt(array[4]);
        if(m1 < 60) {
            m += m1;
        } else {
            m += m1-60;
            h += 1;
        }
        var h1 =  parseInt(array[0])+parseInt(array[3]);
        h += h1;
        console.log(h+' '+m+' '+s);

    }
});