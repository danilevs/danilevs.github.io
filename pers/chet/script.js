const input_num = document.getElementById('input_num');
const input_month = document.getElementById('input_month');
const out = document.getElementById('text');
const out_hand = document.getElementById('hand_text');


let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let months_max_num = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



function f(day, month){
	let c = 1;
	let count_days=0;
	while(c<12){
		if(months[c-1]!=months[month-1]){
			count_days+=months_max_num[c-1];
			c++;
		}else{
			count_days+=day;
			c=100;
		}
	}
	return count_days;
}

const nowDate = new Date();
const n_month    = nowDate.getMonth() + 1;
const n_day      = nowDate.getDate();

let n_summ = f(n_day, n_month);
if(n_summ%2==0){
	out.innerText = "День "+n_summ+" Чётный"+"\n"+"Сегодня"+n_day+" "+months[n_month-1];
}else{
	out.innerText = "День "+n_summ+" Нечётный"+"\n"+"Сегодня"+n_day+" "+months[n_month-1];
}


//Вручную ввод
function add_num(num){
	input_num.value = num;
}

function add_month(num_month){
	input_month.value = months[num_month-1];
}

function chet_nechet(){
	let keknum=parseInt(input_num.value);
	let kekmonth=months.indexOf(input_month.value)+1;
	let summ= f(keknum, kekmonth);
	if(summ%2==0){
		out_hand.innerText = "День "+summ+" Чётный";
	}else{
		out_hand.innerText = "День "+summ+" Нечётный";
	}
}

