//Adds a eventListener to main document elements,It will listen for the DOM Content to be loaded then it will execute.
// you should wait for the DOM to finish loading elements, otherwise you could be targeting elements that havent yet loaded! 
document.addEventListener("DOMContentLoaded", function(){
    
    //byTagname is used to get all the buttons created in HTML
    let buttons = document.getElementsByTagName("button");
    
    
    

    // this for loop will go through our buttons array and return each element in the array which will be stored in  that variable button on each iteration. 
    for(let button of buttons){
        //add eventListner for that button to be clicked when it is clicked the code inside the function will then run!
        button.addEventListener("click",function(){
            //if statment that checks the attribute of the data type to see what its value is and if its 'submit' it displays an alert!
            //this. refers to the button that was just clicked!
            if(this.getAttribute("data-type")=== "begin"){
                //alert("please enter username");
                createNew();
                loginCheck(); 
                userName();
            }else if(this.getAttribute("data-type")==="next"){
                pageTwo();
            
            }else if(this.getAttribute("data-type")=== "save"){
               loginInfo();
                //alert("You pressed the 'Next' Button!");
            }else if(this.getAttribute("data-type")=== "next2"){
                pageThree();
            
            }else{
                let normalButton = this.getAttribute("data-type");
            }
        })
        function highlight(){
            let fixed = document.getElementById('mi');
            fixed.style.backgroundColor = "greenyellow";
        }
            let firstanswer = document.getElementById('mi');
            firstanswer.addEventListener("click", function () {
            alert("you selected the first answer!");
            });

        
        //This function will display the image that is previously blocked by css rules when the submit button is pressed.
        function createNew(){
            
            document.getElementsByClassName('p2')[0].style.display = "block";
            document.getElementById('unorganised1').style.display = "block";
            document.getElementsByClassName('p2')[1].style.display = "block";
            document.getElementById('unorganised2').style.display = "block";
            document.getElementsByClassName('p2')[2].style.display = "block";
            document.getElementById('unorganised3').style.display = "block";
            document.getElementById('intro').style.display = "none";
            document.getElementById('labelInfo').style.display = "none";
            document.getElementById('bncolor').style.display = "none";
            document.getElementById('userInfo').style.display = "none";
            document.getElementById('login').style.display = "none";
            document.getElementsByClassName('p2')[3].style.display = "none";
            document.getElementById('unorganised4').style.display = "none";
            document.getElementsByClassName('p2')[4].style.display = "none";
            document.getElementById('unorganised5').style.display = "none";
            document.getElementsByClassName('p2')[5].style.display = "none";
            document.getElementById('unorganised6').style.display = "none";
            document.getElementById('intro').style.display = "none";
            document.getElementById('labelInfo').style.display = "none";
            document.getElementById('next1').style.display = "block";
            document.getElementById('usernamedisplay').style.display = "block";
            
            
        }
       
        function pageTwo(){

            document.getElementsByClassName('p2')[0].style.display = "none";
            document.getElementById('unorganised1').style.display = "none";
            document.getElementsByClassName('p2')[1].style.display = "none";
            document.getElementById('unorganised2').style.display = "none";
            document.getElementsByClassName('p2')[2].style.display = "none";
            document.getElementById('intro').style.display = "none";
            document.getElementById('labelInfo').style.display = "none";
            document.getElementById('userInfo').style.display = "none";
            document.getElementById('login').style.display = "none";
            document.getElementById('unorganised3').style.display = "none";
            document.getElementsByClassName('p2')[3].style.display = "block";
            document.getElementById('unorganised4').style.display = "block";
            document.getElementsByClassName('p2')[4].style.display = "block";
            document.getElementById('unorganised5').style.display = "block";
            document.getElementsByClassName('p2')[5].style.display = "block";
            document.getElementById('unorganised6').style.display = "block";
            document.getElementById('intro').style.display = "none";
            document.getElementById('labelInfo').style.display = "none";
            document.getElementById('bncolor').style.display = "none";

            document.getElementById('next1').style.display = "block";
            document.getElementById('next2').style.display = "block";

        }

        function pageThree(){
            document.getElementsByClassName('p2')[0].style.display = "none";
            document.getElementById('unorganised1').style.display = "none";
            document.getElementsByClassName('p2')[1].style.display = "none";
            document.getElementById('unorganised2').style.display = "none";
            document.getElementsByClassName('p2')[2].style.display = "none";
            document.getElementById('intro').style.display = "none";
            document.getElementById('labelInfo').style.display = "none";
            document.getElementById('userInfo').style.display = "none";
            document.getElementById('login').style.display = "none";
            document.getElementById('unorganised3').style.display = "none";
            document.getElementsByClassName('p2')[3].style.display = "none";
            document.getElementById('unorganised4').style.display = "none";
            document.getElementsByClassName('p2')[4].style.display = "none";
            document.getElementById('unorganised5').style.display = "none";
            document.getElementsByClassName('p2')[5].style.display = "none";
            document.getElementById('unorganised6').style.display = "none";
            document.getElementById('intro').style.display = "none";
            document.getElementById('labelInfo').style.display = "none";
            document.getElementById('bncolor').style.display = "none";
            document.getElementById('next1').style.display = "none";
            document.getElementsByClassName('p2')[6].style.display = "block";
            document.getElementById('unorganised7').style.display = "block";
            document.getElementsByClassName('p2')[7].style.display = "block";
            document.getElementById('unorganised8').style.display = "block";
            document.getElementsByClassName('p2')[8].style.display = "block";
            document.getElementById('unorganised9').style.display = "block";
        }


        function loginInfo(){
           let getinfo = document.getElementById('userInfo').value;
           alert("Welcome " + getinfo);
        }
        function userName(){
            let name = document.getElementById('login').value;
            document.getElementById('usernamedisplay').innerHTML = name;

        }

        function loginCheck(){
           let info = document.getElementById('userInfo').value;
           if(info===""){
               alert("please enter name first!");
               let entry = document.getElementById("bncolor").style.display = "block";
           }
       }
    }
})
