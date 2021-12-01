export const readInputFile = async (f) => {
    return await Deno.readTextFile(f).then(ls => ls.split('\n').slice(0, -1));
}

export default () => readInputFile('./input');
