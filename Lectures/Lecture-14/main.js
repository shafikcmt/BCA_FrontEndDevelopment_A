var complete = true;
var myPromise = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    if(complete){
        resolve('The promise is success!!')
    }else{
        reject('The promise is fail!!')
    }
   },2000)
});

// myPromise.then((msg)=>{
//     console.log(msg)
// }).catch((error)=>{
//     console.log(error)
// });

// Promise.all()

var p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The First promise is resolved!!');
        resolve(10);
    },1000)
});

var p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The Second promise is resolved!!');
        reject('promise is fail');
    },2000)
});


var p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The Third promise is resolved!!');
        resolve(30);
    },3000)
});
var total = 0;
Promise.all([p1,p2,p3]).then((value)=>{
    for(var i in value){
        total += value[i];
    }
    console.log(`Results: ${value}`);
    console.log(`Total: ${total}`);
}).catch((error)=>{
    console.log(`Error: ${error}`)
})