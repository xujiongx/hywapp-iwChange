"use strict";
import { TouchableWithoutFeedback, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { UI } from '@hyext/hy-ui'
import './Tips.hycss'

const { ScrollView, View, Text, Icon, SlideModal, Dropdown, Button } = UI
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
                    // {
                    //     label: '主页',
                    //     value: 1
                    // },
                    {
                        label: '历史记录',
                        value: 2
                    },
                    {
                        label: '使用说明',
                        value: 3
                    }
                ]

        }
    }


    open(emitter, responsor, { xKey, yKey }) {
        emitter.measure((fx, fy, width, height, px, py) => {
            this.setState({
                [xKey]: 0,
                [yKey]: 0
            }, () => {
                responsor.open()
            })
        })
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
        if (value == 3) {
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
                    offsetX={this.state.offsetX}
                    offsetY={this.state.offsetY}
                    cancelable={true}
                    value={value}
                    data={data}
                    onChange={this.handleChange}
                />

                {/* 小程序介绍弹窗 */}
                <SlideModal
                    ref={(c) => { this.slideModalHelp = c }}
                    cancelable={true}>
                    <View
                        style={{
                            width: window.width,
                            backgroundColor: 'rgb(197, 241, 254)',
                            paddingHorizontal: 10,
                        }}>
                        {/* 标题和关闭 */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text >我是标题</Text>
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
                                backgroundColor: '#F5F5F5',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 400,
                            }}>
                            <ScrollView
                                nestedScrollEnabled={true}
                                scrollViewRef={this.$refs}>
                                <View>
                                    <View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View>
                                    <View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View>
                                    <View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View>
                                    <View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View>
                                    <View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View><View>
                                        <Text>hah</Text>
                                        <Text>hah</Text>
                                    </View>
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