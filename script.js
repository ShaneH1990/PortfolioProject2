
document.addEventListener("DOMContentLoaded", function(){
    
    let buttons = document.getElementsByTagName("button");
    
    
    

    
    for(let button of buttons){
        
        button.addEventListener("click",function(){
            
            if(this.getAttribute("data-type")=== "begin"){
                createNew();
                loginCheck(); 
                userName();
                hideInfo();
            }else if(this.getAttribute("data-type")==="next"){
                pageTwo();
                hideInfo2();
                answerSection();
                
            
            }else if(this.getAttribute("data-type")=== "save"){
               loginInfo();
            }else if(this.getAttribute("data-type")=== "next2"){
                pageThree();
            
            }else if(this.getAttribute("data-type")=== "answer1"){
                resultPageOne();
            }
            else{
                let normalButton = this.getAttribute("data-type");
            }
        })
        function highlight(){
            let fixed = document.getElementById('mi');
            fixed.style.backgroundColor = "greenyellow";
        }
            
            let answer1 = document.getElementById('mi');
            let answer2 = document.getElementById('tg');
            let answer3 = document.getElementById('jr');
            let answer4 = document.getElementById('rd');
            let answer5 = document.getElementById('tc');
            let answer6 = document.getElementById('ce');
            let answer7 = document.getElementById('ya');
            let answer8 = document.getElementById('sk');
            let answer9 = document.getElementById('hk');
            let answer10 = document.getElementById('ar');
            let answer11 = document.getElementById('oi');
            let answer12 = document.getElementById('qn');
            let answer13 = document.getElementById('onethree');
            let answer14 = document.getElementById('onesix');
            let answer15 = document.getElementById('oneeight');
            let answer16 = document.getElementById('cb');
            let answer17 = document.getElementById('ba');
            let answer18 = document.getElementById('rp');
            let answer19 = document.getElementById('vr');
            let answer20 = document.getElementById('eg');
            let answer21 = document.getElementById('sm');
            let answer22 = document.getElementById('jm');
            let answer23 = document.getElementById('lo');
            let answer24 = document.getElementById('my');
            let answer25 = document.getElementById('wb');
            let answer26 = document.getElementById('hh');
            let answer27 = document.getElementById('jd');



            answer1.addEventListener("click", function (){ alert("you selected Mission Impossible");});
            answer2.addEventListener("click", function (){ alert("you selected Top Gun");});
            answer3.addEventListener("click", function (){ alert("you selected Jack Reacher");});
            answer4.addEventListener("click", function (){ alert("you selected Robert Downey Jr");});
            answer5.addEventListener("click", function (){ alert("you selected Tom Cruise");});
            answer6.addEventListener("click", function (){ alert("you selected Chris evans");});
            answer7.addEventListener("click", function (){ alert("you selected Yoda");});
            answer8.addEventListener("click", function (){ alert("you selected Shrek");});
            answer9.addEventListener("click", function (){ alert("you selected Hulk");});
            answer10.addEventListener("click", function (){ alert("you selected Anakin Skywalker");});
            answer11.addEventListener("click", function (){ alert("you selected Obi-Wan Kenobi");});
            answer12.addEventListener("click", function (){ alert("you selected Qui-Gon Jinn");});
            answer13.addEventListener("click", function (){ alert("you selected 1993");});
            answer14.addEventListener("click", function (){ alert("you selected 1996");});
            answer15.addEventListener("click", function (){ alert("you selected 1998");});
            answer16.addEventListener("click", function (){ alert("you selected Christian Bale");});
            answer17.addEventListener("click", function (){ alert("you selected Ben Affleck");});
            answer18.addEventListener("click", function (){ alert("you selected Robert Pattinson");});
            answer19.addEventListener("click", function (){ alert("you selected Avatar");});
            answer20.addEventListener("click", function (){ alert("you selected Avengers:End Game");});
            answer21.addEventListener("click", function (){ alert("you selected Spiderman: No Way Home");});
            answer22.addEventListener("click", function (){ alert("you selected Jon Hamm");});
            answer23.addEventListener("click", function (){ alert("you selected Leonardo Dicaprio");});
            answer24.addEventListener("click", function (){ alert("you selected Matthew McConaughey");});
            answer25.addEventListener("click", function (){ alert("you selected Whitey Bulger");});
            answer26.addEventListener("click", function (){ alert("you selected Henry Hill");});
            answer27.addEventListener("click", function (){ alert("you selected John Dillinger");});

           

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
            document.getElementById('enter').style.display = "block";
            
            
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
            document.getElementById('enter').style.display = "block";

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
    function hideInfo(){
        let hide1 = document.getElementById('bncolor').style.display ="none";
    }
    function hideInfo2(){
        let hide2 = document.getElementById('next1').style.display ="none";
    }
    function answerSection(){
    }
    function resultPageOne(){
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
        document.getElementsByClassName('a1t')[0].style.display = "block";
        document.getElementById("paragraph2").style.display = "block";
        document.getElementById("intro2").style.display = "block";
        document.getElementById('question1').style.display = "block";
        document.getElementById("ulresult").style.display = "block";
        document.getElementById("a1").style.display = "block";
        document.getElementById("a2").style.display = "block";
        document.getElementById('a2').style.backgroundColor = "green";
        document.getElementById("a3").style.display = "block";
        document.getElementById('question2').style.display = "block";
        document.getElementById("ulresult2").style.display = "block";
        document.getElementById("a4").style.display = "block";
        document.getElementById('a4').style.backgroundColor = "green";
        document.getElementById("a5").style.display = "block";
        document.getElementById("a6").style.display = "block";
        document.getElementsByClassName('a1t')[1].style.display = "block";
         document.getElementById('question3').style.display = "block";
         document.getElementById("ulresult3").style.display = "block";
         document.getElementById("a7").style.display = "block";
         document.getElementById("a8").style.display = "block";
         document.getElementById('a8').style.backgroundColor = "green";
         document.getElementById("a9").style.display = "block";
         document.getElementsByClassName('a1t')[2].style.display = "block";




        document.getElementById('enter').style.display = "none";
        document.getElementById('next1').style.display = "none";
        document.getElementsByClassName('enter').style.display = "block";
        
           

        document.getElementById('enter').style.display = "none";
    }
    
})
