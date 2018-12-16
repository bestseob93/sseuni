import AWS from "aws-sdk";

const s3 = new AWS.S3();

export function uploadToS3(params) {
  return s3.putObject(params).promise();
}

export function safelyParseJSON(payload) {
  let parsed;

  try {
    parsed = JSON.parse(payload);
  } catch (e) {
    return {
      isJson: false,
      payload: payload
    };
  }

  return {
    isJson: true,
    payload: parsed
  }; // Could be undefined!
}
