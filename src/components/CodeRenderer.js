import React, { Component } from 'react'
import Lowlight from 'react-lowlight'
import shallowCompare from 'react-addons-shallow-compare'
import python from 'highlight.js/lib/languages/python'
import '../../node_modules/highlight.js/styles/atom-one-dark.css'

Lowlight.registerLanguage('python', python)

export default class CodeRenderer extends Component {
  constructor (props) {
    super(props)
    this.propTypes = {
      literal: React.PropTypes.string,
      language: React.PropTypes.string,
      inline: React.PropTypes.bool,
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    return (
      <Lowlight
        language={this.props.language || 'python'}
        value={this.props.literal}
        inline={this.props.inline}
      />
    )
  }
}
