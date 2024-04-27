import { ConsumeMessage } from "amqplib";
import { REGISTER_USER_CAR_API, USER_API_UPDATE_CAR_USER } from "../types";
import { createCarUserQueue, updateCarUserQueue } from "../Actions";

const QUEUE_METADATA = [
  {
    name: REGISTER_USER_CAR_API,
    handler: (msg: ConsumeMessage) => createCarUserQueue(msg),
  },
  {
    name: USER_API_UPDATE_CAR_USER,
    handler: (msg: ConsumeMessage) => updateCarUserQueue(msg),
  },
];

export { QUEUE_METADATA };
