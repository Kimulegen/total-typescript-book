// CODE

/* Solution 1 */
// const userMap = new Map<number, { name: string, age: number }>();

/* Solution 2 */
// type User = { name: string, age: number}
// const userMap = new Map<number, User>();

/* Solution 3 */
// const userMap: Map<number, { name: string, age: number}> = new Map();

/* Solution 4 */
type User = { name: string, age: number}
const userMap: Map<number, User> = new Map();

// TESTS

userMap.set(1, { name: "Max", age: 30 });
userMap.set(2, { name: "Manuel", age: 31 });

// @ts-expect-error
userMap.set("3", { name: "Anna", age: 29 });

// @ts-expect-error
userMap.set(3, "123");
