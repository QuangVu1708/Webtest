
	let index = 1;
    changeImage = function(){       
        let images = ["images/932271.jpg","images/hinh-nen-may-tinh-razer.jpg","images/pexels-scosche-1149066.jpg"]
        document.getElementById('img').src = images[index]; 
        index++; 
            if(index==3)
                {
                    index = 0;
                }
    }
setInterval(changeImage,4000)