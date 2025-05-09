class Promise {
    // 构造方法
    constructor(executor) {
        // 添加属性
        this.PromiseState = 'pending';
        this.PromiseResult = null;
        // 声明属性
        this.callbacks = [];
        // 保存实例对象的 this  的值
        const self = this;
        // resolve 函数
        function resolve(data) {
            // 判断状态
            if (self.PromiseState !== 'pending') return;
            // 1.修改对象的状态 (promiseState)
            self.PromiseState = 'fulfilled';//resolved
            // 2.设置对象结果值 (promiseResult)
            self.PromiseResult = data;
            // 调用成功回调函数
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onResolved(data);
                });
            });

        }
        // reject 函数
        function reject(data) {
            // 判断状态
            if (self.PromiseState !== 'pending') return;
            // 1.修改对象的状态 (promiseState)
            self.PromiseState = 'rejected';//resolved
            // 2.设置对象结果值 (promiseResult)
            self.PromiseResult = data;
            // 调用失败回调函数
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onRejected(data);
                });
            });

        }
        try {
            // 同步调用『执行器函数』
            executor(resolve, reject);
        } catch (e) {
            // 修改 promise 对象状态为失败
            reject(e);
        }
    }

    // then 方法封装
    then(onResolved, onRejected) {
        const self = this;
        // 判断回调函数参数
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason;
            }
        }
        if (typeof onResolved !== 'function') {
            onResolved = value => value;
        }
        return new Promise((resolve, reject) => {
            // 封装函数
            function callback(type) {
                try {
                    let result = type(self.PromiseResult);
                    if (result instanceof Promise) {
                        result.then(v => {
                            resolve(v);
                        }, r => {
                            reject(r);
                        })
                    } else {
                        resolve(result);
                    }
                } catch (e) {
                    reject(e);
                }
            }
            // 调用回调函数 PromiseState
            if (this.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved);
                });
                // try {
                //     // 获取回调函数执行结果
                //     let result =onResolved (this.PromiseResult);
                //     // 判断
                //     if (result instanceof Promise) {
                //         // 如果是Promise对象
                //         result.then(v => {
                //             resolve(v);
                //         }, r => {
                //             reject(r);
                //         })
                //     } else {
                //         // 结果的对象状态为[成功]
                //         resolve(result);
                //     }
                // } catch (e) {
                //     reject(e);
                // }
            }
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected);
                });
            }
            // 判断 pending 状态
            if (this.PromiseState === 'pending') {
                // 保存回调函数
                this.callbacks.push({
                    onResolved: function () {
                        // console.log('success');
                        callback(onResolved);
                        // try {
                        //     // 执行成功回调函数
                        //     let result = onResolved(self.PromiseResult);
                        //     // 判断
                        //     if (result instanceof Promise) {
                        //         result.then(v => {
                        //             resolve(v);
                        //         }, r => {
                        //             reject(r);
                        //         })
                        //     } else {
                        //         resolve(result);
                        //     }
                        // } catch (e) {
                        //     reject(e);
                        // }
                    },
                    onRejected: function () {
                        // console.log('error');
                        callback(onRejected);
                        // try {
                        //     // 执行成功回调函数
                        //     let result = onRejected(self.PromiseResult);
                        //     // 判断
                        //     if (result instanceof Promise) {
                        //         result.then(v => {
                        //             resolve(v);
                        //         }, r => {
                        //             reject(r);
                        //         })
                        //     } else {
                        //         resolve(result);
                        //     }
                        // } catch (e) {
                        //     reject(e);
                        // }
                    }
                });
            }
        })
    }

    // catch 方法封装
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    // resolve 方法封装
    static resolve(value) {
        // 返回promise对象
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            } else {
                // 状态设置成功
                resolve(value);
            }
        });
    }

    // reject 方法封装
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }

    // all 方法封装
    static all(promises) {
        // 返回结果为promise对象
        return new Promise((resolve, reject) => {
            // 声明变量
            let count = 0;
            let arr = []; // 成功对象
            // 遍历
            for (let i = 0; i < promises.length; i++) {
                //
                promises[i].then(v => {
                    // 得知对象的状态是成功
                    // 每个promise对象都成功
                    count++;
                    // 将当前promise对象成功的结果 存入到数组中
                    arr[i] = v;
                    // 判断
                    if (count === promises.length) {
                        // 修改状态
                        resolve(arr);
                    }
                }, r => {
                    reject(r);
                })
            }
        });
    }

    // race 方法封装
    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    // 修改返回对象状态为 成功
                    resolve(v);
                }, r => {
                    // 修改返回对象状态为 失败
                    reject(r);
                })
            }
        })
    }

}





//添加 resolve 方法
// Promise.resolve = function (value) {
//     // 返回promise对象
//     return new Promise((resolve, reject) => {
//         if (value instanceof Promise) {
//             value.then(v => {
//                 resolve(v);
//             }, r => {
//                 reject(r);
//             })
//         } else {
//             // 状态设置成功
//             resolve(value);
//         }
//     });
// }

// 添加 reject 方法
// Promise.reject = function (reason) {
//     return new Promise((resolve, reject) => {
//         reject(reason);
//     })
// }

// 添加 all 方法
// Promise.all = function (promises) {
//     // 返回结果为promise对象
//     return new Promise((resolve, reject) => {
//         // 声明变量
//         let count = 0;
//         let arr = []; // 成功对象
//         // 遍历
//         for (let i = 0; i < promises.length; i++) {
//             //
//             promises[i].then(v => {
//                 // 得知对象的状态是成功
//                 // 每个promise对象都成功
//                 count++;
//                 // 将当前promise对象成功的结果 存入到数组中
//                 arr[i] = v;
//                 // 判断
//                 if (count === promises.length) {
//                     // 修改状态
//                     resolve(arr);
//                 }
//             }, r => {
//                 reject(r);
//             })
//         }
//     });
// }

// 添加 race 方法
// Promise.race = function (promises) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(v => {
//                 // 修改返回对象状态为 成功
//                 resolve(v);
//             }, r => {
//                 // 修改返回对象状态为 失败
//                 reject(r);
//             })
//         }
//     })
// }

