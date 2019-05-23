// 進階題：請修改剛剛的 middleware，讓你能留下兩次時間戳記(time - stamps) 的 middleware。兩次的戳記分別需為：(1) 發送請求時，以及(2) 送出回應時。

// 最後顯示到終端機上的訊息該像這樣：

// 2019 - 5 - 17 18: 51: 12 | GET from / | total time: 8ms

const express = require('express')
const app = express()
const port = 3000

let logger = require('./myLogger.js')

app.use(logger())

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
