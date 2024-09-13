import fs from 'fs/promises';
import initConst from './createHKConstant.js';

async function getArrFromJSON(fileName, n) {
    try {
        await fs.access(fileName);
        const data = await read(fileName);
        return data.slice(0, n);
    } catch (err) {
        switch (fileName) {
            case 'primesN.json':
                console.log("todo");
                break;
            case 'kConstant.json':
                const arr = await read('primesN.json');
                const kArr = initConst(arr, 1/3);
                const cont = await writeJson(fileName, kArr);
                if (cont) {
                    return kArr;
                } else {
                    console.log("error");
                }
                break;
            case 'hConstant.json':
                const arrPrimeH = (await read('primesN.json')).slice(0, 8);
                const hArr = initConst(arrPrimeH, 1/2);
                const contH = await writeJson(fileName, hArr);
                if (contH) {
                    return hArr;
                } else {
                    console.log("error");
                }
                break;
            default:
                console.log("err 404 file isn't used");
        }
        return null;
    }
}

async function read(fileName) {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error:', err);
        return null;
    }
}

async function writeJson(fileName, arr) {
    try {
        await fs.writeFile(fileName, JSON.stringify(arr, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error('Error nella scrittura del file:', err);
        return false;
    }
}

export default getArrFromJSON;
