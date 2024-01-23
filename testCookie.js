import * as cookie from 'cookie';


const sampleCookies = {
  username: 'john_doe',
  language: 'en',
};

// Serialize cookies
const serializedCookies = cookie.serialize('user', 'john_doe', {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 7, // 1 week
});

console.log('Serialized Cookies:', serializedCookies);

// Parse cookies
const parsedCookies = cookie.parse(serializedCookies);
console.log('Parsed Cookies:', parsedCookies);
