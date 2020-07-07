'use strict';
import { TouchableWithoutFeedback} from 'react-native'
import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import Zlist from './components/Zlist/Zlist'
import Tips from './components/Tips/Tips'
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
      userList: {},
      imgIdArr: []
    }
  }


  // 生命周期
  UNSAFE_componentWillMount() {
    // this.overTime()
    this.getUserInfo()
    this.getShowImages()
    hyExt.onLoad(() => {
      // this.messageEventListener()
    })
  }
  // 切换到P
  checkToP = () => {
    Tip.show(`切换到P成功!`, 500, 'center')
    this.setState({
      colorCheck: 1,
    })
    this.getShowImages()
  }
  // 切换到K事件
  checkToK = () => {
    Tip.show(`切换到K成功!`, 500, 'center')
    this.setState({
      colorCheck: 0,
    })
    this.getShowImages()
  }

  // 获取用户信息
  getUserInfo = () => {
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
  //获得显示图片地址
  getShowImages = () => {
    let obj = {
      url: 'https://huyaxiaochengxu123456.xyz:8080/user/findFile',
      method: 'GET',
      dataType: 'json'
    }
    hyExt.request(obj).then(res => {
      let { imageP, imageK } = res.data.data.imgArr
      let { src: psrc, id: pid } = imageP
      let { src: ksrc, id: kid } = imageK
      console.log('获取图片信息');
      console.log(res);
      this.setState({
        showImageP: psrc,
        showImageK: ksrc,
        imgIdArr: [kid, pid]
      })
      console.log(this.state.imgIdArr);

    })
      .then(() => {
        this.getUserList()
      })
      .catch(err => {
        console.log(err);
      })
  }
  // 获取用户点赞列表，目前只获取前十行
  getUserList = () => {
    console.log('获取用户点赞列表');
    let { imgIdArr } = this.state
    let obj = {
      url: 'https://huyaxiaochengxu123456.xyz:8080/user/findUser',
      method: 'POST',
      data: {
        message: '获取用户点赞列表',
        imgIdArr
      },
      dataType: 'json'
    }
    hyExt.request(obj).then(res => {
      console.log(res);
      this.setState({
        userList: res.data.data.userList
      })
    }).catch(err => {
      console.log(err);

    })

  }


  //点赞事件
  giveLive = () => {
    let { colorCheck, imgIdArr, userInfo } = this.state
    //图片选择，根据id选择
    let imageId = null
    this.state.colorCheck == 1 ? imageId = imgIdArr[1] : imageId = imgIdArr[0];
    console.log("点赞", imageId, colorCheck, userInfo);
    // 发送点赞请求
    let obj = {
      url: 'https://huyaxiaochengxu123456.xyz:8080/user/giveupa',
      method: 'POST',
      data: {
        message: '用户点赞',
        imageId,
        imageSelect: colorCheck,
        userInfo,
        number: 1,
      },
      dataType: 'json'
    }
    hyExt.request(obj).then(res => {
      console.log(res);
      // console.log(this.state.userInfo);

      Tip.show(`点赞成功!`, 2000, 'center')
    })
      .then(() => {
        this.getUserList()
      })
      .catch(err => {
        console.log(err);
      })
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
  //   }, 500)

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
          <Tips colorCheck={this.state.colorCheck} />

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

          <View>
            <Image src={this.state.colorCheck === 1 ? this.state.showImageP || IMAGES.FAIL : this.state.showImageK || IMAGES.FAIL} alt="" className='mainImage' />
          </View>

          <TouchableWithoutFeedback onPress={this.giveLive}>
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
