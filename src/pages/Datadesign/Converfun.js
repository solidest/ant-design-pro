import React, { Component } from 'react';

import { Tooltip, List } from 'antd';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/lua/lua';
import 'codemirror/theme/rubyblue.css';

import { Tabs, Radio } from 'antd';
const TabPane = Tabs.TabPane;

const code1 = '--将位置转换为电压值\nfunction Pos2Vol(pos)\n    return pos/25+0.5;\nend;';
var code2 = '--根据初始位置和间隔事件计算下一点位置\nfunction GetNextPos(posinfo, time)\n    if(posinfo.start.towards=="right")\n';
    code2 += '        return posinfo.start.p0 + posinfo.speed * time/1000;\n    else\n    	return posinfo.start.p0 - posinfo.speed * time/1000;\nend;';




const data = [
  {title: 'Weight2Vol(weight)', tip: '将重量转为电压值'},
  {title: 'Pos2Vol(pos)', tip:'将位置转换为电压值'},
  {title: 'GetNextPos(posinfo, time)', tip:'根据上个位置与时间计算下个位置'}
];


class Converfun extends Component {

  componentDidMount() {
    this.refs.code_editor3.editor.setSize('auto', '580px');
  }

  render() {

    return (
          <Tabs
            defaultActiveKey="3"
            tabPosition='left'
            style={{ height: '580px' }}
          >
            <TabPane tab="Pos2Vol" key="2">
            <CodeMirror
              ref="code_editor2"
              value={code1}
              options={{
                mode: 'lua',
                theme: 'rubyblue',
                lineNumbers: true,
              }}
            />
            </TabPane>
            <TabPane tab="GetNextPos" key="3">
            <CodeMirror
              ref="code_editor3"
              value={code2}
              options={{
                mode: 'lua',
                theme: 'rubyblue',
                lineNumbers: true,
              }}
            />
            </TabPane>
          </Tabs>
    );
  }
}

export default Converfun;
