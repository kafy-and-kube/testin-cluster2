const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9091', 'localhost:9092', 'localhost:9093'],
});

const producer = kafka.producer();

async function run() {
  await producer.connect();

  await producer.send({
    topic: 'my-topic',
    messages: [
      { value: 'Hello Kafka!' },
      { value: 'How are you?' },
    ],
  });

  await producer.disconnect();
}

run().catch(console.error);