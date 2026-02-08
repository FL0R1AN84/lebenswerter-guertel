import express from 'express'
import contactRouter from './router/contact.js'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Mount routes with /api prefix
app.use('/api', contactRouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
