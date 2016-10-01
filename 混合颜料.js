/**
 你就是一个画家！你现在想绘制一幅画，但是你现在没有足够颜色的颜料。为了让问题简单，我们用正整数表示不同颜色的颜料。你知道这幅画需要的n种颜
 色的颜料，你现在可以去商店购买一些颜料，但是商店不能保证能供应所有颜色的颜料，所以你需要自己混合一些颜料。混合两种不一样的颜色A和颜色B颜料
 可以产生(A XOR B)这种颜色的颜料(新产生的颜料也可以用作继续混合产生新的颜色,XOR表示异或操作)。本着勤俭节约的精神，你想购买更少的颜料就满
 足要求，所以兼职程序员的你需要编程来计算出最少需要购买几种颜色的颜料？
 输入描述:
 第一行为绘制这幅画需要的颜色种数n (1 ≤ n ≤ 50)
 第二行为n个数xi(1 ≤ xi ≤ 1,000,000,000)，表示需要的各种颜料.


 输出描述:
 输出最少需要在商店购买的颜料颜色种数，注意可能购买的颜色不一定会使用在画中，只是为了产生新的颜色。

 输入例子:
 3
 1 7 3

 输出例子:
 3

 */
/**  * Created by hudaoyun on 16/8/24.
 *参考一楼的答案，求矩阵的秩  */
// import java.util.ArrayList;
// import java.util.Collection;
// import java.util.Collections;
// import java.util.Scanner;
// public class Main { public static void main(String[] args){
//     Scanner in = new Scanner(System.in);
//     int n = in.nextInt();
//     ArrayList<Integer> colors = new ArrayList<Integer>();
//     for (int i = 0; i < n; i++){
//     int x = in.nextInt();
//     colors.add(x);
// }
// Collections.sort(colors);
// int bigest = n-1;
// int bigsecond = bigest - 1;
// int result = 0;
// while(colors.size() > 2){
//     if (getHighPosition(colors.get(bigest)) == getHighPosition(colors.get(bigsecond))){
//         int temp = colors.get(bigest) ^ colors.get(bigsecond);
//         if (!colors.contains(temp)){
//             colors.add(temp);
//             Collections.sort(colors);
//             bigest = colors.size() - 1;
//             bigsecond = bigest - 1;
//         }
//     }else{
//         result++;
//     }
//     colors.remove(colors.size() - 1);
//     bigest = bigsecond;
//     bigsecond--;
// }
// System.out.println(result + 2);
//
// }
//
// public static int getHighPosition(int a){
//     int count = 0;
//     while(a > 0){
//         count++;
//         a = a >> 1;
//     } return count;
// }
// }