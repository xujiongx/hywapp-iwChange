'use strict';
import { TouchableWithoutFeedback } from 'react-native'
import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import Zlist from './components/Zlist/Zlist'
import IMAGES from '../assets/index'

const hyExt = global.hyExt
const { ScrollView, View, Text, Image, Button, Tip } = UI

class App extends Component {
  constructor(props) {
    super(props)
    //上下滑动窗口
    this.$refs = React.createRef()
    this.state = {
      colorCheck: 1,
      // sec: 0,
      showImageP: '',
      showImageK: '',
      userInfo: {},
      userList: {}
    }
  }


  // 生命周期
  componentDidMount() {
    // this.overTime()
    this.getUserInfo()
    this.getShowImages()
    this.getUserList()
    hyExt.onLoad(() => {
      // this.messageEventListener()
    })
  }
  // 切换到P
  checkToP = () => {
    Tip.show(`切换到P成功!`, 1000, 'center')
    this.setState({
      colorCheck: 1,
    })
  }
  // 切换到K事件
  checkToK = () => {
    Tip.show(`切换到K成功!`, 1000, 'center')
    this.setState({
      colorCheck: 0,
    })
  }
  //获得显示图片地址
  getShowImages = () => {
    let obj = {
      url: 'https://huyaxiaochengxu123456.xyz:8080/user/findFile',
      method: 'GET',
      dataType: 'json'
    }
    hyExt.request(obj).then(res => {
      console.log('获取图片信息');
      
      console.log(res);
      // this.setState({
      //   showImageP: res.data.imgArr.P,
      //   showImageK: res.data.imgArr.K,
      // })
    }).catch(err => {
      console.log(err);
    })
    // this.setState({
    //   showImageP: 'https://x7ce6c529ad57cc7-cyvxhim7.hyext.com/extImg/ae60dec5c9/a7abf511a355a3c9.jpg',
    //   showImageK: 'https://x7ce6c529ad57cc7-cyvxhim7.hyext.com/extImg/ae60dec5c9/81c64865e10621b7.jpg',
    // })
  }
  // 获取用户点赞列表，目前只获取前十行
  getUserList = () => {
    console.log('获取用户点赞列表');
    let { colorCheck } = this.props
    let obj = {
      url: '',
      type: 'GET',
      data: {
        imageSelect: colorCheck
      },
      dataType: 'json'
    }
    hyExt.request(obj).then(res => {
      this.setState({
        userList: res.data.userList
      })
    })
    // this.setState({
    //   userList: {
    //     P: [
    //       { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
    //       { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' }, { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
    //     ],
    //     K: [
    //       { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
    //       { rowid: 2, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
    //       { rowid: 3, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
    //     ]
    //   }
    // })
  }
 // 获取用户信息
  getUserInfo=()=>{
    hyExt.context.getUserInfo().then(userInfo => {
      console.log('用户信息');
      console.log(userInfo);
      
      this.setState({
        userInfo
      })
    }).catch(err => {
      console.log(err);
    })
  }

  //点赞事件
  dianzhan = () => {
    //图片选择，根据id选择
    let imageId=null
    this.state.colorCheck==1?imageId= this.state.showImageP.id:imageId= this.state.showImageK.id;
    // 发送点赞请求
    let obj = {
      url: 'https://huyaxiaochengxu123456.xyz:8080/user/giveupa',
      method: 'POST',
      data: {
        message: '用户点赞',
        imageId,
        userInfo: this.state.userInfo,
        number: 1,
      },
      dataType: 'json'
    }
    hyExt.request(obj).then(res => {
      console.log(res);
      console.log(this.state.userInfo);
      
      Tip.show(`点赞成功!`, 2000, 'center')
    }).catch(err => {
      console.log(err);
    })


    // this.setState({
    //   userList: {
    //     P: [
    //       { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
    //       { rowid: 2, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一k颗小虎牙', countNumber: '90' },
    //     ],
    //     K: [
    //       { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
    //       { rowid: 2, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
    //       { rowid: 3, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
    //     ]
    //   }
    // })
  }


  //代办
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

  render() {
    // 倒计时显示
    // let timeText=null
    // this.state.sec==0?timeText=<Text className='overTime'>(倒计时结束)</Text>:timeText=<Text className='overTime'>(倒计时:{this.state.sec} s)</Text>;
    return (
      <ScrollView nestedScrollEnabled={true} scrollViewRef={this.$refs} >
        <View className={this.state.colorCheck === 1 ? 'container blue' : 'container red'}>
          <View className='pk'>
            <TouchableWithoutFeedback onPress={this.checkToP}>
              <View className='pf'>
                <Image src={IMAGES.P} className='p' alt="" />
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.checkToK}>
              <View className='kf'>
                <Image src={IMAGES.K} className='k' alt="" />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View className='image'>
            <Image src={this.state.colorCheck === 1 ? this.state.showImageP.src || IMAGES.FAIL : this.state.showImageK.src || IMAGES.FAIL} alt="" className='mainImage' />
          </View>

          <TouchableWithoutFeedback onPress={this.dianzhan}>
            <View className='count'>
              <Image src={IMAGES.DIANZHAN} className='onloadImage' alt="" />
            </View>
          </TouchableWithoutFeedback>

          {/* {timeText} */}
          {/* <Text className='overTime'>(倒计时:{this.state.sec} s)</Text> */}



          <Zlist colorCheck={this.state.colorCheck} userList={this.state.userList}></Zlist>
        </View>
      </ScrollView>

    )
  }
}

export default App
