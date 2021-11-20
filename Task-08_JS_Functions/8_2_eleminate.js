function eleminate(counter, steper) {
    let queue = Array.from({ length: counter }, (_, i) => i + 1);
    for (let step = 1; queue.length > 1; step++) {
        let cur = queue.shift();
        if (step % steper == 0) {
            step = 0;
            continue;
        }
        queue.push(cur);
    }
    return queue.shift();
}

console.log("Elemination game: ")
console.log(eleminate(7, 3));
console.log(eleminate(11, 19));
console.log(eleminate(1, 300));
console.log(eleminate(14, 2));
console.log(eleminate(100, 1));
console.log("");