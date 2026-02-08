// const arr = [
//     {name : "adonis"},
//     {class : 11},
//     {city : "mumbai"}
// ]
// arr.forEach( (item) => {
//      console.log(item);

    
// })


const arru = [1,2,3,4,5,6,7,,88,9,1000]

// const vals = arru.filter( (item) => {
//     return item>3
    
        
    
    
    
// })
//console.log(vals);

const x = []
arru.forEach((item)=>{
    if(item > 3){
        x.push(item)
        
    }
})
//console.log(x);






const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //books.forEach((item) => console.log(item))

  const genre_history = books.filter( (item) => item.genre === 'History')
  //console.log(genre_history);
  
  const gener_his_80s = books.filter((item) => item.genre==="History" && item.publish > 1980 
&& item.publish<1990)
  //console.log(gener_his_80s);
  


// so we can not assign foreach a constant it should be individual to not get undifined in output

//console.log(k);

//  const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);

const pup = [1,5,4,2,6,8]
//const mul = pup.map((item) => item+ j)


for (let i = 1 ; i<=10 ; i++){
    for (let j =1 ; j<=10 ; j++){
        const mul = pup.map((item) => item[i]+ i)
        console.log(mul);
        


    }
    
}



