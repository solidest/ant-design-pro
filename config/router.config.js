export default [
    // user
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', component: './User/Login' },
        { path: '/user/register', component: './User/Register' },
        { path: '/user/register-result', component: './User/RegisterResult' },
      ],
    },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // data
      { path: '/', redirect: '/project' },
      {
        path: '/project',
        name: 'project',
        icon: 'bank',       
      },
      // data
      { path: '/', redirect: '/datadesign/combination' },
      {
        path: '/datadesign',
        name: 'datadesign',
        icon: 'ordered-list',
        routes: [
          {
            path: '/datadesign/combination',
            name: 'combination',
            component: './Datadesign/Combination',
          },
          {
            path: '/datadesign/dataconvfun',
            name: 'dataconvfun',
            component: './Datadesign/Converfun',
          },
          {
            path: '/datadesign/generator',
            name: 'generator',
            component: './Datadesign/Generator',
          },

        ],
      },
      // frame
      {
        path: '/frame',
        icon: 'message',
        name: 'frame',
        routes: [
          {
            path: '/frame/binmessage',
            name: 'binmessage',
            component: './Framedesign/Binframe',
          },
          {
            path: '/frame/textmessage',
            name: 'textmessage',
          },
        ],
      },
      // case
      {
        path: '/casedesign',
        icon: 'fork',
        name: 'casedesign',
        routes: [
          {
            path: '/casedesign/flowchart',
            name: 'flowchart',
            component: './List/TableList',
          },
          {
            path: '/casedesign/sequence',
            name: 'sequence',
            component: './List/BasicList',
          },
          {
            path: '/casedesign/script',
            name: 'script',
          },
        ],
      },
      //performance
      {
        path: '/performance',
        name: 'performance',
        icon: 'setting',
        routes: [
          // profile
          {
            path: '/performance/config',
            name: 'config',
          },
          {
            path: '/performance/control',
            name: 'control',
          },
        ],
      },
      

      {
        component: '404',
      },
    ],
  },
];
