/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { Platform, StyleSheet, View, NativeModules, Alert } from "react-native"
import _ from "lodash"
import Video from "react-native-video"

NativeModules.HelloWorld.greeting("stayfoolish") //  오브젝티브-C 모듈 생성 후 호출

console.log("Random number: " + _.random(0, 5)) // lodash 랜덤 숫자 예제

console.log("What OS am I using?")
console.log(Platform.OS) // 플랫폼이 무엇인지 확인

class App extends Component {
  componentDidMount() {
    Alert.alert("안녕!", "동영상이 재생될거야")
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={require("./warbler.mp4")} // URL이나 local 파일을 지정할 수 있다.
          rate={1.0} // 0은 일시정지, 1은 정상 속도
          volume={1.0} // 0은 음소거, 1은 정상 음량
          muted={false} // 오디오를 완전히 음소거
          paused={false} // 비디오를 완전히 일시 정지
          // resizeMode="cover" // 화면 비율을 유지한 채로 화면 가득 채움
          repeat={false} // 무한 반복
          style={styles.fullScreen}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS === "ios" ? "#7FF764" : "#7FF7FF" // os에 따라 배경색을 다르게 설정
  },
  fullScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})

export default App
