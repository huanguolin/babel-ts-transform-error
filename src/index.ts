import { asyncThrottle } from './asyncThrottle'

main();

const log = asyncThrottle(async (msg: string) => console.log(msg));

function main() {
  log('a');
  log('b');
  log('c');
}