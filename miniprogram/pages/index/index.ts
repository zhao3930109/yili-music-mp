// index.ts

import {sayHello} from "../../api/hello"
// 获取应用实例
// const app = getApp<IAppOption>()

Page({
  data: {
    message:"Hello World"
  },

  async hi(){
    try {
      const res = await sayHello()
      console.log(res)
      this.setData ({
          message:res
    })
    } catch (err) {
      console.log(err)
    }
 
  }
  
  


})
