
import React, { Component } from 'react';

import { Tooltip, Button } from 'antd';

import {UnControlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import "codemirror/mode/lua/lua";
import "codemirror/theme/rubyblue.css";

import { Table } from 'antd';

const code = '--将位置转换为电压值\nfunction Pos2Vol(pos)\n    return pos/25+0.5;\nend;'


      

class Converfun extends Component{


  componentDidMount() {
    const reditor = this.refs.code_editor.editor;
    console.log(reditor);
    reditor.setSize('100%', '580px');
  }

  render() {
    return(
      <div style={{ display: "flex", height: '580px'}}>
        <div style={{ width: '20%', height: '100%', background: 'white', border: '1px solid #c7c7c7' }}>
        <Tooltip placement="topLeft" title="将重量转为电压值" arrowPointAtRight>
          <Button style={{width: '100%'}}>Weight2Vol</Button>
        </Tooltip>
        <Tooltip placement="topLeft" title="将位置转换为电压值" arrowPointAtRight>
          <Button type="primary" style={{width: '100%'}}>Pos2Vol</Button>
        </Tooltip>
        <Tooltip placement="topLeft" title="根据上个位置与时间计算下个位置" arrowPointAtRight>
          <Button style={{width: '100%'}}>GetNextPos</Button>
        </Tooltip>
        </div>
        <div style={{ width: '80%', height: '100%' }}>
        <CodeMirror
            ref='code_editor'
            value = {code}
            options = {{
              mode: 'lua',
              theme: 'rubyblue',
              lineNumbers: true
            }}
          />
        </div>
      </div>
    );  
  }
}

export default Converfun;
