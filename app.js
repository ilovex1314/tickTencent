/**
 * @file 计算&并输出座位号
 * @author lijiahui
 */

const co = require('co');
const prompt = require('co-prompt');
var randomArea = require('./src/random.js');
var ticket = require('./src/ticket.js');

co(function *() {
    while (true) {

        var num = yield prompt('请输入购买票数:');

        console.log(num);

        while (num < 1 || num > 5) {
            var num = yield prompt('您一次只能购买1-5张票，请重新输入正确的数量:');
            // return;
        }

        console.log('数量正确：' + num);

        var obj = main(num);
        console.log('您总共卖了' + num + '张票;');
        for (var i = 0; i < num; i ++) {
            console.log('第' + (i+1) + '张票: ' + obj.area + '区' + obj.result[i].row + '行' + obj.result[i].list + '号');
        }
    }
});

function main (num) {
    var area = randomArea.randomArea();
    while (!ticket[area].canBuy(num)) {
        area = randomArea.randomArea();
    }
    var result = ticket[area].buyTicket(num);
    return {
        area: area,
        result: result
    }
}
