
	let index = 1;
    changeImage = function(){       
        let images = ["932271.jpg","hinh-nen-may-tinh-razer.jpg","pexels-scosche-1149066.jpg"]
        document.getElementById('img').src = images[index]; 
        index++; 
            if(index==3)
                {
                    index = 0;
                }
    }
setInterval(changeImage,4000)
