import React, { Component } from 'react';

import { Tooltip, List } from 'antd';

import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/lua/lua';
import 'codemirror/theme/rubyblue.css';

import { Tabs, Radio } from 'antd';
const TabPane = Tabs.TabPane;

Function.prototype.getMultiLine = function() {  
  var lines = new String(this);  
  lines = lines.substring(lines.indexOf("/*") + 2, lines.lastIndexOf("*/"));  
  return lines;  
}  

var code1 = function() {
/*
--小车运行模拟器
--启动输入 m（小车重量）
--结束输出 ms（单程时长）
--步进输入 f（牵引力）
--步进输出 p（小车位置）
function SmallCarStep ( m, p )
    start_time = os.time();
    p0 = p;
    v0 = 0;
    f0 = 0;
    t0 = start_time;
    while(p>0 && p<100)
    do
        t1 = os.time();
        dt = (t1 - t0)/1000;
        v1 = v0 + f0/m * dt;
        p1 = p0 + (v0+v1)/2 * dt;
        t0 = t1;
        v0 = v1;
        f0 = f1;
        f1, towards = coroutine.yield(p1);
        if(towards=='left')
          f1 = -f1;
    end;
    return os.time()-start_time;
end;
*/
}

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
              value={code1.getMultiLine()}
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
