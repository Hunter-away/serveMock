const Mock = require('mockjs')

const Random = Mock.Random

module.exports = [
  {
    url: '/api/test',
    method: 'get',
    response() {
      return {
        code: 200,
        data: {
          'list|10': [{
            name: Random.cname(),
            age: Random.natural(1, 100),
            email: Random.email()
          }]
        }
      }
    }
  }
]