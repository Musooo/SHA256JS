
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
    return (((parseInt(rightrotate(str,num[n][0],32),2))^(parseInt(rightrotate(str,num[n][1],32),2))^(parseInt(rightrotate(str,num[n][2],32),2)))>>>0).toString(2).padStart(32,"0");
}

function calcTmp1(h,summand1,choice,ki,wi){
    return (parseInt(h,2)+parseInt(summand1,2)+parseInt(choice,2)+parseInt(ki,2)+parseInt(wi,2)).toString(2).padStart(32,"0");  
}