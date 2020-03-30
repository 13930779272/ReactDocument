/*
 * 继承
 *    1.原型继承
 *    2.CALL继承
 *    3.寄生组合继承 Object.create
 *    4.ES6中基于CLASS实现继承 
 */
class Parent { }
class Clock extends Parent {
	constructor() {
    /* *
     * Must call super constructor in derived class before accessing 'this' or returning from derived constructor 只要用到CONSTRUCTOR，
     第一行就要写SUPER（类似于CALL继承，会把父类当做函数执行，让函数中的THIS是子类的实例）
     */
		super(); 
		this.x = 100;
	}
	y = 200; //=>新增的语法：给实例设置的私有属性 和 CONSTRUCTOR中的 this.y=200效果一样
	AAA() { // 实例上的方法
		// Clock.prototype.AAA
	}
	static CCC = 300; //=>ES7新增的语法：直接在类上设置静态属性（REACT脚手架中给我们设置了关于这种语法的处理：@babel/plugin-proposal-class-properties）
	static BBB() { // 这个类自身的方法
		// Clock.BBB
	}
}
let c = new Clock();
console.dir(c);
console.dir(Clock);