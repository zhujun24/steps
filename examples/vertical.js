'use strict';

require('rc-steps/assets/index.css');
require('rc-steps/assets/iconfont.css');

var React = require('react');
var Steps = require('rc-steps');


var container = document.getElementById('__react-content');


var steps = [{
  status: 'finish',
  title: '已完成',
  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊'
}, {
  status: 'process',
  title: '进行中',
  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊'
}, {
  status: 'wait',
  title: '待运行',
  description: '这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊这里是多信息的描述啊'
}].map(function (s, i) {
    return (<Steps.Step
        key={i}
        status={s.status}
        title={s.title}
        description={s.description}
        ></Steps.Step>
    );
  });

React.render(
  <Steps direction="vertical">
    {steps}
  </Steps>, container);