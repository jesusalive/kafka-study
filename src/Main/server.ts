import express from 'express'
import { Kafka } from 'kafkajs'

const app = express()
const kafka = new Kafka({
  brokers: ['localhost:9092']
})

const run = async (): Promise<void> => {
  const producer = kafka.producer()
  await producer.connect()

  app.post('/get-pdf', async (req, res) => {
    const message = {
      user: {
        id: 1,
        name: 'Cachorrinho pitoco'
      }
    }

    await producer.send({
      messages: [
        {
          value: JSON.stringify(message)
        }
      ],
      topic: 'issue-pdf'
    })

    return res.json({ success: true })
  })
}

run().catch(console.error)

app.listen(3000)
