import readInput, {readInputFile} from "../util/input.js";

let ls = await readInputFile("./input");
ls = ls.map(i => parseInt(i));

let count = 0;
for (let i = 3; i < ls.length; i += 1) {
    let sum = ls[i] + ls[i - 1] + ls[i - 2];
    let prev = ls[i - 1] + ls[i - 2] + ls[i - 3];
    console.log(`sum: ${sum} prev: ${prev}`);
    if (sum > prev) {
        count += 1;
    }
}
console.log(count);
