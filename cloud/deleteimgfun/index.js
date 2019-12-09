// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // console.log(event)
  // console.log(context)
  const fileIDs = [].push(event.dleimgsrc)
  const result = await cloud.deleteFile({
    fileList: fileIDs,
  })

  return {
    event
  }
}