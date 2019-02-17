import crypto from 'crypto';
import * as s3Lib from './libs/s3-lib';
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = s3Lib.safelyParseJSON(event.body);

  const params = {
    TableName: 'user-2',
    Key: {
      username: data.payload.username,
    },
  };

  try {
    const result = await dynamoDbLib.call('get', params);
    const password = result.Item.password;
    const inputPassword = data.payload.password;
    const salt = result.Item.salt;
    const hashPassword = crypto.createHash('sha512').update(inputPassword + salt).digest('hex');

    if (password === hashPassword) {
      callback(null, success({ success: true }));
    }
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
