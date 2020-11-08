function A(x) {
  return x + 10
}

function B(y) {
  return y - 10
}

function C(z) {
  return z
}

// console.log(A(B(C(10))))

function compose(...funcs) {
  if (funcs.length === 1) {
    return funcs[0]
  }
  // reduce为数组的求和方法
  // return funcs.reduce(function (a,b) {
  //   return function (...args){
  //     return a(b(...args))
  //   }
  // })

  // redux的compose把上面的流程简化成了箭头函数
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
  /* 
    正推：
    funcs为实参集合的数组
    [A,B,C,D,E,F]
    A B
    A1 = function (...args){
      return A(B(...args))
    }
    A1 C
    A2 = function (...args){
      return A1(C(...args))
    }
    A2 D
    A3 = function (...args){
      return A2(D(...args))
    }
    A3 E
    A4 = function (...args){
      return A3(E(...args))
    }
    A4 F
    A5 = function (...args){
      return A4(F(...args))
    }
    
    A5(10)


    反推：
    A5(10)
    A5 = function (...args){
      return A4(F(...args))
    }

    A4(F(10))
    A4 = function (...args){
      return A3(E(...args))
    }

    A3(E(F(10)))
    A3 = function (...args){
      return A2(D(...args))
    }

    A2(D(E(F(10))))
    A2 = function (...args){
      return A1(C(...args))
    }

    A1(C(D(E(F(10)))))
    A1 = function (...args){
      return A(B(...args))
    }

    A(B(C(D(E(F(10)))))) 得出的最后的结果就是把一个函数的返回值当做下一个函数的实参进行依次嵌套调用
  */
}
// console.log(compose(A,B,C)(10))


/* 
 * 大厂面试题实现一个add函数达到下面的效果
 *  add(1);       //1
 *  add(1)(2);    //3
 *  add(1)(2)(3); //6
 *  add(1)(2,3);  //6
 *  add(1,2)(3);  //6
 *  add(1,2,3);   //6
 */

function add(...args) {
  if (args.length === 1) {
    return function (...args1) {
      return args[0] 
    }
  }
  return args.reduce((a, b) => {
    return function (...args2) {
      return a + b 
    }
  })
}
console.log(add(1)(2)(3))