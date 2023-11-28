function generateToken() {
    //Generate an odd number exceeding one million
    var randint = Math.floor(Math.random() * 1000000000);
    while (randint < 1000000) {randint >> 1;}

    //Generate a really long and hard to guess sequence of integers (hopefully hard to guess)
    var tokarr = [];
    for (let i = 0; i < 31; i++) {
        tokarr.push((randint+i ^ i));
        tokarr.push((randint << 1) ^ (i >> 1));
    }

    for (let i = 0; i < tokarr.length; i++) {tokarr[i] = "/0x"+tokarr[i].toString(16);}
    return tokarr.join("")
}