
		
		
		
		function rezervisi() {
			var unos='<button type="button" class="btn btn-lg btn-outline-secondary"onclick="rezervisi()">Rezervisi kartu</button>';
			if (rezervacija==0) {
				unos='<form method="post" action="" id="contactfrm" role="forma"><div class="form-group"><label for="ime">Ime</label><input type="text" class="form-control" name="ime" id="ime" placeholder="Unesite ime" title="Unesite svoje ime" required></div><div class="form-group"><label for="prezime">Prezime</label><input type="text" class="form-control" name="prezime" id="prezime" placeholder="Unesite prezime" title="Unesite svoje prezime" required></div><div class="form-group"><label for="email">Email</label><input type="email" class="form-control" name="email" id="email" placeholder="Unesite email" title="Unesite svoj email" required></div><div class="form-group"><label for="telefon">Telefon</label><input type="text" class="form-control" name="telefon" id="telefon" placeholder="Unesite telefon" title="Unesite svoj telefon" required></div><table><tr><td width="50%"><button name="dugme" type="button" class="btn btn-lg btn-outline-secondary" id="posalji" onclick="pritisnuoPosalji()">Potvrdi rezervaciju</button></td><td width="50%">&nbsp;&nbsp;<button name="dugme2" type="button" class="btn btn-lg btn-outline-secondary" id="posalji" onclick="rezervisi()">Otkaži rezervaciju</button></td></tr></table></form>';
			}
			document.getElementById("rezId").innerHTML=unos;
			rezervacija = (rezervacija+1)%2;
		}