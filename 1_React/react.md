# react 
  - 用于构建用户界面的JavaScript库，专注于视图层，顶多算MVC中的V层
  - 生态(react-native),背景强大
### 学习
  - JSX语法
    js XML
  - 组件化(受控组件域非受控组件)
  - 生命周期函数

### 安装环境
 - npx create-reatct-app my-app

### 引包
  ```
    import Reate from 'react'
    import ReactDOM from 'react-dom'

    ReactDOM.render(元素|组件|React.createElement(),挂载点,挂载成功的回调)
  ```

### react语法
```
  class声明一个组件，render中的return 后面的内容就是模板
  this.state = {}里面是放数据的
  this.setState({})专门更新数据的
```

### JSX语法
```
  组件的第一个字母必须要大写
  单标签必须要有结束符
  顶层只能有一个元素
  class必须写成className
```
