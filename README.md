My serverless personal webpages. The content is rendered using a desktop or mobile theme, set by detecting the user-agent. The theme may be overriden with a query parameter `?mode=[mobile,desktop]`. 

The content is served using [Netlify](netlfiy.com) which provides both a CDN and AWS Lambda integration for dynamic HTML generation.

To develop and test locally, use `SITE_DEBUG=true netlify-lambda serve src`.
Unit test are run via `mocha test`. 
