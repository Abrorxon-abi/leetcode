function decodeMessage(key: string, message: string): string {
  let str = "";
  const map = new Map();
  let num = 97;

  for (let i = 0; i < key.length; i++) {
    if (!map.has(key[i]) && key[i] != " ") {
      map.set(key[i], String.fromCharCode(num));
      num++;
    }
  }

  for (let i = 0; i < message.length; i++) {
    str = str + (map.get(message[i]) || " ");
  }

  return str;
}
