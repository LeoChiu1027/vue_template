import baseConstant from './development'
let constant = baseConstant

// 僅調整與 dev 有差別的部分就好
constant = { ...constant, apiUrl: 'http://localhost:8080' }
export default constant