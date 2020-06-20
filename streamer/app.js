import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import Zlist from './components/Zlist/Zlist'
import FileUpLoad from './components/FileUpLoad/FileUpLoad'
import IMAGES from '../assets/index'

const hyExt = global.hyExt
const { View, Text, Image, Button, Tip, Modal, Form, Input, Dialog ,Radio} = UI

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorCheck: 1,
      value:0,
    }
  }

// 切换到P
  checkToP = () => {
    Tip.show(`切换到P成功!`, 2000, 'center')
    this.setState({
      colorCheck: 1,
    })
  }
  // 切换到K
  checkToK = () => {
    Tip.show(`切换到K成功!`, 2000, 'center')
    this.setState({
      colorCheck: 0,
    })
  }
  //点击上传图片
  dianzhan = () => {
    this._modalA.open()
  }

  //设置倒计时
  setOverTime=()=>{
    let {value}=this.state
    hyExt.observer.emit('message-push',value).then((res)=>{
      console.log("设置倒计时成功")}
    ).catch((err)=>{
      console.log(err);
    })
    this.startOverTime()
  }
  // 启动倒计时
  startOverTime=()=>{
    let overtime= setInterval(()=>{
      this.setState({
        value:this.state.value-1
      })
      if(this.state.value==0) clearInterval(overtime)
    },1000)
  }

  render() {

    let timeText=null;
    // this.
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
          <img src={IMAGES.LOADIMAGE} className='onloadImage' alt="" />
        </View>
        {/* 时间选择 */}
        <View className='timeSelect'>
          <Button className='tiemSelectStyle' type='info' size='sm' onPress={() => { this._dialog1.open() }} >时间抉择</Button>
        </View>


        {/* 列表组件 */}
        <Zlist colorCheck={this.state.colorCheck}></Zlist>


        {/* 图片上传弹窗 */}
        <Dialog
         ref={(c) => { this._modalA = c; }}
         title='上传图片'
         body={
           <FileUpLoad></FileUpLoad>
         }>
          
        </Dialog>
        {/* 时间抉择弹窗 */}
        <Dialog
          ref={(c) => {
            this._dialog1 = c
          }}
          cancelable={true}
          title='时间抉择'
          body={
            <Radio
              value={this.state.value}
              onChange={(value) => {
                this.setState({
                  value
                })
              }}>

              <Radio.Item label='1分钟' value={60} />
              <Radio.Item label='5分钟' value={300} />
              <Radio.Item label='10分钟' value={600} />
            </Radio>
          }
          cancelCallback={() => {
            console.log('cancel')
          }}
          confirmCallback={() => {
            console.log('confirm')
            this.setOverTime()
          }}
        />
      </View>
    )
  }
}

export default App
