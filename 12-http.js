const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
     return res.end('Welcome to our home page');
   }
   if (req.url === '/about'){
     return res.end('Here is our short history');
   }
   res.end(`
   <h1>Opps!</h1>
   <p> We Can't seem to find the page you are looking for </p>
   <a href="/"back home </a>
   `)
    return res.end();
})

server.listen(5000)