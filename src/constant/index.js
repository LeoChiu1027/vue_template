// 依據建置環境選擇對應變數定義檔 (webpack.DefinePlugin)
const envConstant = require('./' + process.env.NODE_ENV + '.js').default
export default envConstant