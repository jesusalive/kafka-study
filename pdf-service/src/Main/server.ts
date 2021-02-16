import { Kafka } from 'kafkajs'

const kafka = new Kafka({
  brokers: ['localhost:9092']
})

const run = async (): Promise<void> => {
  const consumer = kafka.consumer({
    groupId: 'pdf-consumers'
  })
  await consumer.subscribe({
    topic: 'issue-pdf'
  })

  await consumer.run({
    eachMessage: async ({ message }) => {
      const convertedMessage = message.value.toString()

      console.log(`- MESSAGE RECEIVED #${convertedMessage}`)
    }
  })
}

run().catch(console.error)
