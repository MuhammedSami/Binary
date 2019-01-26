
class Binary{
	constructor(val,div) {
		this.number = val; 
		this.divId = div;
		this.addHtml();
	}

	createTable() {
		let html = "<table class='binary_table table' style='width:200px;'>";
			html += "<tr>";
				html += "<td id='0'>";
					html+= "128"
				html += "</td>";
				html += "<td id='1'>";
					html +="64"
				html += "</td>";
				html += "<td id='2'>";
					html +="32"
				html += "</td>";
				html += "<td id='3'>";
					html +="16"
				html += "</td>";
				html += "<td id='4'>";
					html +="8"
				html += "</td>";
				html += "<td id='5'>";
					html +="4"
				html += "</td>";
				html += "<td id='6'>";
					html +="2"
				html += "</td>";
				html += "<td id='7'>";
					html +="1"
				html += "</td>";
			html+= "</tr>";
		html += "</table>";
	return html;
	}

	addHtml() {
		let table = this.createTable();
		let div_ = document.getElementById(this.divId);
		let total = 0;
		let trToAdd = "<tr id='second'>";
		let cpt = 0;
		let tr_id = "";
		
		div_.innerHTML += table;
		let TableId = $('.binary_table');

		for(let i= 0; i<8; i++) {
			tr_id = parseInt($("#"+i).html());
			
			if( tr_id <= this.number && (total+tr_id) <= this.number) {
				cpt++;
				total += tr_id;
			}

			if(cpt > 0) {
				trToAdd += "<td style='display:none;'>1</td>";
			}else{
				trToAdd += "<td style='display:none;'>0</td>";
			}

			cpt = 0;
		}
		TableId.append(trToAdd);
		this.showWithAnimation();
	}

	showWithAnimation() {
		$('.binary_table #second td').each(function(){
			$(this).fadeIn(500);
		});
	}
}


var number = prompt("Add Your number");
const bin = new Binary(number,'div_id');
