









//start from here :





//2 to 6 index of images 
  changebackground=(imageindex)=>{
    "use strict";
   
    let index;
    index=imageindex;
 

    document.images[index].onclick=()=>{
        "use strict";
        
          
        if(index == 2 || index == 3)
        {
            document.body.style.background="#ffd700";
            document.images[1].src="./media/0.png";
            
            
            
        }
        else if( index == 4)
        {
            document.body.style.background="#c0c0c0";
            document.images[1].src="./media/1.png";
            
        }
        else if(index == 5)
        {
            document.body.style.background="black";
            document.images[1].src="./media/2.png";

        }
        else if(index == 6)
        {
            
            document.body.style.background="#d4d4be";
            document.images[1].src="./media/3.png";
          //  document.body.style.color="black";
          
        
    
        }
        else{
            let nav=document.querySelectorAll(' #nav ul li a ');
            document.body.style.background="red";
            document.images[1].src="./media/4.png";
        
    
    }
  }

    
  }

  document.querySelector(' #main button ').addEventListener('click',()=>{
    window.open("https://www.apple.com/uk/shop/buy-iphone/iphone-13-pro#:~:text=Choose%20your%20model.%20iPhone%2013%20Pro%20iPhone%2013,Pro%20Max%206.7-inch%20display%C2%B9%20From%20%C2%A343.70%2Fmo.%20or%20%C2%A31%2C049."
    ,"_blank");
  })