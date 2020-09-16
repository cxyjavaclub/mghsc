/**
 * 计算动画过渡时间帧数和步长
 * @param width
 * @param time
 * @returns {{c: number, t: number, f: number}}
 */
function calculationTransition(width, time){
    //计算帧数
    let i = 60 / (1000 / time);
    //计算帧数时间
    let t = time / i;
    //计算步长
    let c = width / i;
    return {
        f: i,
        t: t,
        c: c
    }
}

/**
 * 运行动画过渡
 * @param width
 * @param time
 * @param runFun
 * @param endFun
 */
function runTransition(width, time, runFun, endFun) {
    let obj = calculationTransition(width, time);
    let i = 0;
    let interval = setInterval(() => {
        i++;
        runFun(obj.c);
        if(i === parseInt(obj.f + '')){
            clearInterval(interval);
            endFun(obj.c * i);
        }
    }, obj.t)
}

output = runTransition;
