import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import Zlist from './components/Zlist/Zlist'
import IMAGES from '../assets/index'

const hyExt = global.hyExt
const { View, Text, Image, Button, Tip, Modal,Form,Input } = UI

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorCheck: 1,
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
    this._modalA.open()
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
          <img src={IMAGES.LOADIMAGE} className='onloadImage' alt="" />
        </View>

       <Modal  ref={(c) => { this._modalA = c; }}>
         <View>
           <Form>
             <Form.Item label='fileload'>
               
             </Form.Item>
           </Form>
         </View>
       </Modal>


        <Zlist colorCheck={this.state.colorCheck}></Zlist>
      </View>
    )
  }
}

export default App
