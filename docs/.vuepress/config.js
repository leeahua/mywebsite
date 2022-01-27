module.exports = {
  //网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上
  title: '好好学习，天天向上',
  //网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
  description: 'Just playing around',
  //指定用于 dev server 的主机名
  host: '127.0.0.1',
  //指定 dev server 的端口
  port: 8080,
  dest: 'build/dist',
  themeConfig: {
      logo: '/images/logo.jpg',
	  nav: [
	        { text: 'Home', link: '/' },                      // 根路径
	        { text: 'bar', link: '/bar/' },
			{ text: 'notebook', link: '/notebook/' },
	        { text: 'External', link: 'https://google.com' }, // 外部链接
	        // 显示下拉列表
	        {
	          text: 'Languages',
	          items: [
	            { text: 'Chinese', link: '/language/chinese' },
	            { text: 'Japanese', link: '/language/japanese' }
	          ]
	        },
	        // 下拉列表显示分组
	        {
	          text: '高级',
	          items: [
	            { 
	              text: '算法', 
	              items: [
	                { text: '冒泡', link: '/language/chinese' },
	                { text: '快速', link: '/language/japanese' }
	              ] 
	            },
	            { 
	              text: '设计模式', 
	              items: [
	                { text: '工厂', link: '/language/chinese' },
	                { text: '单例', link: '/language/chinese'},
	              ] 
	            },
	          ]
	        }
	      ],
	  sidebar: {
	        // /bar/ 一个侧边栏，里面的三个页面共用一个侧边栏
			'/notebook/': [
			  ['', '首页'],           // ./bar/README.md文件，对应页面上/bar/路径
			  ['cpp-dll', 'cpp-dll'],        // ./bar/one.md文件，对应页面上/bar/one.html
			  ['device', 'device'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['docker', 'docker'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['epoll', 'epoll'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['flume', 'flume'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['hashring', 'hashring'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['hivemq', 'hivemq'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['jvm01', 'JVM问题排查'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['jvm学习', 'jvm学习'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['linux_wait_wakeup', 'linux_wait_wakeup'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['linux连接数优化', 'linux连接数优化'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['minikube', 'minikube'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['netty', 'netty'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['redis', 'redis'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['select', 'select'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['skywalking', 'skywalking'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['sonarqube', 'sonarqube'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['计算机网络学习', '计算机网络学习'],        // ./bar/two.md文件，对应页面上/bar/two.html
			  ['开发问题_20210223', '开发问题_20210223'],        // ./bar/two.md文件，对应页面上/bar/two.html
			],
	        '/bar/': [
	          ['', 'bar首页'],           // ./bar/README.md文件，对应页面上/bar/路径
	          ['one', 'one menue'],        // ./bar/one.md文件，对应页面上/bar/one.html
	          ['one', 'two menue'],        // ./bar/two.md文件，对应页面上/bar/two.html
	        ],
	        '/page-a/': [
	          ['', 'page 首页'],
	          ['a', 'a menu'],
	          ['b', 'b menu'],
	        ],
	        // 确保'/'侧边栏被最后定义。VuePress 会按顺序遍历侧边栏配置来寻找匹配的配置。
	        '/': [
	          ['', '首页'],
	          ['home1', 'home1 menu'],
	          ['home2', 'home2 menu'],
	          ['home3', 'home3 menu'],
	        ],
	      },
    }
  
}