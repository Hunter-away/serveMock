const test = require('./test')
const purchasesRules = require('./purchasesRules')

const mockList = [
  ...test,
  ...purchasesRules
]

module.exports = mockList