// rate-limit-test.js
// Run with: node rate-limit-test.js

const URL = "http://localhost:3000/";   // change if needed
const TOTAL_REQUESTS = 20;              // number of requests to send
const DELAY_MS = 100;                   // delay between requests

async function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function sendRequest(i) {
  try {
    const res = await fetch(URL);
    const text = await res.text();

    console.log(`[${i}] Status: ${res.status} - ${text}`);
  } catch (err) {
    console.error(`[${i}] Error:`, err.message);
  }
}

async function run() {
  console.log(`Sending ${TOTAL_REQUESTS} requests...\n`);

  for (let i = 1; i <= TOTAL_REQUESTS; i++) {
    sendRequest(i);
    await sleep(DELAY_MS);
  }
}

run();

