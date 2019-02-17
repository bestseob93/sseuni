import crypto from 'crypto';
import * as s3Lib from './libs/s3-lib';
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = s3Lib.safelyParseJSON(event.body);

  console.log(JSON.stringify(data));
  const params = {
    TableName: 'user-2',
    Key: {
      username: data.payload.username,
    },
  };

  try {
    const result = await dynamoDbLib.call('get', params);
    console.log(JSON.stringify(result));
    const password = result.password;
    const inputPassword = data.password;
    const salt = result.salt;
    const hashPassword = crypto.createHash('sha512').update(inputPassword + salt).digest('hex');

    if (password === hashPassword) {
      callback(null, success());
    }
  } catch (e) {
    console.log(JSON.stringify(e));
    callback(null, failure({ status: false }));
  }
}
