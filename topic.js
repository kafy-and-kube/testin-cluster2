const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9091', 'localhost:9092', 'localhost:9093'],
});

const admin = kafka.admin();

async function run() {
  await admin.connect();

  await admin.createTopics({
    topics: [
      {
        topic: 'my-topic',
        numPartitions: 3,
      },
    ],
  });

  await admin.disconnect();
}

run().catch(console.error);