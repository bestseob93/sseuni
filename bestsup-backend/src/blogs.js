const createResponse = (status, body) => ({
  statusCode: status,
  body: JSON.stringify(body)
});

// 블로그 만들기
exports.createBlog = (event, ctx, cb) => {
  cb(null, createResponse(200, { message: 'create' }));
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
