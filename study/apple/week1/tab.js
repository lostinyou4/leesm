/*
var 탭버튼 = document.querySelectorAll('.tab-button');

var 탭내용 = document.querySelectorAll('.tab-content');

console.log(탭버튼.length);
var tabNumber = 탭버튼.length;

for (let j=0; j<tabNumber; j++){
탭버튼[j].addEventListener('click',function(){
    console.log("첫번째 클릭");
    for(let i=0;i<tabNumber;i++){
        탭버튼[i].classList.remove('active');
        탭내용[i].classList.remove('show');
    }
    탭버튼[j].classList.add('active');
    탭내용[j].classList.add('show');
});
}
*/
/*
document.querySelector('.list').addEventListener('click', function (e) {
            var 탭버튼 = document.querySelectorAll('.tab-button');

            var 탭내용 = document.querySelectorAll('.tab-content');

            var tabNumber = 탭버튼.length;

            for (let j = 0; j < tabNumber; j++) {
                if(e.target == 탭버튼[j]){
                    for (let i = 0; i < tabNumber; i++) {
                        탭버튼[i].classList.remove('active');
                        탭내용[i].classList.remove('show');
                    }
                    탭버튼[j].classList.add('active');
                    탭내용[j].classList.add('show');
                }
            }
});
*/


//for(let i = 0; i < 3; i++){
//    탭버튼 
//}

 document.querySelector('ul.list').addEventListener('click', function (e) {
            var 탭버튼 = document.querySelectorAll('.tab-button');

            var 탭내용 = document.querySelectorAll('.tab-content');

            var tabNumber = 탭버튼.length;

            for (let j = 0; j < tabNumber; j++) {
                if(e.target == 탭버튼[j]){
                    for (let i = 0; i < tabNumber; i++) {
                        탭버튼[i].classList.remove('active');
                        탭내용[i].classList.remove('show');
                    }
                    탭버튼[j].classList.add('active');
                    탭내용[j].classList.add('show');
                }
            }
});

document.querySelector('ul.list').addEventListener('click', function(e){
    console.log("e는?"+e);
        console.log("e.target는?"+e.target);
        console.log("this는?"+this);
        console.log("e.target.dataset.id는?"+e.target.dataset.id);
    if(e.target == 탭버튼[0]){
        var 탭버튼 = document.querySelectorAll('.tab-button');

            var 탭내용 = document.querySelectorAll('.tab-content');
        
        console.log("e는?"+e);
        console.log("e.target는?"+e.target);
        console.log("this는?"+this);
        console.log("e.target.dataset.id는?"+e.target.dataset.id);
        탭주황색칠하기(e.taraget.dataset.id);
        탭내용보여주기(e.target.dataset.id);
    }
});



function 탭주황색칠하기(a){
    탭버튼[0].classList.remove('active');
    탭버튼[1].classList.remove('active');
    탭버튼[2].classList.remove('active');
    탭버튼[a].classList.remove('active');
}

function 탭내용보여주기(a){
    탭버튼[0].classList.remove('show');
    탭버튼[1].classList.remove('show');
    탭버튼[2].classList.remove('show');
    탭버튼[a].classList.remove('show');
}



