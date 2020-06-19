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
      sec: 300
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
    let s = 200
    let timeout = setInterval(() => {
      console.log(111);
      this.setState({
        sec: this.state.sec - 1
      })
    }, 1000)
    if (this.state.sec === 0) clearInterval(timeout)
  }

  componentDidMount() {
    this.overTime()
  }

  render() {
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
          <Text className='overTime'>(倒计时:{this.state.sec} s)</Text>
        </View>


        <Zlist colorCheck={this.state.colorCheck}></Zlist>
      </View>
    )
  }
}

export default App
