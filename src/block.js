var messageBlock = []

function stringToBinary(str){
    for(let i=0; i<str.length; i++){
        messageBlock.push(str.charCodeAt(i).toString(2).padStart(8,"0"));
    }
    return messageBlock;
}

function addZero(){
    let len = (messageBlock.length*8) + 64;
    let i = 0;
    while(true){
        i+=1;
        if(len<=512*i){
            let missing = (512*i-len)/8;
            for(let j = 0; j<missing; j++){
                messageBlock.push("00000000");
            }
            return messageBlock;
        }
    }
}

function addEnd(str){
    let st = ((str.length)*8).toString(2).padStart(64,"0");
    for (let i = 0; i < st.length; i += 8) {
        let chunk = st.slice(i, i + 8);
        messageBlock.push(chunk);
    }
    return messageBlock;
}

function buildBlock(str){
    stringToBinary(str);
    messageBlock.push("10000000")
    addZero();
    addEnd(str);
    return messageBlock;
}
