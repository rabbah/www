let assert = require('assert');
let assemble = require('../src/assemble')

describe('Assemble', function() {
  it('should detect desktop browser', function() {
    let res = assemble.detectMobile({
      "path": "/.netlify/functions/echo",
      "httpMethod": "GET",
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-encoding": "br, gzip",
        "accept-language": "en-US,en;q=0.5",
        "connection": "close",
        "dnt": "1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0",
        "via": "https/2 Netlify[68f4880b-1209-43e4-bcee-49f9a01b1ae5] (ApacheTrafficServer/7.1.2)",
        "x-bb-ab": "0.327339",
        "x-bb-client-request-uuid": "68f4880b-1209-43e4-bcee-49f9a01b1ae5-1059687",
        "x-bb-ip": "24.44.135.220",
        "x-country": "US",
        "x-forwarded-for": "24.44.135.220",
        "x-forwarded-proto": "https",
        "x-language": "en-US"
      },
      "queryStringParameters": {},
      "body": "",
      "isBase64Encoded": true
    })
    assert.equal(res.mobile, false)
  });

  it('should override desktop browser with query parameter', function() {
    let res = assemble.detectMobile({
      "path": "/.netlify/functions/echo",
      "httpMethod": "GET",
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-encoding": "br, gzip",
        "accept-language": "en-US,en;q=0.5",
        "connection": "close",
        "dnt": "1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:58.0) Gecko/20100101 Firefox/58.0",
        "via": "https/2 Netlify[68f4880b-1209-43e4-bcee-49f9a01b1ae5] (ApacheTrafficServer/7.1.2)",
        "x-bb-ab": "0.327339",
        "x-bb-client-request-uuid": "68f4880b-1209-43e4-bcee-49f9a01b1ae5-1059687",
        "x-bb-ip": "24.44.135.220",
        "x-country": "US",
        "x-forwarded-for": "24.44.135.220",
        "x-forwarded-proto": "https",
        "x-language": "en-US"
      },
      "queryStringParameters": {
        "mode": "mobile"
      },
      "body": "",
      "isBase64Encoded": true
    })
    assert.equal(res.mobile, true)
  });

  it('should detect mobile browser', function() {
    let res = assemble.detectMobile({
      "path":"/.netlify/functions/echo",
      "httpMethod":"GET",
      "headers":{
        "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-encoding":"br, gzip",
        "accept-language":"en-us",
        "connection":"close",
        "dnt":"1",
        "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1",
        "via":"https/2 Netlify[68f4880b-1209-43e4-bcee-49f9a01b1ae5] (ApacheTrafficServer/7.1.2)",
        "x-bb-ab":"0.664380",
        "x-bb-client-request-uuid":"68f4880b-1209-43e4-bcee-49f9a01b1ae5-1067150",
        "x-bb-ip":"24.44.135.220",
        "x-country":"US",
        "x-forwarded-for":"24.44.135.220",
        "x-forwarded-proto":"https",
        "x-language":"en-us"
      },
      "queryStringParameters":{},
      "body":"",
      "isBase64Encoded":true
    })
    assert.equal(res.mobile, true)
  });

  it('should override mobile browser with query parameter', function() {
    let res = assemble.detectMobile({
      "path":"/.netlify/functions/echo",
      "httpMethod":"GET",
      "headers":{
        "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-encoding":"br, gzip",
        "accept-language":"en-us",
        "connection":"close",
        "dnt":"1",
        "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1",
        "via":"https/2 Netlify[68f4880b-1209-43e4-bcee-49f9a01b1ae5] (ApacheTrafficServer/7.1.2)",
        "x-bb-ab":"0.664380",
        "x-bb-client-request-uuid":"68f4880b-1209-43e4-bcee-49f9a01b1ae5-1067150",
        "x-bb-ip":"24.44.135.220",
        "x-country":"US",
        "x-forwarded-for":"24.44.135.220",
        "x-forwarded-proto":"https",
        "x-language":"en-us"
      },
      "queryStringParameters":{
        "mode": "desktop"
      },
      "body":"",
      "isBase64Encoded":true
    })
    assert.equal(res.mobile, false)
  });
});
