

function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, time);
    })
}

function myPromisesAll(promises) {
    let result = []

    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            p.then((res) => {
                result.push(res)

                if(index === promises.length -1 )
                {
                    resolve(result)
                }
            }).catch((err) => reject(err))
        });
    })
}


myPromisesAll([showText('hello', 1000), Promise.resolve('Hi')]).then((value) => {
    console.log(value)
})