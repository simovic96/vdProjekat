var pocetniNiz = new Array('<div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/redsparrow.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">IZDAJA</h2><h5>Trajanje: 135min</h5><h5>Reziser: Francis Lawrence</h5><h5>Glumci:</h5><ul type="square"><li><h5>Jennifer Lawrence</h5></li><li><h5>Joel Edgerton</h5></li><li><h5>Matthias Schoenaerts</h5></li><li><h5>Charlotte Rampling</h5></li></ul><a href="izdaja.html"><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="39%" src="https://www.youtube.com/embed/PmUL6wMpMWw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>','<div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/deadpool.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">DEADPOOL 2</h2><h5>Trajanje: 110min</h5><h5>Reziser: David Leitch</h5><h5>Glumci:</h5><ul type="square"><li><h5>Ryan Reynolds</h5></li><li><h5>Josh Brolin</h5></li><li><h5>Morena Baccarin</h5></li><li><h5>Julian Dennison</h5></li></ul><a href="deadpool2.html"><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="37%" src="https://www.youtube.com/embed/20bpjtCbCz0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>','<div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/laracroft.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">TOMB RAIDER</h2><h5>Trajanje: 140min</h5><h5>Reziser: Roar Uthaug</h5><h5>Glumci:</h5><ul type="square"><li><h5>Alicia Vikander</h5></li><li><h5>Dominic West</h5></li><li><h5>Walton Goggins</h5></li><li><h5>Daniel Wu</h5></li></ul><a href="tombraider.html"><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="37%" src="https://www.youtube.com/embed/gs8fXmT2n1g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>','<div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/taken.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">OTETA</h2><h5>Trajanje: 105min</h5><h5>Reziser: Pierre Morel</h5><h5>Glumci:</h5><ul type="square"><li><h5>Liam Neeson</h5></li><li><h5>Maggie Grace</h5></li><li><h5>Leland Orser</h5></li><li><h5>Famke Janssen</h5></li></ul><a href="oteta.html"><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="39%" src="https://www.youtube.com/embed/kZ02_Uzf7So" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>','<div class="col-sm-5"><img class="img img-responsive" style="width:100%;" src="img/vuk-sa-vol-strita.jpg"></div><div class="col-sm-3"><h2 style="font-style:normal;">VUK SA VOL STRITA</h2><h5>Trajanje: 182min</h5><h5>Reziser:  Martin Scorsese</h5><h5>Glumci:</h5><ul type="square"><li><h5>Leonardo DiCaprio</h5></li><li><h5>Jonah Hill</h5></li><li><h5>Margot Robbie</h5></li><li><h5>Matthew McConaughey</h5></li></ul><a href="wolfofwallstreet.html"><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a></div><div class="col-sm-4"><iframe width="100%" height="37%" src="https://www.youtube.com/embed/iszwuX1AK6A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>');
var nizImena = new Array("IZDAJA", "DEADPOOL 2", "TOMB RAIDER", "OTETA", "VUK SA VOL STRITA");

function sortPomoc2(nizDiv, nizI) {
	var temp;
	for (i=0;i<nizDiv.length;i++)
		for (j=i+1;j<nizDiv.length;j++) {
			if (nizI[i]>nizI[j]) {
				temp = nizI[i];
				nizI[i]=nizI[j];
				nizI[j]=temp;
				temp = nizDiv[i];
				nizDiv[i]=nizDiv[j];
				nizDiv[j]=temp;
			}
		}
	for (i=0;i<nizDiv.length;i++)
		document.getElementById(i+1).innerHTML=nizDiv[i];
}
function sortPomoc(nizDiv, nizI) {
	var temp;
	for (i=0;i<nizDiv.length;i++)
		for (j=i+1;j<nizDiv.length;j++) {
			if (nizI[i]<nizI[j]) {
				temp = nizI[i];
				nizI[i]=nizI[j];
				nizI[j]=temp;
				temp = nizDiv[i];
				nizDiv[i]=nizDiv[j];
				nizDiv[j]=temp;
			}
		}
	for (i=0;i<nizDiv.length;i++)
		document.getElementById(i+1).innerHTML=nizDiv[i];
}
function sortPopularnost() {
	var i;
	var nizRezervacije= new Array();
	var nizDiv=new Array();
	for (i=0;i<pocetniNiz.length;i++) {
		nizDiv[nizDiv.length]=pocetniNiz[i];
		nizRezervacije[i] = localStorage.getItem(i+"1");
		if (nizRezervacije[i]==null) nizRezervacije[i]=0;
	}
	sortPomoc(nizDiv,nizRezervacije);
}
function sortImena() {
	var i;
	var j;
	var nizDiv = new Array();
	var nizI = new Array();
	for (i=0;i<nizImena.length;i++) {
		nizDiv[nizDiv.length]=pocetniNiz[i];
		nizI[nizI.length]=nizImena[i];
	}
	sortPomoc2(nizDiv,nizI);
}
function sortMesta() {
	var danas = new Date(2018,12,3,0,0,0,0);
	var nizMesta = new Array();
	var i;
	var nizDiv = new Array();
	nizMesta[nizMesta.length]=(new Date(2018,17,3,17,30,0,0)).getTime()-danas.getTime();
	nizMesta[nizMesta.length]=(new Date(2018,15,3,18,30,0,0)).getTime()-danas.getTime();
	nizMesta[nizMesta.length]=(new Date(2018,16,3,18,30,0,0)).getTime()-danas.getTime();
	nizMesta[nizMesta.length]=(new Date(2018,14,3,18,30,0,0)).getTime()-danas.getTime();
	nizMesta[nizMesta.length]=(new Date(2018,19,3,18,30,0,0)).getTime()-danas.getTime();
	for (i=0;i<nizMesta.length;i++)
		nizDiv[nizDiv.length]=pocetniNiz[i];
	sortPomoc2(nizDiv,nizMesta);
}

function sortFilmovi() {
	var i;
	if (document.forma.opcijeSortiranja.selectedIndex==0) {
		sortImena();
	} else if (document.forma.opcijeSortiranja.selectedIndex==1) {
		sortMesta();
	} else if (document.forma.opcijeSortiranja.selectedIndex==2) {
		sortPopularnost();
	}
}


