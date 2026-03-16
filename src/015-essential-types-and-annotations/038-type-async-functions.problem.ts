import { Expect, Equal } from "@total-typescript/helpers";

/* Solution 0 */
// async function fetchData() {
//   const response = await fetch("https://api.example.com/data");
//   const data = await response.json() as number;
//   return data;
// }

/* Solution 2 */
async function fetchData(): Promise<number> {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}


const example = async () => {
  const data = await fetchData();

  type test = Expect<Equal<typeof data, number>>;
};
