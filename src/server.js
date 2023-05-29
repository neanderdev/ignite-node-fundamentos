import http from 'node:http'
import { randomUUID } from 'node:crypto'

import { json } from './middleware/json.js'
import { Database } from './database.js'

const databse = new Database()

const server = http.createServer(async (request, response) => {
  const { method, url } = request

  await json(request, response)

  if (method === 'GET' && url === '/users') {
    const users = databse.select('users')

    return response
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = request.body

   const user = {
      id: randomUUID(),
      name,
      email,
    }

    databse.insert('users', user)

    return response.writeHead(201).end()
  }

  return response.writeHead(404).end()
})

server.listen(3333)
