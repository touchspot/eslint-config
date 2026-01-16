import { $, tmpfile } from "zx";

const filePath = tmpfile("commit-message.txt");
await $`rm ${filePath}`;

console.log(filePath);
