import React, { Component } from 'react'
import WebView from 'react-native-webview'

export default class App extends Component {
  render() {
    return <WebView source={{ uri: 'http://mct.ict.up.ac.th:10007/farmer/#/' }} style={{ marginTop: 0 }} />
  }
}