/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
 var asteroidCollision = function(asteroids) {
    var copyArr = asteroids.slice();
    var temp =[],retval = [];
    for(var pos=0;pos<copyArr.length;pos++)
    {
        if(copyArr[pos]>0)
            temp.push(copyArr[pos]);
        else
        {
            while(true)
            {
                if(temp.length==0)
                {
                    retval.push(copyArr[pos])
                    break;
                }
                else
                {
                    var preVal = temp.pop()
                    //check lastest value in temp and now value who is absolute bigger
                    // preVal win
                    if(preVal>Math.abs(copyArr[pos]))
                    {
                        //add preVal to temp
                        temp.push(preVal);
                        break;
                    }
                    // same -> destroy everything
                    else if(preVal==Math.abs(copyArr[pos])) 
                        break;

                    // now value win go to next race
                }                  
            }
        } 
    }
    return retval.concat(temp);
};


//Runtime: 76 ms, faster than 96.53% of JavaScript online submissions for Asteroid Collision.
//Memory Usage: 40.8 MB, less than 76.11% of JavaScript online submissions for Asteroid Collision.
