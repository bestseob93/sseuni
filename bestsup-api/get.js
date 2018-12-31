import * as dynamoDbLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const params = {
    TableName: "sseuni-2",
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    KeyConditionExpression: '#id = :id',
    ExpressionAttributeNames: {
      '#id': 'id'
    },
    ExpressionAttributeValues: {
      ':id': event.pathParameters.id,
    },
    Limit: 1
  };

  try {
    const result = await dynamoDbLib.call("query", params);
    if (result.Items) {
      // Return the retrieved item
      callback(null, success(result.Items));
    } else {
      callback(null, failure({ status: false, error: "Item not found.", result: JSON.stringify(result) }));
    }
  } catch (e) {
    callback(null, failure({ status: false, param: event.pathParameters.id, err: JSON.stringify(e) }));
  }
}
