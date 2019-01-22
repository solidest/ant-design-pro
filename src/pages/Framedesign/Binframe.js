import React, { Component } from 'react';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/theme/rubyblue.css';

import { Table } from 'antd';

var code = 'OutInfoMsg:\n    Header:\n        SegmentType: uint16\n        ConstValue: 0xAA55\n    Len:\n';
    code += '        SegmentType: uint8\n        ConstValue: 22\n    Ctltoken:\n        SegmentType: uint8\n        ConstValue: 0xFB\n';
    code += '    Position:\n        SegmentType: float\n    Weight:\n        SegmentType: float\n    Speed:\n        SegmentType: float\n';
    code += '    SpeedTowards:\n    	SegmentType: uint8\n    SpeedWarnning:\n        SegmentType: uint8\n    WeightWarnning:\n        SegmentType: uint8\n';
    code += '    BreakInfo:\n        SegmentType: uint8\n    Pullforce:\n    	SegmentType: float\n    OutTowards:\n    	SegmentType: uint8\n';
    code += '    CheckSum:\n        SegmentType: uint8\n        Check: sum8\n    Ending:\n        SegmentType: uint16\n        ConstValue: 0xAA55\n';
var code2 = '\nCmdMsg:\n     Header:\n        SegmentType: uint16\n        ConstValue: 0xAA55\n     Code:\n        SegmentType: uint8\n';
    code2 += '        ConstValue: 0xFA\n     Unbreak:\n        SegmentType: uint8\n        ConstValue: 0x01\n     CheckSum:\n        SegmentType: uint8\n';
    code2 += '        Check: sum8\n     Ending:\n        SegmentType: uint16\n        ConstValue: 0xAA55\n';

const columns = [
  {
    title: '字段',
    dataIndex: 'segment',
    key: 'segment',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    width: '25%',
  },
  {
    title: '属性',
    dataIndex: 'pros',
    key: 'pros',
    width: '50%',
  },
];

const data = [
  {
    key: 1,
    segment: 'Header',
    type: 'uint16',
    pros: '{ConstValue: 0xAA55}'
  },
  {
    key: 2,
    segment: 'Len',
    type: 'uint8',
    pros: '{ConstValue: 22}'
  },
  {
    key: 3,
    segment: 'Ctltoken',
    type: 'uint8',
    pros: '{ConstValue: 0xFB}'
  },
  {
    key: 4,
    segment: 'Position',
    type: 'float'
  },
  {
    key: 5,
    segment: 'Weight',
    type: 'float'
  },
  {
    key: 6,
    segment: 'Speed',
    type: 'float'
  },
  {
    key: 7,
    segment: 'Speedtowards',
    type: 'uint8',
  },
  {
    key: 8,
    segment: 'SpeedWarnning',
    type: 'uint8'
  },
  {
    key: 9,
    segment: 'WeightWarnning',
    type: 'uint8'
  },
  {
    key: 10,
    segment: 'BreakInfo',
    type: 'uint8'
  },
  {
    key: 11,
    segment: 'Pullforce',
    type: 'float'
  },
  {
    key: 12,
    segment: 'OutTowards',
    type: 'uint8'
  },
  {
    key: 13,
    segment: 'CheckSum',
    type: 'uint8',
    pros: '{Check: sum8}'
  },
  {
    key: 14,
    segment: 'Ending',
    type: 'uint16',
    pros: '{ConstValue: 0xAA55}'
  },
];

class Binframe extends Component {
  componentDidMount() {
    const reditor = this.refs.code_editor.editor;
    console.log(reditor);
    reditor.setSize('100%', '800px');
  }

  render() {
    return (
      <div style={{ display: 'flex', height: '800px' }}>
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
