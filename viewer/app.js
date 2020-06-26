import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import Zlist from './components/Zlist/Zlist'
import IMAGES from '../assets/index'

const hyExt = global.hyExt
const { View, Text, Image, Button, Tip } = UI

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorCheck: 1,
      // sec: 0,
      showImageP: '',
      showImageK: '',
      userInfo: {},
      userList: {}
    }
  }

  // 切换到P
  checkToP = () => {
    Tip.show(`切换到P成功!`, 2000, 'center')
    this.setState({
      colorCheck: 1,
    })
  }
  // 切换到K事件
  checkToK = () => {
    Tip.show(`切换到K成功!`, 2000, 'center')
    this.setState({
      colorCheck: 0,
    })
  }
  //点赞事件
  dianzhan = () => {
    //图片选择，1是第一张，0是第二张
    // let { colorCheck } = this.state
    // // 获取用户信息
    // hyExt.context.getUserInfo(userInfo => {
    //   this.setState({
    //     userInfo
    //   })
    // }).catch(err => {
    //   console.log(err);
    // })
    // // 发送点赞请求
    // let obj = {
    //   url: '',
    //   method: ' ',
    //   data: {
    //     message: '用户点赞',
    //     imageSelect: colorCheck,
    //     userInfo: this.state.userInfo,
    //     number: 1,
    //   },
    //   dataType: 'json'
    // }
    // hyExt.request(obj).then(res => {
    //   console.log(res);
    //   Tip.show(`点赞成功!`, 2000, 'center')
    // }).catch(err => {
    //   console.log(err);
    // })

    Tip.show('点赞成功', 1000, 'center')
    this.setState({
      userList:{
        P: [
          { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          { no: 2, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '90' },
        ],
        K: [
          { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          { no: 2, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          { no: 3, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
        ]
      }
    })
  }

  //倒计时事件
  // overTime = () => {
  //   let timeout = setInterval(() => {
  //     console.log(111);
  //     this.setState({
  //       sec: this.state.sec - 1
  //     })
  //     if (this.state.sec == 0) clearInterval(timeout)
  //   }, 1000)

  // }

  // 生命周期
  componentDidMount() {
    // this.overTime()
    this.getShowImages()
    this.getUserList()
    hyExt.onLoad(() => {
      // this.messageEventListener()

    })
  }

  // 接受主播端倒计时
  // messageEventListener=()=>{
  //   hyExt.observer.on('message-push', sec => {
  //     console.log("[message]:",sec);    //监听到message-push消息后打印出来
  //     this.setState({
  //       sec:sec
  //     })
  //     this.overTime()
  //   })
  // }

  //获得显示图片地址
  getShowImages = () => {
    // let obj = {
    //   url: 'http://localhost:3000/string',
    //   method: 'GET',
    //   dataType: 'json'
    // }
    // hyExt.request(obj).then(res => {
    //   console.log(res);
    //   this.setState({
    //     showImageP:res.imgArr.imageP,
    //     showImageK:res.imgArr.imageK,
    //   })
    // }).catch(err => {
    //   console.log(err);

    // })
    this.setState({
      showImageP: 'https://x7ce6c529ad57cc7-cyvxhim7.hyext.com/extImg/ae60dec5c9/a7abf511a355a3c9.jpg',
      showImageK: 'https://x7ce6c529ad57cc7-cyvxhim7.hyext.com/extImg/ae60dec5c9/81c64865e10621b7.jpg',
    })
  }

  // 获取用户点赞列表，目前只获取前十行
  getUserList = () => {
    // console.log('获取用户点赞列表');
    // let { colorCheck } = this.props
    // let obj = {
    //     url: '',
    //     type: 'GET',
    //     data: {
    //         imageSelect: colorCheck
    //     },
    //     dataType: 'json'
    // }
    // hyExt.request(obj).then(res => {
    //     this.setState({
    //         userList: res.data.userList
    //     })
    // })
    this.setState({
      userList: {
        P: [
          { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
        ],
        K: [
          { no: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          { no: 2, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          { no: 3, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
        ]
      }
    })
  }

  render() {
    // 倒计时显示
    // let timeText=null
    // this.state.sec==0?timeText=<Text className='overTime'>(倒计时结束)</Text>:timeText=<Text className='overTime'>(倒计时:{this.state.sec} s)</Text>;
    return (
      <View className={this.state.colorCheck === 1 ? 'container blue' : 'container red'}>
        <View className='pk'>
          <View className='pf'>
            <Image src={IMAGES.P}  className='p' alt="" onClick={this.checkToP} />
          </View>
          <View className='kf'>
            <Image src={IMAGES.K }  className='k' alt="" onClick={this.checkToK} />
          </View>


        </View>

        <View className='image'>
          <Image src={this.state.colorCheck === 1 ? this.state.showImageP || IMAGES.FAIL : this.state.showImageK || IMAGES.FAIL} alt="" className='fengmianImage' />
        </View>

        <View className='count' onClick={this.dianzhan}>
          <Image src={IMAGES.DIANZHAN} className='onloadImage' alt="" />
          {/* {timeText} */}
          {/* <Text className='overTime'>(倒计时:{this.state.sec} s)</Text> */}
        </View>


        <Zlist colorCheck={this.state.colorCheck} userList={this.state.userList}></Zlist>
      </View>
    )
  }
}

export default App
