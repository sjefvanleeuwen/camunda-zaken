const { Client, logger } = require("camunda-external-task-client-js");
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger, asyncResponseTimeout: 10000 };
const client = new Client(config);
client.subscribe("zaak-accepteren-aanvraag", async function({ task, taskService }) {
  // Put your business logic
  // complete the task
  await taskService.complete(task);
});

client.subscribe("zaak-beoordelen-aanvraag", async function({ task, taskService }) {
    // Put your business logic
    // complete the task
    await taskService.complete(task);
});

  client.subscribe("zaak-besluiten", async function({ task, taskService }) {
    // Put your business logic
    // complete the task
    await taskService.complete(task);
});

  client.subscribe("zaak-registratie", async function({ task, taskService }) {
    // Put your business logic
    // complete the task
    await taskService.complete(task);
});

  client.subscribe("zaak-toetsen", async function({ task, taskService }) {
    // Put your business logic
    // complete the task
    await taskService.complete(task);
});

  client.subscribe("zaak-toewijzen", async function({ task, taskService }) {
    // Put your business logic
    // complete the task
    await taskService.complete(task);
});

  client.subscribe("zaak-leveren", async function({ task, taskService }) {
    // Put your business logic
    // complete the task
    await taskService.complete(task);
});