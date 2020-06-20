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
      sec: 0
    }
  }


  checkToP = () => {
    Tip.show(`切换到P成功!`, 2000, 'center')
    this.setState({
      colorCheck: 1,
    })
  }
  checkToK = () => {
    Tip.show(`切换到K成功!`, 2000, 'center')
    this.setState({
      colorCheck: 0,
    })
  }
  //点赞事件
  dianzhan = () => {
    let a = 1
    Tip.show(`点赞成功!${a}`, 2000, 'center')
  }

  //倒计时事件
  overTime = () => {
    let timeout = setInterval(() => {
      console.log(111);
      this.setState({
        sec: this.state.sec - 1
      })
      if (this.state.sec == 0) clearInterval(timeout)
    }, 1000)
    
  }

  componentDidMount() {
    // this.overTime()
    hyExt.onLoad(()=>{
      this.messageEventListener()
    })
  }

  // 接受主播端倒计时
  messageEventListener=()=>{
    hyExt.observer.on('message-push', sec => {
      console.log("[message]:",sec);    //监听到message-push消息后打印出来
      this.setState({
        sec:sec
      })
      this.overTime()
    })
  }

  render() {
    // 倒计时显示
    let timeText=null
    this.state.sec==0?timeText=<Text className='overTime'>(倒计时结束)</Text>:timeText=<Text className='overTime'>(倒计时:{this.state.sec} s)</Text>;
    return (
      <View className={this.state.colorCheck === 1 ? 'container blue' : 'container red'}>
        <View className='pk'>
          <View className='pf'>
            <img src={IMAGES.P} className='p' alt="" onClick={this.checkToP} />
          </View>
          <View className='kf'>
            <img src={IMAGES.K} className='k' alt="" onClick={this.checkToK} />
          </View>


        </View>

        <View className='image'>
          <img src={this.state.colorCheck === 1 ? IMAGES.FENGMIAN : IMAGES.CC} alt="" className='fengmianImage' />
        </View>

        <View className='count' onClick={this.dianzhan}>
          <img src={IMAGES.DIANZHAN} className='onloadImage' alt="" />
          {timeText}
          {/* <Text className='overTime'>(倒计时:{this.state.sec} s)</Text> */}
        </View>


        <Zlist colorCheck={this.state.colorCheck}></Zlist>
      </View>
    )
  }
}

export default App
