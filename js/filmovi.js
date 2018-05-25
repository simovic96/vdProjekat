function pritisnuoPosalji(broj) {
	document.getElementById("porukaRez").innerHTML="";
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	broj = parseInt(broj);
	var podaci=0;
	if (document.forma.ime.value=="") {
		document.getElementById("porukaRez").innerHTML = '<div class="alert alert-warning">Unesite ime!</div>';
		return;
	}
	if (document.forma.prezime.value=="") {
		document.getElementById("porukaRez").innerHTML = '<div class="alert alert-warning">Unesite prezime!</div>';
		return;
	}
	if(document.forma.email.value=="" || re.test(document.forma.email.value)==false) {
		document.getElementById("porukaRez").innerHTML = '<div class="alert alert-warning">Unesite korektno email!</div>';
		return;
	}
	re = /^\d{3}\/\d{3}-\d{2}-\d{1,2}$/;
	if (document.forma.telefon.value=="" || re.test(document.forma.telefon.value)==false) {
		document.getElementById("porukaRez").innerHTML = '<div class="alert alert-warning">Unesite korektno telefon!</div>';
		return;
	}
	if ('localStorage' in window && window.localStorage !== null) {
		podaci=localStorage.getItem(broj+"1");
		if (podaci!=null) {
			podaci=parseInt(podaci);
			podaci = podaci+1;
		} else podaci=1;
		localStorage.setItem(broj+"1", podaci);
	}
	document.getElementById("porukaRez").innerHTML = '<div class="alert alert-success">Uspešno rezervisano!</div>';
}