import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    let my_string = 'overflow contents ';

    for(let i = 0; i < 1000; i++) {
      my_string += 'overflow contents ';
    }

    return <div style={{padding: '200px 300px', height: '100vh', boxSizing: 'border-box'}}>
      <Example>
      {/* <div style={{width: '100%', height: '100%', overflow: 'scroll'}}> */}
        <div style={{width: '2000px', height: '2000px', backgroundColor: 'rgba(200, 0, 0, 0.5)'}}/>
      {/* </div>/ */}
      </Example>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
