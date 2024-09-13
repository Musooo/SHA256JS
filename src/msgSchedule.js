//rightrotate
function rightrotate(str,n,len){
    for(let i=0; i<n; i++){
        str = str[(str.length)-1]+str;
        str = str.slice(0,len);
    }
    return str
}

//rightshift
function rightshift(str, n,len){
    for(let i=0; i<n; i++){
        str= "0" + str;
    }
    return str.slice(0,len);
}

//message schedule init
function msgScheduleInit(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i+=4){
        newArr.push(arr[i]+arr[i+1]+arr[i+2]+arr[i+3]);
    }
    return newArr;
}

function alphaCalc(msg, n){
    let alpha = []
    const numB = [[7,18,3],[17,19,10]];
    for(let i=0; i<numB[n].length; i++){
        if (i<=1) alpha.push(rightrotate(msg,numB[n][i],32));
        else alpha.push(rightshift(msg,numB[n][i],32));
    }
    
    return ((parseInt(alpha[0],2)^parseInt(alpha[1],2)^parseInt(alpha[2],2))>>>0).toString(2).padStart(32,"0").slice(-32);
}

//row calculation
function rowSum(w,w2,w3,w4){
    let a0 = alphaCalc(w3,0)
    let a1 = alphaCalc(w4,1)
    return (parseInt(w,2)+parseInt(a0,2)+parseInt(w2,2)+parseInt(a1,2)).toString(2).padStart(32,"0").slice(-32) //TODO i fear of a last 1+1 that makes it 33
}

//from the 16 starting we will get every other them
function rowPopulation(msgSchedule){ //msgSchedule has 16 line from 0 to 15 then you wil get it with 63 (64 length) 
    for(let i=16;msgSchedule.length<64;i++){
        msgSchedule.push(rowSum(msgSchedule[i-16],msgSchedule[i-7],msgSchedule[i-15],msgSchedule[i-2]))
    }
    return msgSchedule
}

function msgScheduleNew(arr){
    let msgSchedule16 = msgScheduleInit(arr);
    return rowPopulation(msgSchedule16);
}

export { msgScheduleNew, rightrotate, rightshift};