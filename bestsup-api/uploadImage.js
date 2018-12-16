import * as s3Lib from './libs/s3-lib';
import { success, failure } from "./libs/response-lib";

export async function main(event, context, callback) {
  const parsedBody = s3Lib.safelyParseJSON(event.body);
  const filePath = `312312353.jpg`;
  let decodedImage;

  if (parsedBody.isJson) {
    decodedImage = new Buffer(parsedBody.payload['data']);
  } else {
    decodedImage = new Buffer(event.body, 'base64');
  }

  const params = {
    Body: decodedImage,
    Bucket: process.env.BUCKET,
    ContentType: 'application/octet-stream',
    ACL: 'public-read',
    Key: filePath
  };

  try {
    const result = await s3Lib.uploadToS3(params);
    callback(null, success({ message: result }));
  } catch (e) {
    callback(null, failure({ message: JSON.stringify(e) }));
  }
}
