import { ConsumeMessage } from "amqplib";
import { rabbitMq } from "..";
import { REGISTER_USER_CAR_API, USER_API_UPDATE_CAR_USER } from "../types";
import { createCarUserUseCase } from "../../Containers/CarUsers/CreateCarUser";
import { updateCarUserUseCase } from "../../Containers/CarUsers/UpdateCarUser";


export const createCarUserQueue = async (msg: ConsumeMessage) => {
    await createCarUserUseCase.execute(JSON.parse(msg.content.toString()));
    console.log(`${REGISTER_USER_CAR_API} - ${new Date()}`);
    rabbitMq.subChannel.ack(msg)
}

export const updateCarUserQueue = async (msg: ConsumeMessage) => {
    await updateCarUserUseCase.execute(JSON.parse(msg.content.toString()));
    console.log(`${USER_API_UPDATE_CAR_USER} - ${new Date()}`);
    rabbitMq.subChannel.ack(msg)
}
