const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9091', 'localhost:9092', 'localhost:9093'],
});

const consumer = kafka.consumer({ groupId: 'test' });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'my-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
}

run().catch(console.error);