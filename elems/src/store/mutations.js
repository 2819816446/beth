export default{
	// mutation 类似method 定义方法（一般为同步的）
	GetAllCity(state,data){
		state.allCityList = data.data;
	},
	
	GetHotCity(state,data){
		state.hotCityList = data.data;
	},


	// 刷新后从localStorage 获取保存的 accesstoken，赋值给state;防止刷新后accesstoken清空
	setAccesstokenWhenRefresh(state){
		state.accesstoken = localStorage.getItem("accesstoken");
		state.loginname = localStorage.getItem("loginname");
	}
}