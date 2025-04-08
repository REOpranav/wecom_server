const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors())

let CRM_WEBHOOK = process.env.CRM_WEBHOOK
// getting the form data form (WeCom Form)
app.post('/api/weComForm', async (req, res) => {
    try {
        await fetch(CRM_WEBHOOK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body),
        }).then(val => res.json(val.ok)).catch(err => { throw new Error(err) })
    } catch {
        res.json(err.message)
    }
})

// running the node in 3002 port
const PORT = 3002
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});