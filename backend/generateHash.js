

const bcrypt = require('bcryptjs');

async function generate() {
  const password = 'admin123'; 
  const hash = await bcrypt.hash(password, 10);
  console.log('Hashed password:', hash);
}

generate();
