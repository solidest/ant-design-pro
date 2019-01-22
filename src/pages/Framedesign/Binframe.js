import React, { Component } from 'react';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/theme/rubyblue.css';

import { Table } from 'antd';

var code = 'OutInfoMsg:\n    Header:\n        SegmentType: uint16\n        ConstValue: 0xAA55\n    Len:\n';
    code += '        SegmentType: uint8\n        ConstValue: 22\n    Ctltoken:\n        SegmentType: uint8\n        ConstValue: 0xFB\n';
    code += '    Position:\n        SegmentType: double\n    Weight:\n        SegmentType: double\n    Speed:\n        SegmentType: double\n';
    code += '    SpeedTowards:\n    	SegmentType: uint8\n    SpeedWarnning:\n        SegmentType: uint8\n    WeightWarnning:\n        SegmentType: uint8\n';
    code += '    BreakInfo:\n        SegmentType: uint8\n    Pullforce:\n    	SegmentType: double\n    OutTowards:\n    	SegmentType: uint8\n';
    code += '    CheckSum:\n        SegmentType: uint8\n        Check: sum8\n    Ending:\n        SegmentType: uint16\n        ConstValue: 0xAA55\n';
    code += '\nCmdMsg:\n     Header:\n        SegmentType: uint16\n        ConstValue: 0xAA55\n     Code:\n        SegmentType: uint8\n';
    code += '        ConstValue: 0xFA\n     Unbreak:\n        SegmentType: uint8\n        ConstValue: 0x01\n     CheckSum:\n        SegmentType: uint8\n';
    code += '        Check: sum8\n     Ending:\n        SegmentType: uint16\n        ConstValue: 0xAA55\n';

const columns = [
  {
    title: '属性',
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
    key: 1,
    name: 'weight',
    notes: '重量',
    valuelist: '0.4, 0.5, 4.5, 4.6',
  },
  {
    key: 2,
    name: 'posinfo',
    notes: '位置信息',
    children: [
      {
        key: 21,
        name: 'start',
        notes: '起始位置和方向',
        valuelist:
          '{p0: 0, towards: right}, {p0: 1, towards: right}, {p0: 1, towards: left}, {p0: 99, towards: right}, {p0: 99, towards: left}, {p0: 100, towards: left}',
      },
      {
        key: 22,
        name: 'speed',
        notes: '行进速度',
        valuelist: '0, 5, 5.1',
      },
    ],
  },
];

class Binframe extends Component {
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
            value={code}
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

export default Binframe;
