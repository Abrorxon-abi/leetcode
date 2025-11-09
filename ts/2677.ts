type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  if (arr.length === 0) return [];

  let acc = [];
  for (let i = 0; i < arr.length; i += size) {
    acc.push(arr.slice(i, i + size));
  }

  return acc;
}
