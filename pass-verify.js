const bcrypt = require('bcrypt');

async function verifypass(){
  const mypass = 'admin 123 ';
  const hash = '$2b$10$BOghTQVQrZeg0ZW7KprS1.Q2UFfdJcoXEK.4ZBUjTiJrAEMu/T7Jm';
  const ismatch = await bcrypt.compare(mypass, hash);
  console.log(ismatch);
}

verifypass();

