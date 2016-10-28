var arr = [1, 9, 5, 4, 8, 10, 2, 7, 3, 5, 6];
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  排序
// 交换排序：冒泡排序 快速排序
/*
 冒泡排序
 基本思想：
 重复地走访待排记录记录，一次比较两个元素，如果它们大小顺序错误则进行交换。
 算法描述：
 1.比较相邻的两个元素,如果第一个比第二个大，进行交换；
 2.对每一对相邻元素重复步骤1，从开始第一对到结尾的最后一对，最后的元素是最大的数；
 3.针对所有的元素重复步骤1~2，除了最后一个；
 4.重复步骤1~3，直到排序完成。
 时间复杂度：
 O(n2) O(n)
 平均时间复杂度：
 O(n2)
 比较次数：
 n(n-1)/2 n-1
 稳定
 */


function bubbleSort(arr) {
    var i = arr.length, j;
    var temp;
    while (i > 0) {
        for (j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i--;
    }
   return arr;
}


/*
 快速排序
 基本思想：
 递归
 通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
 算法描述：
 1.从数列中挑出一个元素作为基准；
 2.重新排序数列，所有比基准值小的元素放在基准前面，所有比基准值大的元素放在基准的后面（相同的数可以放到任一边）；在分区退出之后，该基准就处于数列的中间位置，即分区（partition）操作；
 3.递归把小于基准值元素的子数列和大于基准值元素的子数列排序。
 时间复杂度：
 O(n2) O(nlogn)
 平均时间复杂度：
 O(nlogn)
 空间复杂度：
 O(nlogn)
 不稳定
 */
function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    var pivot = arr.splice(0,1)[0],
        left = [],
        right = [];
    for (var i=0; i<arr.length; i++) {
        if(arr[i] <= pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}

// 插入排序：插入排序 希尔排序
/*
 插入排序
 基本思想：
 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 算法描述：
 1.从第一个元素开始，该元素可以认为已经被排序；
 2.取出下一个元素，在已经排序的元素序列中从后向前扫描；
 3.如果该元素（已排序）大于新元素，将该元素移到下一位置；
 4.重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
 5.将新元素插入到该位置后；
 6.重复步骤2~5。
 时间复杂度：
 O(n2) O(n)
 平均时间复杂度：
 O(n2)
 比较次数：
 n(n-1)/2 n-1
 稳定
 */
function insertSort(arr) {
    var temp,
        j,
        len = arr.length;
    for (var i = 1; i < len; i++) { //第一个元素不用排序
        temp = arr[i]; //temp缓存待插入的元素
        for (j = i - 1; j > -1; j--) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = temp; //插入元素
    }
    return arr;
}




// 有序数组二分查找
function binarySearch(arr, key, start, end) {
    var mid = Math.floor((start + end) / 2);
    if(arr[mid] == key) {
        return mid;
    }
    if(key < arr[mid]) {
        return binarySearch(arr, key, start, mid-1);
    }
    else {
        return binarySearch(arr,key, mid+1, end);
    }
}


// 查找两个有序数组中相同的元素
function getSame(arr1, arr2) {
    var len1 = arr1.length,
        len2 = arr2.length;
    var i = 0,
        j = 0,
        result = [];
    while (i < len1 && j < len2) {
        if (arr1[i] == arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}
var brr = [1, 5, 19, 6, 12, 14];
// console.log(getSame(quickSort(arr), quickSort(brr)));


// 全排列
var srr = [1, 2, 3, 4];

function perm(arr, end) {
    if (end <= 1) {
        console.log(arr);
        return arr;
    } else {
        for (var i = 0; i < end; i++) {
            swap(arr, i, end - 1);
            perm(arr, end - 1);
            swap(arr, i, end - 1);
        }
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

perm(srr, srr.length);
