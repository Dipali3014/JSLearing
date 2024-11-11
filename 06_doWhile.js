


// 1 2 3 4  10
var index =1;
do {
    console.log(index);
    index++;
} while (index<=10);


// break
for (let index = 0; index < 20; index++) {
    console.log(index);
    if (index==10) {
        break;
    } 
    console.log("logged index value");
}

// continue
for (let index = 0; index < 20; index++) {
    console.log(index);
    if (index==10) {
        continue;
    }
    console.log("logged index value"); 
}