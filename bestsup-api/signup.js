import uuid from "uuid";
import crypto from 'crypto';
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const password = data.password;
  const salt = Math.round((new Date().valueOf() * Math.random())) + '';
  const hashPassword = crypto.createHash('sha512').update(password + salt).digest('hex');

  const params = {
    TableName: 'user',
    Item: {
      id: uuid.v4(),
      username: data.username,
      password: hashPassword,
      salt: salt
    }
  };

  try {
    await dynamoDbLib.call('put', params);
    callback(null, success(params.Item));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false, e, blogId, data: params.Item }));
  }
}
