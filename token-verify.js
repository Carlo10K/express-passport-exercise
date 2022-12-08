const jwt = require('jsonwebtoken');

const secret = 'mySecret';  //esto debe ser una var de process
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3MDQzMTg0MH0.pVZmCVMedhykA-HVHBDnaewBsxi4-vwjpSTiFH9UaAo';

function verifyToken(token, secret){
  return jwt.verify(token,secret);
}

const payload = verifyToken(token,secret);

console.log(payload);
