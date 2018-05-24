var niz = new Array('<div class="row sadrzaj" id="1">
			<div class="col-sm-5">
				<img class="img img-responsive" style="width:100%;" src="img/redsparrow.jpg">
				
				</div>
			
			<div class="col-sm-3">
			<h2 style="font-style:normal;">IZDAJA</h2>
				<h5>Trajanje: 135min</h5>
				<h5>Reziser: Francis Lawrence</h5>
				<h5>Glumci:</h5>
				<ul type="square">
					<li><h5>Jennifer Lawrence</h5></li>
					<li><h5>Joel Edgerton</h5></li>
					<li><h5>Matthias Schoenaerts</h5></li>
					<li><h5>Charlotte Rampling</h5></li>
				</ul>
				<a href=""><button class="btn btn-lg btn-outline-secondary">Pročitaj više</button></a>
			</div>
			<div class="col-sm-4">
				<iframe width="100%" height="39%" src="https://www.youtube.com/embed/PmUL6wMpMWw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
		</div>');
function a() {
	document.getElementById('1').innerHTML=niz[0];
}