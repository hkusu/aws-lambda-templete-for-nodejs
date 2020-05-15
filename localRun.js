/*
  環境変数を利用する場合は
    $ export HOGE="hoge"
  で予め設定しておく(AWS Lambda として動かす場合は管理コンソールで設定)
*/

const index = require('./src/index');

// API Gateway の Lambda プロキシ統合の場合のイベント(よく利用しそうなものをピックアップ)
const event = {
  path: '/hoge',
  queryStringParameters: { fuga: 'abc', piyo: '1' },
  multiValueQueryStringParameters: { fuga: [ 'abc' ], piyo: [ '1' ] },
  pathParameters: { file: 'hoge' },
  stageVariables: null,
  requestContext: {
    stage: 'prod',
  },
};

(async () => {
    const result = await index.handler(event);
    console.log(result);
})();
