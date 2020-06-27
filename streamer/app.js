import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'
import Zlist from './components/Zlist/Zlist'
import IMAGES from '../assets/index'

const hyExt = global.hyExt
const { View, Text, Image, Button, Tip, Dialog, Radio } = UI

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorCheck: 1,  //主题切换
      value: 0,
      imageP: '',     //P的图片预览
      imageK: '',     //K的图片预览
      showImageP: '', //P的图片显示
      showImageK: '', //K的图片显示
      userList: {}    //用户点赞列表
    }
  }

  //生命周期
  componentDidMount() {
    this.getShowImages()
    this.getUserList()
  }

  // 切换到P
  checkToP = () => {
    Tip.show(`切换到P成功l!`, 500, 'center')
    this.setState({
      colorCheck: 1,
    })
  }
  // 切换到K
  checkToK = () => {
    Tip.show(`切换到K成功1!`, 500, 'center')
    this.setState({
      colorCheck: 0,
    })
  }
  // 上传图片
  imageUpLoadP = () => {
    hyExt.logger.info('上传图片,')
    hyExt.fs.uploadImg().then(imgInfo => {
      this.setState({
        imageP: imgInfo.url
      })
      Tip.show('上传P成功', 1000, 'center')
    }).catch(err => {
      hyExt.logger.info('上传图片失败，错误信息：' + err.message)
      Tip.show('上传失败，请重新上传', 1000, 'center')

    })

  }
  imageUpLoadK = () => {
    hyExt.logger.info('上传图片,')
    hyExt.fs.uploadImg().then(imgInfo => {
      this.setState({
        imageK: imgInfo.url
      })
      Tip.show('上传P成功', 1000, 'center')
    }).catch(err => {
      hyExt.logger.info('上传图片失败，错误信息：' + err.message)
      Tip.show('上传失败，请重新上传', 1000, 'center')
    })

  }
  //点击上传图片
  dianzhan = () => {
    // 打开上传图片弹窗
    this._modalA.open()
  }
  // 向后端发送图片地址
  setImageArr = () => {
    let { imageP, imageK } = this.state
    // let args = {
    //   url: 'https://localhost:3000/getImages',
    //   method: 'POST',
    //   data: {
    //     msg: '发送主播选定图片地址',
    //     imgArr: { imageP, imageK }
    //   },
    //   dataType: 'json'
    // }
    // this.state.imgArr ? (hyExt.request(args).then(resp => {
    //   hyExt.logger.info('发送HTTP请求成功，返回：' + JSON.stringify(resp))
    // }).catch(err => {
    //   hyExt.logger.info('发送HTTP请求失败，错误信息：' + err.message)
    // })) : Tip.show("请上传图片", 1000, 'center')
    console.log({
      msg: 'success',
      imgArr: { imageP, imageK }
    })
    this.getShowImages()
    this.cleanImage()
  }
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
    //     showImageP:res.data.imageP,
    //     showImageK:res.data.imageK,
    //   })
    // }).catch(err => {
    //   console.log(err);

    // })
    this.setState({
      showImageP: this.state.imageP,
      showImageK: this.state.imageK,
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
          { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎呀', countNumber: '100' },
          // { rowid: 2, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          // { rowid: 3, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          // { rowid: 4, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          // { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' }, { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我', countNumber: '100' }, { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' }, { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙vsdcsdcd', countNumber: '100' }, { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' }, { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎', countNumber: '100' },
        ],
        K: [
          { rowid: 1, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          { rowid: 2, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
          { rowid: 3, userAvatarUrl: 'https://huyaimg.msstatic.com/avatar/1004/ae/60dec5c9af3bd927bce507b1e7626a_180_135.jpg?1591330880', userNick: '我是一颗小虎牙', countNumber: '100' },
        ]
      }
    })
  }
  //清空预览图片
  cleanImage = () => {
    this.setState({
      imageP: '',
      imageK: ''
    })
  }

  //待做
  //向客户端设置倒计时
  // setOverTime = () => {
  //   let { value } = this.state
  //   hyExt.observer.emit('message-push', value).then((res) => {
  //     console.log("设置倒计时成功")
  //   }
  //   ).catch((err) => {
  //     console.log(err);
  //   })
  //   this.startOverTime()
  // }

  render() {
    return (
      <View className={this.state.colorCheck === 1 ? 'container blue' : 'container red'}>
        {/* PK按钮 */}
        <View className='pk'>
          <View className='pf'>
            <Image src={IMAGES.P} className='p' alt="" onClick={this.checkToP} />
          </View>
          <View className='kf'>
            <Image src={IMAGES.K} className='k' alt="" onClick={this.checkToK} />
          </View>
        </View>

        {/* 图片渲染 */}
        <View className='image'>
          <Image src={this.state.colorCheck === 1 ? (this.state.showImageP || IMAGES.FAIL) : (this.state.showImageK || IMAGES.FAIL)} alt="" className='mainImage' />
        </View>

        {/* 上传图片按钮 */}
        <View className='count' onClick={this.dianzhan}>
          <Image src={IMAGES.LOADIMAGE} className='onloadImage' alt="" />
        </View>

        {/* 时间选择 (待办)*/}
        {/* <View className='timeSelect'>
          <Button className='tiemSelectStyle' type='info' size='sm' onPress={() => { this._dialog1.open() }} >时间抉择</Button>
        </View> */}


        {/* 列表组件 params(colorCheck,userList) */}
        <Zlist colorCheck={this.state.colorCheck} userList={this.state.userList}></Zlist>


        {/* 图片上传弹窗 */}
        <Dialog
          ref={(c) => { this._modalA = c; }}
          title='上传图片'
          body={
            //  <FileUpLoad></FileUpLoad>
            <View className='uploadButtonClub'>
              {this.state.imageP == '' ?
                <Button className='uploadButton' type='info' size='sm' onPress={() => { this.imageUpLoadP() }}>P图片</Button> :
                <Image className='uploadButton' src={this.state.imageP}></Image>}
              {this.state.imageK == '' ?
                <Button className='uploadButton' type='danger' size='sm' onPress={() => { this.imageUpLoadK() }}>K图片</Button> :
                <Image className='uploadButton' src={this.state.imageK}></Image>}
            </View>
          }
          cancelCallback={() => {
            console.log('cancel')
            this.cleanImage()
          }}
          confirmCallback={() => {
            console.log('confirm')
            this.setImageArr()
            this.getShowImages()
            this.getUserList()
          }}
        >

        </Dialog>
        
        {/* <FileUpLoad>haha</FileUpLoad> */}

        {/* 时间抉择弹窗 */}
        {/* <Dialog
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
        /> */}
      </View>
    )
  }
}

export default App
