'use strict';

// const axios = require('axios');

const HOGE = process.env['HOGE'];

exports.handler = async (event) => {
  try {

    // do something ...

    // API Gateway の Lambda プロキシ統合の場合のreturn
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: 'Hello world!',
    };
  } catch (error) {
    console.error(error.message);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: 'Some error occurred.',
    };
  }
};
