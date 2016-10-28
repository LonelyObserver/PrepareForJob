/**
 * 题目描述：
 本题中对邮箱格式的定义与现实中的定义有出入，解题时只考虑题面中定义的邮箱格式。
 定义邮箱格式为：
 用户名@域名.com

 用户名：用户名长度至少为1，其中只能出现大写字母、小写字母或数字。
 域名：本题中只考虑以下4个域名，其它域名一律不合法。
 腾讯邮箱：qq
 网易邮箱：163
 新浪邮箱：sina
 谷歌邮箱：gmail
 本题中只考虑以.com结尾的邮箱名，其它结尾一律不合法。
 输入一个邮箱，判断是否合法，如果合法，判断出是哪种邮箱。
 输入
 第一行输入一个数T（T<=10），表示数据组数，接下来T行，每行输入一个邮箱名，邮箱名不超过100个字符。
 输出
 输出T行，腾讯邮箱输出Tencent，网易邮箱输出Netease，新浪邮箱输出Sina，谷歌邮箱输出Google，如果邮箱名不符合题面要求，输出Invalid。（注意输出的第一个字母需要大写）

 样例输入
4
Acmcoder@163.com
123@sina.cn
abc123456789@qq.com
acm123@outlook.com
样例输出
Netease
Invalid
Tencent
Invalid

 Hint
 样例第一行一个数4表示有4组测试数据。
 第一个样例满足题面中对网易邮箱的定义。
 第二个样例没有以.com作为结尾。
 第三个样例满足题面中对腾讯邮箱的定义。
 最后一个样例没有使用题面中的域名。
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
    arr.shift();
    arr.pop();

    for (var i=0; i<arr.length; i++) {
        input_array=arr[i].split('@');
        var yhm = input_array[0];
        var ymcom = input_array[1].split('.');
        var ym = ymcom[0];
        var com = ymcom[1];
        if(yhm.length<1) {
            console.log('Invalid');
        } else if(yhm.replace(/([a-z])|([A-Z]|(\d))/g,'').length >0) {
            console.log('Invalid');
        } else if(com !== 'com'){
            console.log('Invalid')
        } else if(ym == 'qq') {
            console.log('Tencent');
        } else if(ym == '163'){
            console.log('Netease');
        } else if(ym == 'sina') {
            console.log('Sina');
        } else if(ym == 'gmail'){
            console.log('Google');
        } else {
            console.log('Invalid');
        }
    }
});