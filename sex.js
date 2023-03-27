const regex = /^(?!000)(([012]\d\d|3([0-5]\d|6[0-5]))(9[5-9]|0[0-3])|366(00|96))-OEM-00(\d{5})-\d{5}$/;

function generateValidKey(maxAttempts = 1000) {
  if (maxAttempts === 0) {
    return null;
  }
  const key = `${Math.floor(Math.random() * 100000)}-OEM-00${Math.floor(Math.random() * 100000)}-${Math.floor(Math.random() * 100000)}`;
  if (regex.test(key) && sumDigits(key.split('-')[2]) % 7 === 0 && key !== null) {
    return key;
  } else {
    return generateValidKey(maxAttempts - 1);
  }
}

function sumDigits(str) {
  return str.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Generate 10 valid keys
for (let i = 0; i < 10; i++) {
  console.log(generateValidKey());
}