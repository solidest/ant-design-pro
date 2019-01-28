import React, { Component } from 'react';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/theme/rubyblue.css';

import ReactSVG from 'react-svg';
import flow from '../../assets/caseflow.svg';


Function.prototype.getMultiLine = function() {  
  var lines = new String(this);  
  lines = lines.substring(lines.indexOf("/*") + 2, lines.lastIndexOf("*/"));  
  return lines;  
}  

var code = function() {  
/*
设定重量:
  send:
    msg: weight
    interface: AD1
  
启动小车:
  cmd: start SmallCarStep(weight, towards)

读取牵引力:
  recv:
    msg: OutInfoMsg
    interface: COM1
  
模拟右行:
  cmd: f = resume SmallCarStep(OutInfoMsg.Pullforce, 'right')
  send:
    msg: Pos2Vol(f)
    interface: AD2
    
模拟左行:
  cmd: f = resume SmallCarStep(OutInfoMsg.Pullforce, 'left')
  send:
    msg: Pos2Vol(f)
    interface: AD2
    
单程结束:
  verdict: SmallCarStep<150*1000
*/  
} 

class Caseflow extends Component {
  componentDidMount() {
    const reditor = this.refs.code_editor.editor;
    console.log(reditor);
    reditor.setSize('100%', '580px');
  }

  render() {
    return (
      <div style={{ display: 'flex', height: '580px' }}>
        <div style={{ width: '40%', height: '100%', border: '1px solid #c7c7c7' }}>
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
        <div style={{ width: '60%', height: '100%', background: '#FCFCFC', textAlign: 'center', paddingTop: '20px'}}>
          <ReactSVG src={flow}/>
        </div>
      </div>
    );
  }
}

export default Caseflow;
