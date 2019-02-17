import crypto from 'crypto';
import * as s3Lib from './libs/s3-lib';
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = s3Lib.safelyParseJSON(event.body);
  const password = data.payload.password;
  const salt = Math.round((new Date().valueOf() * Math.random())) + '';
  const hashPassword = crypto.createHash('sha512').update(password + salt).digest('hex');

  const params = {
    TableName: 'user-2',
    Item: {
      username: data.payload.username,
      password: hashPassword,
      salt: salt
    }
  };

  try {
    await dynamoDbLib.call('put', params);
    callback(null, success(params.Item));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false, e: JSON.stringify(e) }));
  }
}
