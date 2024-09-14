import { rightrotate, rightshift } from "./msgSchedule.js";
function notBin(str){
    let inv = '';
    for (let char of str){
        inv += char === '0' ? '1' : '0';
    }
    return inv.padStart(32,"0");
}

function getChoice(e,f,g){
    return ((parseInt(e,2)&parseInt(f,2))^(parseInt(notBin(e),2)&parseInt(g,2))).toString(2).padStart(32,"0");
}

function getSum(str, n){
    const num =[[2,13,22],[6,11,25]];
    return ((parseInt(rightrotate(str,num[n][0],32),2)^parseInt(rightrotate(str,num[n][1],32),2)^parseInt(rightrotate(str,num[n][2],32),2))>>>0).toString(2).padStart(32,"0");
}

function calcTmp1(h,summand1,choice,ki,wi){
    return (parseInt(h,2)+parseInt(summand1,2)+parseInt(choice,2)+parseInt(ki,2)+parseInt(wi,2)).toString(2).padStart(32,"0").slice(-32);  
}

function calcTmp2(summand0, major){
    return (parseInt(summand0,2)+parseInt(major,2)).toString(2).padStart(32,"0").slice(-32);
}

function majority(a,b,c){
    return ((parseInt(a,2)&parseInt(b,2))^(parseInt(a,2)&parseInt(c,2))^(parseInt(b,2)&parseInt(c,2))).toString(2).padStart(32,"0");
}

// a,b,c,d,e,f,g,h == h0,h1,h2,h3,h4,h5,h6,h7
function swapLetter(lettersArr, ki, wi){
    let lettersArrCopy = lettersArr.slice()
    lettersArrCopy[7] = lettersArr[6]; //h
    lettersArrCopy[6] = lettersArr[5]; //g
    lettersArrCopy[5] = lettersArr[4]; //f
    lettersArrCopy[4] = (parseInt(lettersArr[3],2)+parseInt(calcTmp1(lettersArr[7],getSum(lettersArr[4],1),getChoice(lettersArr[4],lettersArr[5],lettersArr[6]),ki,wi),2)).toString(2).padStart(32,"0").slice(-32); //e
    lettersArrCopy[3] = lettersArr[2]; //d
    lettersArrCopy[2] = lettersArr[1]; //c
    lettersArrCopy[1] = lettersArr[0]; // b
    lettersArrCopy[0] = (parseInt(calcTmp1(lettersArr[7],getSum(lettersArr[4],1),getChoice(lettersArr[4],lettersArr[5],lettersArr[6]),ki,wi),2)+parseInt(calcTmp2(getSum(lettersArr[0],0),majority(lettersArr[0],lettersArr[1],lettersArr[2])),2)).toString(2).padStart(32,"0").slice(-32);//a
    return lettersArrCopy;
}

export default swapLetter;