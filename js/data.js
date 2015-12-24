var librayPath = "example/";
var issue = [
	{
		"name":"：active伪类在ios设备失效",
		"getTime":"2015-12-24 10:21:25",
		"solveTime":"2015-12-24 13:51:51",
		"issueReason":"[1] By default, Safari Mobile does not use the :active state unless there is a touchstart event handler on the relevant element or on the <body>。<br/> 看来在iOS系统的移动设备中，需要在按钮元素或body/html上绑定一个touchstart事件才能激活:active状态。",
		"solveWay":"添加脚本“document.body.addEventListener('touchstart', function () { })”",
		"example":{
			"name":"active伪类在ios设备正常作用",
			"link":"active.html"
		},
		"recordTime":"2015-12-24 13:55:01"
	},
	{
		"name":"active伪类在ios设备失效2",
		"getTime":"2015-12-24 10:21:25",
		"solveTime":"2015-12-24 13:51:51",
		"issueReason":"[1] By default, Safari Mobile does not use the :active state unless there is a touchstart event handler on the relevant element or on the <body>。看来在iOS系统的移动设备中，需要在按钮元素或body/html上绑定一个touchstart事件才能激活:active状态。",
		"solveWay":"添加脚本“document.body.addEventListener('touchstart', function () { })”",
		"example":"active2.html",
		"recordTime":"2015-12-24 13:55:01"
	},
	{
		"name":"伪类在ios设备失效3",
		"getTime":"2015-12-24 10:21:25",
		"solveTime":"2015-12-24 13:51:51",
		"issueReason":"[1] By default, Safari Mobile does not use the :active state unless there is a touchstart event handler on the relevant element or on the <body>。看来在iOS系统的移动设备中，需要在按钮元素或body/html上绑定一个touchstart事件才能激活:active状态。",
		"solveWay":"添加脚本“document.body.addEventListener('touchstart', function () { })”",
		"example":"active3.html",
		"recordTime":"2015-12-24 13:55:01"
	}

];