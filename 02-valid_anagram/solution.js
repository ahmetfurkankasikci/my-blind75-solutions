var isAnagram = function(s, t) {
    const sArray = s.split("");
    const tArray=t.split("");
    return sArray.sort().toString()==tArray.sort().toString();
};