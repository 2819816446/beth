export default{
	// mutation 类似method 定义方法（一般为同步的）
	GetAllCity(state,data){
		state.allCityList = data.data;
	},
	
	GetHotCity(state,data){
		state.hotCityList = data.data;
	},

	// SearchHistoryToLacal(state,search_data){
	// 	var array = [];
	// 	console.log("local");
	// 	if (!localStorage.SearchHistory) { //如果没有SearchHistory直接添加
	// 		// var data = JSON.stringify(search_data);  //对象---字符串
	// 		array.push(search_data);
	// 		var data = JSON.stringify(array);  //对象---字符串
	// 		console.log(array);
	// 		localStorage.SearchHistory=array;
	// 		console.log(localStorage.SearchHistory);


	// 	}else{  //如果有
	// 		// var dataFromLocal = JSON.parse(localStorage.SearchHistory); //字符串转对象
	// 		var dataFromLocal = localStorage.SearchHistory; //字符串转对象
	// 		dataFromLocal.forEach(function (value,key) {
	// 			if (!value.geohash == search_data.geohash) {
	// 				array.push(JSON.stringify(search_data));
	// 				localStorage.SearchHistory=array;
	// 				console.log(localStorage.SearchHistory)
	// 			}else{
	// 				return;
	// 			}
	// 		});

	// 	}
	// },
	// 把对象保存到 localStorage 的一个字段，已存在的不添加
	SearchHistoryToLacal(state,search_data){
		var array = [];
		console.log("local");
		if (!localStorage.SearchHistory) { //如果没有SearchHistory直接添加
			array.push(search_data);							//[{...}]
			localStorage.SearchHistory=JSON.stringify(array);	// "[{}]"  字符串。 以便localStorage直观显示
		}else{  //如果有
			var dataFromLocal = JSON.parse(localStorage.SearchHistory); //字符串转对象 [{...}]
			var flag = false;//标记是否已经存在。默认不存在（false）
			dataFromLocal.forEach(value=> {
				if (value.geohash == search_data.geohash) {
					flag = true;
				}
			});
			if (!flag) { //如果不存在（flag=false）则添加
				dataFromLocal.push(search_data);
				localStorage.SearchHistory=JSON.stringify(dataFromLocal);
				console.log(localStorage.SearchHistory)
			}

		}
	},

	// 待完善
	SearchRestranHistoryToLacal(state,search_data){  //search_data : [{}]
		// var array = [];
		console.log("local RestranHistory");
		if (!localStorage.RestranHistory) { //如果没有RestranHistory直接添加
			// array.push(search_data);							//[{...}]
			localStorage.RestranHistory=JSON.stringify(search_data);	// "[{}]"  字符串。 以便localStorage直观显示
		}else{  //如果有
			var dataFromLocal = JSON.parse(localStorage.RestranHistory); //字符串转对象 [{...}]
			var flag = false;//标记是否已经存在。默认不存在（false）
			dataFromLocal.forEach(value=> {
				if (value.name == search_data[0].name) {
					flag = true;
				}
			});
			if (!flag) { //如果不存在（flag=false）则添加
				dataFromLocal.push(search_data);
				localStorage.RestranHistory=JSON.stringify(dataFromLocal);
				console.log(localStorage.RestranHistory)
			}

		}
	},



	// 刷新后从localStorage 获取保存的 accesstoken，赋值给state;防止刷新后accesstoken清空
	setAccesstokenWhenRefresh(state){
		state.accesstoken = localStorage.getItem("accesstoken");
		state.loginname = localStorage.getItem("loginname");
	}
}