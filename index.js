import primeNPop from "./src/primeNumbers.js";
import buildBlock from "./src/block.js";
import {msgScheduleNew} from "./src/msgSchedule.js";
import initConst from "./src/createHK.js";
import swapLetter from "./src/shaBinCalc.js"

function sumOfHinitAndLastLetters(initH,lastLetter){
    return (parseInt(initH,2)+parseInt(lastLetter,2)).toString(16);
}

function ashed(initHArr, lastLetterArr){
    let ashedString = '';
    for(let i=0; i<initHArr.length; i++){
        ashedString+=sumOfHinitAndLastLetters(initHArr[i],lastLetterArr[i]);
    }
    return ashedString;
}

function ashedBinArr(initHArr, lastLetterArr){
    let newHArr = []
    for(let i=0; i<initHArr.length; i++){
        newHArr.push((parseInt(initHArr[i],2)+parseInt(lastLetterArr[i],2)).toString(2));
    }
    return newHArr;
}

let str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
let initPos = 0;
const primArr = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311
]
const arrK = initConst(primArr,1/3);
let arrH = initConst(primArr.slice(0,8),1/2);

const [msgBlock, importantN] = buildBlock(str);
for (let i = 1; i<=importantN; i++){
    let messageSchedule = msgScheduleNew(msgBlock.slice(initPos,64*i));
    initPos += 64
    let arrHCopy = arrH.slice();
    for (let j=0; j<64; j++){
        arrHCopy = swapLetter(arrHCopy,arrK[j],messageSchedule[j]);
    }
    if(i!=importantN) arrH=ashedBinArr(arrH,arrHCopy);
    else arrH=ashed(arrH,arrHCopy);
}

console.log(arrH);