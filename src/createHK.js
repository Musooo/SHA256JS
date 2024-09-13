function initConst(arrN, x){
    let constArr = [];
    for(let i=0; i<arrN.length; i++){
        constArr.push((Math.pow(arrN[i], x)-Math.floor(Math.pow(arrN[i], x))).toString(2).slice(2,34).padStart(32,"0"));
    }
    return constArr;
}

export default initConst;