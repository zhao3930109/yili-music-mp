
const baseUrl:string =  "http://localhost:8080"
export function get (uri:string){
    wx.showLoading({
        title:"加载中"
    })
 
    return new Promise((resolve, reject) => {
        wx.request({
            url:baseUrl + uri,
            method:"GET",
            success:(res)=>{
            //    if(res.statusCode!==200){
            //        reject(res)
            //    }
                handleError(res,reject)
                resolve(res.data)
            },

            // 服务器的错误回调fail里面
            fail:(err)=>{
                reject(err)
            },
            complete:function(){
                wx.hideLoading()
            }
        })
    })
}
const handleError = (res,reject)=>{
    if(res.statusCode!==200){
        reject(res)
    }
}
