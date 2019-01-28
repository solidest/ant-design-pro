import React, { Component } from 'react';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/theme/rubyblue.css';

import ReactSVG from 'react-svg';
import flow from '../../assets/casesequence.svg';


Function.prototype.getMultiLine = function() {  
  var lines = new String(this);  
  lines = lines.substring(lines.indexOf("/*") + 2, lines.lastIndexOf("*/"));  
  return lines;  
}

var code = function() {  
/*
设置重量:
  send: 
    msg: Weight
    interface: AD1
设置位置0:
  send:
    msg: P0
    interface: AD2
  timer1: timer(500)
读取超重报警:
  recv:
    msg: w_warning
    interface: DO2
设置位置1:
  timer1:
    when: timeout
    send: P1
读取超速报警:
  recv:
    msg: s_warning
    interface: DO3
读取方向指示:
  recv:
    msg: toleft
    interface: DO8
  recv:
    msg: toright
    interface: DO9
读取抱闸状态:
  recv:
    msg: isbreak
    interface: DO7
*/  
} 



class Casesequence extends Component {
  componentDidMount() {
    const reditor = this.refs.code_editor.editor;
    console.log(reditor);
    reditor.setSize('100%', '580px');
  }

  render() {
    return (
      <div style={{ display: 'flex', height: '580px' }}>
        <div style={{ width: '20%', height: '100%', border: '1px solid #c7c7c7' }}>
          <CodeMirror
            ref="code_editor"
            value={code.getMultiLine()}
            options={{
              mode: 'yaml',
              theme: 'rubyblue',
              lineNumbers: true,
            }}
          />
        </div>
        <div style={{ width: '80%', height: '100%', background: '#FCFCFC', textAlign: 'center', paddingTop: '20px'}}>
          <ReactSVG src={flow}/>
        </div>
      </div>
    );
  }
}

export default Casesequence;

/*
sequenceDiagram
    Tester->>AD1:Weight
    Tester->>+AD2:p0
    DO2-->>Tester:w_warning
    Tester->>-AD2:p1
    DO3-->>Tester:p_warning
    DO8/DO9-->>Tester:left/right
    DO7-->>Tester:isbreak
*/
