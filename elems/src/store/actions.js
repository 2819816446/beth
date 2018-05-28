
import axios from '../../node_modules/axios/dist/axios.min.js'
export default{

	// 类似method 定义方法（一般为异步的）
	GetAllCity(context){
		axios.get('http://cangdu.org:8001/v1/cities', {
		    params: {
		      type : "group"			//types : hot/group...
		    }
		  })
		  .then(function (response) {		//{data:{[],[]...}}
		    console.log(response);		//{[],[]...}
			    context.commit('GetAllCity',response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });


	},

	GetHotCity(context){
		axios.get('http://cangdu.org:8001/v1/cities', {
		    params: {
		      type : "hot"			//types : hot/group...
		    }
		  })
		  .then(function (response) {		//{data:{[],[]...}}
		    console.log(response);		//{[],[]...}
			  context.commit('GetHotCity',response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });


	},	



	setArticle(context,url){
		// var url = String(url);
		// console.log(url);
		// axios.get(url,{
		// 	params:{
		// 		mdrender:true,
		// 	}
		// }).then(function(res){
		// 	// res.data 才是真实返回的数据  而不是data
		// 	console.log(res.data.success)
		// 	if (res.data.success === true) {
		// 		context.commit('addArticle',res.data);
		// 	}else {
  //               console.log('Sorry, Something wrong happened when getting the remote data')
  //           }

		// }).catch(function(res) {
  //           console.log('ArticleDetail.vue: ', res);
  //       });
	}

}