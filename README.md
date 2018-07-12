# 已知条件
用户一次性可购票1-5张
座位总共4个区域，每个区域最前排50个，最后排100个，隔排递增2个

# 假设条件
每个区域总共可以为25/26行（25行则为只有一行100，26为2行100），我们假设是26行
由假设条件1可以算出每个区域的座位总数为：（50+100）* 26 ／2 = 1950

# 产品抽象
这里已知条件是一次性购票限制，故选取用户行为维度（即每一次为一个购买进程）。随机分配先随机分配区域，然后随机分配行，最后分配列。最终将座位固定。

# 运行
npm install
node app.js