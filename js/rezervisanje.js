function potvrdiRez(broj) {
	var podaci=0;
	if (document.forma.ime.value=="") {
		document.getElementById("porukaRez").innerHTML = '<div class="alert alert-warning">Unesite ime!</div>';
		return;
	}
	if (document.forma.prezime.value=="") {
		document.getElementById("porukaRez").innerHTML = '<div class="alert alert-warning">Unesite prezime!</div>';
		return;
	}
	if ('localStorage' in window && window.localStorage !== null) {
		podaci=localStorage.getItem(i+"1");
		if (podaci!=null) {
			podaci = podaci+1;
		} else podaci=0;
		localStorage.setItem(i+"1", podaci);
	}
}