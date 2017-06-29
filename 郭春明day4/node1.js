var fs=require("fs");
var http=require("http");
http.createServer(function(a,b){
	var aa=a.url;
	switch (aa){
		case "/":fs.readFile("index.html","utf-8",function(err,data){
			if(err){
				console.log("读取失败了！")
				console.log(err)
			}else{
				b.writeHead(200,{"content":"text/html;"})
				b.end(data)
			}
		})
		case "/a1":fs.readFile("index.html","utf-8",function(err,data){
			if(err){
				console.log("读取失败了！")
				console.log(err)
			}else{
				b.writeHead(200,{"content":"text/html;"})
				b.end(data)
			}
		})
		case "/a2"	:fs.readFile("index2.html","utf-8",function(err,data){
			if(err){
				console.log("读取失败了！")
				console.log(err)
			}else{
				b.writeHead(200,{"content":"text/html;"})
				b.end(data)
			}
			
		})
		case "/c3"	:fs.readFile("index3.html","utf-8",function(err,data){
			if(err){
				console.log("读取失败了！")
				console.log(err)
			}else{
				b.writeHead(200,{"content":"text/html;"})
				b.end(data)
			}
			
		})
		case "/sss"	:fs.readFile("index.css","utf-8",function(err,data){
			if(err){
				console.log("读取失败了！")
				console.log(err)
			}else{
				b.writeHead(200,{"css": "text/css"})
				b.end(data)
			}
			
		})
		case "/js"	:fs.readFile("index.js","utf-8",function(err,data){
			if(err){
				console.log("读取失败了！")
				console.log(err)
			}else{
				b.writeHead(200,{"js": "text/javascript"})
				b.end(data)
			}
			
		})
		case "/img"	:fs.readFile("a.jpg",function(err,data){
			if(err){
				console.log("读取失败了！")
				console.log(err)
			}else{
				b.writeHead(200,{"jpg":"image/jpeg"})
				b.end(data)
			}
			
		})
		break;
		default:
		b.end("404")
			break;
	}
}).listen(8888)
