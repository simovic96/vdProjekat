
		var brojac = 0;
		var rezervacija = 0;
		var niz = new Array('<iframe width="100%" height="50%" src="https://www.youtube.com/embed/D86RtevtfrA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','<iframe width="100%" height="50%" src="https://www.youtube.com/embed/20bpjtCbCz0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','<iframe width="100%" height="50%" src="https://www.youtube.com/embed/3aYUjm35wN0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>','<iframe width="100%" height="50%" src="https://www.youtube.com/embed/xZNBFcwd7zc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
		function prethodni() {
			brojac = (brojac==0)?3:(brojac-1);
			popuniDiv();
		}
		function sledeci() {
			brojac = (brojac+1)%4;
			popuniDiv();
		}
		function popuniDiv() {
			document.getElementById('popuni').innerHTML = niz[brojac];
		}
		
		
		function rezervisi() {
			var unos='<button type="button" class="btn btn-lg btn-outline-secondary"onclick="rezervisi()">Rezervisi kartu</button>';
			if (rezervacija==0) {
				unos='<form method="post" action="" id="contactfrm" role="forma"><div class="form-group"><label for="ime">Ime</label><input type="text" class="form-control" name="ime" id="ime" placeholder="Unesite ime" title="Unesite svoje ime" required></div><div class="form-group"><label for="prezime">Prezime</label><input type="text" class="form-control" name="prezime" id="prezime" placeholder="Unesite prezime" title="Unesite svoje prezime" required></div><div class="form-group"><label for="email">Email</label><input type="email" class="form-control" name="email" id="email" placeholder="Unesite email" title="Unesite svoj email" required></div><div class="form-group"><label for="telefon">Telefon</label><input type="text" class="form-control" name="telefon" id="telefon" placeholder="Unesite telefon" title="Unesite svoj telefon" required></div><table><tr><td width="50%"><button name="dugme" type="button" class="btn btn-lg btn-outline-secondary" id="posalji" onclick="pritisnuoPosalji()">Potvrdi rezervaciju</button></td><td width="50%">&nbsp;&nbsp;<button name="dugme2" type="button" class="btn btn-lg btn-outline-secondary" id="posalji" onclick="rezervisi()">Otkaži rezervaciju</button></td></tr></table></form>';
			}
			document.getElementById("rezId").innerHTML=unos;
			rezervacija = (rezervacija+1)%2;
		}