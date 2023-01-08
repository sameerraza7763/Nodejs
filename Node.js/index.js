// const fs = require("fs");
// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     return err;
//   } else {
//     console.log(data);
//   }
// });
// const a="this is me"


//   fs.writeFile("./sample.txt",a,()=>{
//     console.log('witten')
//   })
 
// console.log('First')
// const path=require("path")
// const a=path.dirname("  C:\Users\admin\Desktop\Node.js ")
// console.log(a)
// const os=require('os')
// console.log(os.hostname())
// const pokemon=require('pokemon')
// console.log(pokemon.random())
const http=require('http')
// const fs= require("fs")
// const home=fs.readFileSync("./index.html","utf-8")
const server=http.createServer((req,res)=>{
    if  (req.url==="/"){return res.end('<h1>Home page</h1>')}
    if  (req.url==="/about"){return res.end('<h1> About Page </h1>')}
    if  (req.url==="/service"){return res.end('<h1> Service  page </h1>')}
    if  (req.url==="/contact"){ return res.end('<h1> Contact Page </h1>')}
   else{"<h1>404 Error Not Found</h1>"}

})
server.listen(4000,"localhost",()=>{
    console.log("server is running on http://localhost:4000")
})