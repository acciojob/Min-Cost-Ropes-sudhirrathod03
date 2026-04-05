let cost = 0;
let arr = [4, 3, 2, 6]
arr.sort((a,b)=>a-b)
function mincost(arr)
{ 

	while (arr.length > 1) {
      let first = arr.shift();
      let second = arr.shift();
      let sum = first + second;
      cost += sum;
      arr.push(sum);
      arr.sort((a,b)=>a-b);

   }
   return cost;
  
}

module.exports=mincost;
