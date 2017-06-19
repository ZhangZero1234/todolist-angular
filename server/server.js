(function(angular){
	var module = angular.module("myModule",[]);
	module.service("myService",[function(){
		function getId(){
			return Math.random().toString().replace(".","");
		}
		var items = [{
			id:1,
			text:"angular",
			completed:false
		},
		{
			id:2,
			text:"nodejs",
			completed:false
		},
		{
			id:3,
			text:"jQuery",
			completed:true
		}];
		this.pullData = function(){
			return items;
		}
		this.addOne = function(data){
			items.push({
				id:getId,
				text:data,
				completed:false
			});
		}
		this.delete = function(id){
			for(var i = 0 ; i<items.length;i++)
			{
				if(items[i].id==id)
				{
					items.splice(i,1);
				}
			}
		}
		
		this.clearAll = function(){
			var arr = [];
			for(var i = 0 ; i < items.length; i++)
			{
				console.log(1);
				if(!items[i].completed)
				{
					arr.push(items[i]);
				}
			}
			items = arr;
			console.log("arr",arr);
		}
	}]);
})(angular);