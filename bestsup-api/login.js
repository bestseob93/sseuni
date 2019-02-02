import crypto from 'crypto';
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);


  const params = {
    TableName: "user",
  };

  try {
    const result = await dynamoDbLib.call('put', params);
    const password = data.password;
    // const salt = ;
    // const hashPassword = crypto.createHash('sha512').update(password + salt).digest('hex');
    callback(null, success(result));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}
