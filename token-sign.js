const jwt = require('jsonwebtoken');

const secret = 'mySecret';  //esto debe ser una var de process
const payload = {
  sub: 1,
  role: 'customer'                      //aqui se puede agregar lo que uno desee
}

function signToken(payload, secret){
  return jwt.sign(payload,secret);
}

const token = signToken(payload,secret);
console.log(token);
