import readInput, {readInputFile} from "../util/input.js";

let ls = await readInputFile("./input");
ls = ls.map(i => parseInt(i));
let o = ls.reduce(([incs, prev], next) => next > prev ? [incs + 1, next] : [incs, next], [0, ls[0]]);
console.log(o);
