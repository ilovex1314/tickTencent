/**
 * @file 座位建模
 * @author lijiahui
 */
var random = require('./random.js');
/**
 * @class 区域票类 
 * 每个区域共计26行，间隔一行座位数加2，第一行50，最后一行100，共计(50 + 100) * 26 / 2 = 1950
 */
function AllTicket () {
    this.totle = 1950,
    this.remain = 1950,
    this.canBuy = function(num) {
        return num <= this.remain ? true : false;
    },
    this.buyTicket = function(num) {    
        this.remain -= num;
        return randomTicket(num, this.ticketRow);
    }
}

AllTicket.prototype.ticketRow = initRow();


/**
 * 初始化座位票数组
 * 座位数隔行+2
 */
function initRow () {
    var result = [];
    for (var i = 0; i < 26; i ++) {
        result.push({
            key: i,
            remain: 50 + parseInt(i / 2) * 2,
            item: initItem(i)
        });
    }
    return result;
}

function initItem (key) {
    var item = [];
    for (var j = 0; j < 50 + parseInt(key / 2) * 2; j ++) {
        item[j] = 0;
    }
    return item;
}

function randomTicket (num, arr) {
    var result = [];
    while (num > 0) {
        var row = random.randomRow();
        if (arr[row].remain === 0) {
            break;
        }
        var list = random.randomItem(arr[row].item);
        result.push({
            row: row,
            list: list
        });
        num --;
    }
    return result;
}

var areaA = new AllTicket();
var areaB = new AllTicket();
var areaC = new AllTicket();
var areaD = new AllTicket();

var ticket = [
    areaA,
    areaB,
    areaC,
    areaD
];

module.exports = ticket;