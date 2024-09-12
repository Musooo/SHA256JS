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