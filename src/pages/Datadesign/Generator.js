import React, { Component } from 'react';

import { Tooltip, List } from 'antd';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/lua/lua';
import 'codemirror/theme/rubyblue.css';

import { Tabs, Radio } from 'antd';
const TabPane = Tabs.TabPane;

var code1 = '--小车运行模拟器\n--启动输入 m（小车重量）\n--结束输出 ms（单程时长）\n--步进输入 f（牵引力）\n--步进输出 p（小车位置）\n';
    code1 += 'function SmallCarStep ( m )\n    start_time = os.time();\n    p0 = 0;\n    v0 = 0;\n    f0 = 0;\n    t0 = start_time;\n';
    code1 += '    while(p<100)\n    do\n        t1 = os.time();\n        dt = (t1 - t0)/1000;\n        v1 = v0 + f0/m * dt;\n';
    code1 += '        p1 = p0 + (v0+v1)/2 * dt;\n        t0 = t1;\n        v0 = v1;\n        f0 = f1;\n        f1 = coroutine.yield(p1);\n    end;\n';
    code1 += '    return os.time()-start_time;\nend;';


class Generator extends Component {

  componentDidMount() {
    this.refs.code_editor.editor.setSize('auto', '580px');
  }

  render() {

    return (
          <Tabs
            defaultActiveKey="1"
            tabPosition='left'
            style={{ height: '580px' }}
          >
            <TabPane tab="SmallCarStep" key="1">
            <CodeMirror
              ref="code_editor"
              value={code1}
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

export default Generator;
