import http from 'node:http'

const server = http.createServer((request, response) => {
  return response.end('Hello Word')
})

server.listen(3333)
