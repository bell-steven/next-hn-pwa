import React, { Component } from 'react'
import 'isomorphic-unfetch'
import Content from '../components/content'

export default class extends Component {
  static async getInitialProps() {
    const req = await fetch('https://node-hnapi.herokuapp.com/newest')
    const stories = await req.json()
    return { stories }
  }

  // componentDidMount() {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/service-worker.js')
  //       .then(registration => {
  //         console.log('service worker registration successful')
  //       })
  //       .catch(err => {
  //         console.warn('service worker registration failed', err.message)
  //       })
  //   }
  // }

  render() {
    return <Content data={this.props.stories} />
  }
}
