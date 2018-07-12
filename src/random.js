/**
 * @file 随机函数
 * @author lijiahui
 */

/**
 * 随机列
 * 列元素为0（初始化）票未出售，-1 已经出售
 */
module.exports.randomItem = function(arr) {
    var index = randomCommon(arr.length);
    while (arr[index] === -1) {
        // 表示票已出售
        index = randomCommon(arr.length);
    }
    arr[index] = -1;
    return index;
}

/**
 * 随机区域
 * 分别对应 A (0), B (1), C (2), D (3) 4个区域 
 */
module.exports.randomArea = function() {
    return new Date().getTime() % 4;
}

/**
 * 随机行 
 */
module.exports.randomRow = function() {
    return randomCommon(26);
}

/**
 * 通用随机函数 
 */
var randomCommon = function(num) {
    return parseInt(Math.random() * num) % num;
}
