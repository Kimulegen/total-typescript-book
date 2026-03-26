import { SESSION_EXPIRATION_TIME, SESSION_EXPIRATION_TIME_IN_SECONDS, SESSION_EXPIRATION_TIME_IN_MINUTES, SESSION_EXPIRATION_TIME_IN_HOURS } from "./dummy-import";

/* Soluction 1 */
// import * as dummy from './dummy-import'

// const expirationTimes = [
//   dummy.SESSION_EXPIRATION_TIME,
//   dummy.SESSION_EXPIRATION_TIME_IN_SECONDS,
//   dummy.SESSION_EXPIRATION_TIME_IN_MINUTES,
//   dummy.SESSION_EXPIRATION_TIME_IN_HOURS,
// ];

/* Solution 2 */
// Use ctrl+space in each variable and use autocomplete to import them

/* Solution 3 */
// Use ctrl+. to open quick fix and use 'Add all missing imports'
const expirationTimes = [
 SESSION_EXPIRATION_TIME,
 SESSION_EXPIRATION_TIME_IN_SECONDS,
 SESSION_EXPIRATION_TIME_IN_MINUTES,
 SESSION_EXPIRATION_TIME_IN_HOURS,
];

