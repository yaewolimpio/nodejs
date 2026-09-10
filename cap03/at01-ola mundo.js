import http from 'node:http'

const server = http.createServer((req, res)=>{
   res.setHeader('Content-Type', 'text/html')
   res.end(`
   <head> <meta charset="UTF-8"></head>
   <body
   <h1> ola mundo !!</h1>
   <h1> ala turma 43 !!</h1>
   </body>
   `)

})

server.listen(3000, ()=>{
    console.log('Servidor rodando em http://localhost:3000')
})
