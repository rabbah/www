exports.handler = function(event, context, callback) {
  callback(null, {
    headers: { "content-type": "application/json" },
    statusCode: 200,
    body: event
  });
}
