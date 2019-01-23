import React, { Component } from 'react';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/theme/rubyblue.css';

import { Table } from 'antd';


Function.prototype.getMultiLine = function() {  
  var lines = new String(this);  
  lines = lines.substring(lines.indexOf("/*") + 2, lines.lastIndexOf("*/"));  
  return lines;  
}  

var code = function() {  
/*
in: #输入
  weight: #重量
    - 0.4
    - 0.5
    - 4.5
    - 4.6
  p0: #位置0
    - 0
    - 1
    - 99
    - 100
  towards:
    - left
    - right
  speed:
    - 0
    - 5
    - 5.1
  p1: GetNextPos(p0, towards, speed)
          
out: #输出
  w_warning: #超重报警
    - weight>4.5: true
    - else: false
  p_warning: #超速报警
    - speed>5: true
    - else: false
  toleft: #左行指示
    - towards=='left': true
    - towards=='right': false
  toright: #右行指示
    - towards=='left': false
    - towards=='right': true
  break: #抱闸指示
    - p0==0 && p1==0: true
    - p0==100 && p1==100: true
    - else: false
*/  
} 

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '说明',
    dataIndex: 'notes',
    key: 'notes',
    width: '25%',
  },
  {
    title: '取值',
    dataIndex: 'valuelist',
    key: 'valuelist',
    width: '50%',
  },
];

const data = [
  {
    key: 0,
    name: 'in',
    notes: '输入',
    children: [
      {
        key: 1,
        name: 'weight',
        notes: '重量',
        valuelist: '0.4, 0.5, 4.5, 4.6',
      },
      {
        key: 2,
        name: 'p0',
        notes: '位置0',
        valuelist: '0, 1, 99, 100'
      },
      {
        key: 3,
        name: 'towards',
        notes: '方向',
        valuelist: 'left, right'
      },  
      {
        key: 4,
        name: 'speed',
        notes: '速度',
        valuelist: '0, 5, 5.1'
      },
      {
        key: 5,
        name: 'p1',
        notes: '位置1',
        valuelist: 'GetNextPos(p0, towardes, speed, 500)'
      }
    ]
  },
  {
    key: 10,
    name: 'out',
    notes: '输出',
    children: [
      {
        key:11,
        name: 'w_warning',
        notes: '超重报警',
        valuelist: 'weight>4.5: true; else: false;',
      },
      {
        key:12,
        name: 'p_warning',
        notes: '超速报警',
        valuelist: 'speed>5: true; else: false;',
      },
      {
        key:13,
        name: 'toleft',
        notes: '左行指示',
        valuelist: "towards=='left': true; towards=='right': false;",
      },
      {
        key:14,
        name: 'toright',
        notes: '右行指示',
        valuelist: "towards=='left': false; towards=='right': true;",
      },
      {
        key:15,
        name: 'break',
        notes: '抱闸指示',
        valuelist: 'p0==0 && p1==0: true; p0==100 && p1==100: true; else: false;',
      },
    ]
  }

];

class Casesequence extends Component {
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
        <div style={{ width: '60%', height: '100%', background: '#FCFCFC'}}>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    );
  }
}

export default Casesequence;
