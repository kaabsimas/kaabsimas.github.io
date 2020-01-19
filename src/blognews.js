export default class BlogNews{
	constructor(props) {
		this.url = "https://public-api.wordpress.com/rest/v1.1/sites/blogalbertusm.wordpress.com/posts/?number=3";
		this.container = $(props.container);
	}

	init(){
		let request = new Promise((resolve, reject) => {
			$.ajax({
				url: this.url,
				method: 'get',
				success: function(response){
					resolve(response);
				},
				error: function(request, status, message){
					reject({status, message});
				}
			})
		});

		request.then(response => {
			console.log(response);
		});
	}
}