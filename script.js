
function mincost(arr)
{  

	let ropes = [...arr];
	let cost = 0;
	ropes.sort((a,b)=>a-b)

	while (ropes.length > 1) {
      let first = ropes.shift();
      let second = ropes.shift();
      let sum = first + second;
      cost += sum;
      ropes.push(sum);
      ropes.sort((a,b)=>a-b);

   }
   return cost;
  
}

module.exports=mincost;
