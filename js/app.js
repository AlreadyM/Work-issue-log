$(function  () {
	if(issue){
		// alert(issue.length);
		console.log(issue);
		var dataLength = issue.length;
		for (var i = 0; i <= dataLength -1; i++) {
			
			// console.log(issue[i].name);
			// console.log(issue[i].example);
			var link = librayPath+issue[i].example.link,
				name = issue[i].example.name;
			if (issue[i].example == "null"||issue[i].example == "") {
				link = "javascript:;";name = "无示例";
			};
			console.log(link+"|"+name);
			var html =  "<li>"+
						"<h3 class='issueName'>"+(i+1)+"."+issue[i].name+"</h3>"+
						"<div class='radius'><div class='issueReason'><mark>问题原因：</mark>"+issue[i].issueReason+"</div>"+
						"<div class='issueSolveWay'><mark>解决方式：</mark>"+issue[i].solveWay+"</div>"+
						"<div class='issueExample'><mark>举个栗子：</mark><a href="+link+">"+name+"</a></div></div>"+
						"</li>";
			$(".results ul").append(html);
		};
	}
})