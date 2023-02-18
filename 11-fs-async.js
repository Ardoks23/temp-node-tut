const {readFile, writeFile} = require('fs')
const { resourceLimits } = require('worker_threads')


readFile('./content/first.txt', 'utf-8', (err,result) =>{
    if (err) {
        console.log(err)
        return
    }  

    const first = result;
    readFile('./content/second.txt', 'utf-8' ,(err,result)=>{
        if (err) {
            console.log(err)
            return 
    }

    const second = result;
    writeFile('./content/result-async.txt',
    `Here is the result: ${first} , ${second}`
    , (err,result)=>{
        if (err) {
            console.log(err)
            return
        }

        console.log(result)
        
    })

    })

})