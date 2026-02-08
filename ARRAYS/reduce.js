const courses = [
    {name : "AIML",
    cost : 4009
    },
    {name : "AIDS",
    cost : 599
    },
    {name : "IIOT",
    cost : 4999
    },
    {name : "A&R",
    cost : 6999
    },
    {name : ".PY",
    cost : 4009
    }
]
// const k = courses.length
// function num(k){
//     for(i=0 ; i<=k; i++){
//         console.log(i);
//         break;
        
        
//     }

// }




const sum_prices = courses.reduce((acc,item) => {
    console.log(`the initial price on cart ${acc} and the cost of course ${item.cost}`);
    return acc + item.cost
    
},0)
console.log(sum_prices);
