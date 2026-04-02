import { expect, it } from "vitest";

/* Solution 1 */
// function validateUsername(username: string | null): boolean {
//   // Rewrite this function to make the error go away
//   if (typeof username === "string") {
//     return username.length > 5;
//   }

//   return false;
// }

/* Solution 2 */
// function validateUsername(username: string | null): boolean {
//   // Rewrite this function to make the error go away
//   if (username) {
//     return username.length > 5;
//   }

//   return false;
// }

/* Solution 3 */
// function validateUsername(username: string | null): boolean {
//   // Rewrite this function to make the error go away
//   if (typeof username !== "string") {
//     return false;
//   }

//   return username.length > 5;
// }

/* Solution 4 */
// function validateUsername(username: string | null): boolean {
//   // Rewrite this function to make the error go away
//   if (typeof username === "object") {
//     return false;
//   }

//   return username.length > 5;
// }

/* Solution 5 */
function validateUsername(username: string | null): boolean {
  const isUsernameOK = typeof username === "string"
  // Rewrite this function to make the error go away
  if (isUsernameOK) {
    return username.length > 5;
  }

  return false;
}


it("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true);

  expect(validateUsername("Alice")).toBe(false);
  expect(validateUsername("Bob")).toBe(false);
});

it("Should return false for null", () => {
  expect(validateUsername(null)).toBe(false);
});
