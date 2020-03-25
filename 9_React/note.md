# react-redux源码
# children如果子组件用的是双标签，可以在标签内传递数据，子组件通过this.props.children拿到双标签内的数据
#  React身上有个createContext的函数， React.createContext()调用返回值为两个对象，一个是消费者一个是供应者可以在组件上定义一个静态属性contetxType让这个属性等于React.createContext()，这样就可以通过this.context去取Provider中的数据了