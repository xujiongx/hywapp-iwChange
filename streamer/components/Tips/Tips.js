"use strict";
import { TouchableWithoutFeedback, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { UI } from '@hyext/hy-ui'
import './Tips.hycss'
import IMAGES from '../../../assets/index'

const { ScrollView, View, Text, Icon, SlideModal, Dropdown, Button, Image } = UI
const hyExt = global.hyExt
const window = Dimensions.get('window')

class Tips extends React.Component {
    constructor(props) {
        super(props)
        this.$refs = React.createRef()
        this.state = {
            value: 0,
            data:
                [
                    {
                        label: '历史记录',
                        value: 1
                    },
                    {
                        label: '使用说明',
                        value: 2
                    }
                ]

        }
    }


    open(emitter, responsor, { xKey, yKey }) {
        emitter.measure((fx, fy, width, height, px, py) => {
            this.setState({
                [xKey]: window.width - 91,
                [yKey]: py + height
            }, () => {
                responsor.open()
            })
        })
    }

    handleChange = (value) => {
        // this.setState({
        //     value: value
        // })
        if (value == 2) {
            this.slideModalHelp.open()
        }
    }

    render() {
        const { value, data } = this.state
        return (
            <View className='helper'>
                <Button
                    size='sm'
                    style={{
                        width: 40,
                        height: 20,
                        borderRadius: 20,
                        backgroundColor: 'none',
                        borderWidth: 0,
                    }}
                    ref={(c) => {
                        this.btnEl = c
                    }}
                    onPress={() => {
                        // this.slideModalA.open()
                        this.open(this.btnEl, this.dropdown, {
                            xKey: 'offsetX',
                            yKey: 'offsetY'
                        })
                    }}>
                    <View >
                        <Icon type='plus-circle-o' size={20} tintColor={this.props.colorCheck === 1 ? "rgb(249,101,116)" : "rgb(0,126,239)"} />

                    </View>

                </Button>

                {/* 下拉选项 */}
                <Dropdown
                    className='dropdown'
                    ref={(c) => {
                        this.dropdown = c
                    }}
                    checkedIcon={null}
                    uncheckedIcon={null}
                    offsetX={this.state.offsetX}
                    offsetY={this.state.offsetY}
                    cancelable={true}
                    // value={value}
                    data={data}
                    onChange={this.handleChange}
                />

                {/* 小程序介绍弹窗 */}
                <SlideModal
                    ref={(c) => { this.slideModalHelp = c }}
                    cancelable={true}>
                    <View
                        className={this.props.colorCheck === 0 ? 'blue' : 'red'}
                        style={{
                            width: window.width,
                            paddingHorizontal: 10,
                        }}

                    >
                        {/* 标题和关闭 */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text >使用说明</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    this.slideModalHelp.close()
                                }}>
                                <Text style={{ textAlign: 'right', marginTop: -2, fontSize: 30, color: '#aaa' }}>
                                    &times;
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {/* 自定义内容 */}
                        <View
                            style={{
                                backgroundColor: 'white',
                                // alignItems: 'center',
                                // justifyContent: 'center',
                                height: 500,
                                borderRadius: 10,
                                padding: 10,
                            }}>
                            <ScrollView
                                nestedScrollEnabled={true}
                                showsVerticalScrollIndicator={false}
                                scrollViewRef={this.$refs}
                            >
                                {/* 自定义内容 */}
                                <View className='help'>
                                    <Text numberOfLines={3}>
                                        1.点击小程序中部“上传图片”按钮，点击跳出方框的左侧“P图片”按钮，选择图片并点击打开，等待上传成功提示出现后，再点击K图片按钮，进行上述操作
                                    </Text>
                                    <Image className='helpImages' src={IMAGES.SHELP1}></Image>

                                    <Text numberOfLines={3}>
                                        2.P图片与K图片都上传成功后点击确定进入下一步，如要修改之前上传图片，请点击取消，重新进行上述1号步骤操作
                                    </Text>
                                    <Image className='helpImages'  src={IMAGES.SHELP2}></Image>
                                    <Text numberOfLines={3}>
                                        3.点击头部P或K切换红蓝选项描述图，底部助力列表展示观众点赞信息，通过下滑查看点赞信息可以快速确定观众对红蓝选项的支持度。
                                    </Text>
                                    <Image className='helpImages' style={{ height: 350 }} src={IMAGES.SHELP3}></Image>
                                </View>
                            </ScrollView>


                        </View>
                        {/* 底部 */}
                        <View
                            style={{ minHeight: 20 }}>
                            <SafeAreaView style={{ flex: 1 }}>
                                <View style={{ height: 20 }}></View>
                            </SafeAreaView>
                        </View>
                    </View>
                </SlideModal>
            </View>
        )
    }
}

export default Tips;