let a = document.getElementById('container');

let count = 18; //колличество картинок/заданий

count=count+1;
let linetxt="<br><br>========================================<br><br>";

for(let i=1; i<count;i++){

	let line = document.createElement('div');
	let num = `<div class="num"> ${i} </div>`;
	line.innerHTML=linetxt+num;
	a.appendChild(line);

	let buf = document.createElement("img");
	buf.classList.add('item');
	buf.setAttribute('src', 'img/'+i+'.jpg');
	a.appendChild(buf);
	
}


let back = document.createElement('a');
back.setAttribute('href', '../');
back.classList.add('back');
back.innerHTML="Назад";
a.appendChild(back);