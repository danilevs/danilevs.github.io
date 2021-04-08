const container = document.getElementById("container")

class Link{
	constructor(link,text){
		this.link=link
		this.text=text
	}
}

let links =[

	new Link("https://readmanga.live/boruto__A112d3e7","Боруто (Манга)"),
	new Link("https://readmanga.live/van_pis", "ВанПис"),
	new Link("https://mintmanga.live/vtorjenie_gigantov","Атака титанов"),
	new Link("https://readmanga.live/one_punch_man__A1bc88e","one punch man"),

]

let html="";

links.forEach(elem=>{
	html+=`
			<a href="${elem.link}" class="link">${elem.text}</a>
	`;
})

container.innerHTML=html;
