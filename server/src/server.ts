import express from 'express'

const app = express()

app.get('/users', (req, res)=>{
    console.log('listagem de usuários')


    res.json([
        'Diego',
        'Luan',
        'Saul',
        'João',
        'Lucas'
    ])
})

app.listen(3333, ()=>{
    console.log('Server is listening on port: 3333')
})