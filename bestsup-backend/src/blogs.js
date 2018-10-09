const uuid = require('uuid');
const AWS = reuqire('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const createResponse = (status, body) => ({
  statusCode: status,
  body: JSON.stringify(body)
});

// 블로그 만들기
exports.createBlog = (event, ctx, cb) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);

  if (typeof data.text !== 'string') {
    console.error('Validation Failed');
    cb(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the todo item.',
    });

    return;
  }

  const params = {
    TableName: 'blog',
    Item: {
      id: uuid.v1(),
      text: data.text,
      checked: false,
      createdAt: timestamp,
      updatedAt: timestamp,
    },
  };

  // write the todo to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      cb(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the todo item.',
      });
      return;
    }
    cb(null, createResponse(200, { message: 'create' }));
  });
};

// 여러개의 블로그 리스팅
exports.readBlogs = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'list' }));
};

// 특정 블로그 읽기
exports.readBlog = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'read' }));
};

// 블로그 수정
exports.updateBlog = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'update' }));
};

// 블로그 삭제
exports.deleteBlog = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'delete' }));
};
