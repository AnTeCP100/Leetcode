/**
 * @param {number[]} prices
 * @return {number}
 */

//There are some doubts about the problem, so i try some awsner
// 1. can sell first?
// => [2,1] = 0 , so can not sell first
// 2. cooldown limit?
// => no limit

//f(n) = f(n-1) or  y(n-2)-now
//y(n) = y(n-1) or f(n-1)+now


 var maxProfit = function(prices) {
    if(prices.Length == 0) {
        return 0;
    }
     var len = prices.length;
     var bArr=[];
     var sArr=[];

     //init two array
     bArr.length=len+1;
     sArr.length= len+1;
     bArr[0] = 0
     bArr[1] = -prices[0];
     sArr[0] = 0;
     sArr[1] = 0;
     

     //dp
     for(var pos = 2; pos<=len;pos++) {
        
        //cooldown or buy
        bArr[pos] = Math.max(bArr[pos - 1], sArr[pos - 2] - prices[pos - 1]);
            
        
        //cooldown or sell
        sArr[pos] = Math.max(sArr[pos - 1], bArr[pos - 1] + prices[pos - 1]);
    }
     
     return sArr[len]
 }


 //Runtime: 110 ms, faster than 33.17% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.
 //Memory Usage: 40 MB, less than 62.81% of JavaScript online submissions for Best Time to Buy and Sell Stock with Cooldown.


 var p = [1,2,3,0,2]
console.log(maxProfit(p))

// var maxProfit = function(prices) {
//    
//    var retval = 0;
//    var searchFunc= function(nowindex,status,nowtar)
//    {
//        if(nowindex > prices.length-1)
//        {
//            retval = nowtar>retval?nowtar:retval
//            return;
//        }
//            
//
//        //check status
//        if(status==1)
//        {
//            //sell
//            searchFunc(nowindex+2,0,nowtar+prices[nowindex])
//
//            //cooldown
//            searchFunc(nowindex+1,1,nowtar)
//        }
//        else
//        {
//            //buy
//            searchFunc(nowindex+1,1,nowtar-prices[nowindex])
//
//            //cooldown
//            searchFunc(nowindex+1,0,nowtar)
//        }
//
//    }
//    return retval
//};
//Time Limit Exceeded


/**
 * @param {number[]} prices
 * @return {number}
 */
//alway choose the larges, then the answer is the largest
 var maxProfit_fast = function(prices) {
    //three status
    var len = prices.length-1;
    var preFstBuyVal = -prices[0];
    var preFstSellVal = 0;
    var preFstCoolVal = 0;

    //caculate every value(dp)
    for(var pos = 1;pos<=len;pos++)
    {
        //now first buy value
        //var nowFstBuyVal = Math.max(preFstBuyVal,preFstCoolVal-prices[pos],preFstSellVal) -> wrong ,because u can not buy after sell
        var nowFstBuyVal = Math.max(preFstBuyVal,preFstCoolVal-prices[pos])

       //now first sell value
       //var nowFstSellVal = Math.max(preFstSellVal,preFstBuyVal+prices[pos],preFstCoolVal)
       //??????????????????????????????????????????????????????????????????????????
       var nowFstSellVal = Math.max(preFstSellVal,preFstBuyVal+prices[pos])

       //now first cool value
       //var nowFstCoolDown = Math.max(preFstBuyVal,preFstCoolVal,preFstBuyVal)
       //preFstBuyVal never large than preFstSellVal or preFstCoolVal
       var nowFstCoolDown = Math.max(preFstSellVal,preFstCoolVal)

       preFstBuyVal=nowFstBuyVal;
       preFstSellVal=nowFstSellVal;
       preFstCoolVal=nowFstCoolDown;
    }

    return preFstSellVal;
}

