const bcrypt = require('bcrypt');

async function hashPass(){
  const pass = 'admin 123 .202';
  const hash = await bcrypt.hash(pass, 10);
  console.log(hash);
}

hashPass();


