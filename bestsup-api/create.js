import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const separatedV4 = uuid.v4().split('-');
  const firstIdentifier = separatedV4[0];
  const secondIdentifier = separatedV4[1];

  const blogId = firstIdentifier + secondIdentifier;

  const params = {
    TableName: "bestsup",
    Item: {
      id: blogId,
      title: data.title,
      previewContent: data.previewContent,
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call("put", params);
    callback(null, success(params.Item));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false, e }));
  }
}
