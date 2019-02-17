import crypto from 'crypto';
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = s3Lib.safelyParseJSON(event.body);

  const params = {
    TableName: "user",
    Key: {
      username: data.payload.username,
    }
  };

  try {
    const result = await dynamoDbLib.call('query', params);
    const password = result.password;
    const inputPassword = data.password;
    const salt = result.salt;
    const hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

    if (password === hashPassword) {
      callback(null, success());
    }
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
