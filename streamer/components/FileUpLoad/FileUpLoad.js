import React from 'react'
import { UI } from '@hyext/hy-ui'
import './FileUpLoad.hycss'

const { View, Text, Form, Button, Tip } = UI
const hyExt = global.hyExt

export default class FileUpLoad extends React.Component {
    constructor() {
        super()
        this.state = {
            imgArr: [],
            streamerRoomId: ''
        }
    }

    // 向后端发送图片地址
    setImageArr = () => {
        let args = {
            url: '',
            method: 'POST',
            data: {
                imgArr: this.state.imgArr
            },
            dataType: 'json'
        }
        hyExt.request(args).then(resp => {
            hyExt.logger.info('发送HTTP请求成功，返回：' + JSON.stringify(resp))
        }).catch(err => {
            hyExt.logger.info('发送HTTP请求失败，错误信息：' + err.message)
        })
    }

    getStreamInfo = () => {
        hyExt.logger.info('获取当前直播间主播信息')
        hyExt.context.getStreamerInfo().then(streamerInfo => {
            hyExt.logger.info('获取当前直播间主播信息成功，返回：' + JSON.stringify(streamerInfo))
            console.log(streamerInfo);
            console.log(this.state.imgArr)
            let { streamerRoomId } = streamerInfo
            this.setState({
                streamerRoomId
            })
        }).catch(err => {
            hyExt.logger.info('获取当前直播间主播信息失败，错误信息：' + err.message)
        })
    }
    // 上传图片
    imageUpLoad = () => {
        hyExt.logger.info('上传图片,')
        hyExt.fs.uploadImg().then(imgInfo => {
            console.log(imgInfo);
            let newImageArr = this.state.imgArr
            newImageArr.push(imgInfo)
            this.setState({
                imgArr: newImageArr
            })
            Tip.show('上传成功', 1000, 'center')

        }).catch(err => {
            hyExt.logger.info('上传图片失败，错误信息：' + err.message)
            Tip.show('上传失败，请重新上传', 1000, 'center')

        })

    }

    render() {
        return (
            <View>
                <View className='uploadButtonClub'>
                    <Button className='uploadButton' type='info' size='sm' onPress={() => { this.imageUpLoad() }}>图片1</Button>
                    <Button className='uploadButton' type='danger' size='sm' onPress={() => { this.imageUpLoad() }}>图片2</Button>
                </View>

                {/* <Text onClick={() => { this.getStreamInfo() }}>huoqu</Text> */}
            </View>
        )
    }
}
