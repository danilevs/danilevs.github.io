
const out = document.getElementById('text');


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

	out.innerText = "День "+((n_summ%5)+1)+"\n"+"Сегодня"+n_day+" "+months[n_month-1]+"("+n_summ+")";

	

