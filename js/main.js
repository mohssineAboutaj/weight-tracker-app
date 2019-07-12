$(document).ready(function () {
	/* menu drop down */
	$("#menu_toggle").on("click", () => {
		$(".list-group").toggleClass("active");
		if ($("#menu_toggle").text() === "hide menu") {
			$("#menu_toggle").text("show menu");
		}
		else {
			$("#menu_toggle").text("hide menu");
		}
	})
	/*-------*/
	/*--random id ---*/
	let id="";
	 function generateId(){
		 let serial="123456789abcdefghijklmnopqrstuvwxyz";
		 let index;
		for(let i=0;i<20;i++) {
			index=Math.floor( Math.random() * serial.length);
			id+=serial[index];
		}
	 }
	/*--- actual weight and motivatinal message ---*/
	let history=[];
	$("#modal_form").submit(function (e) {
		e.preventDefault();
		 let actualWeight = $("#input-weight").val();
		 let weightDate = $("#input-date").val(); 
		$(".span_value").text(actualWeight);
		if (!actualWeight && !weightDate) return alert("one of the fields is empty");

		/*-- motivational API --*/
		let apiUrl = "https://gist.githubusercontent.com/AbhishekChd/ab9949b618fcbf58ac84f9c8e88d6688/raw/90916f0d09a295eb5b2eea6c29a648e8c60b0e6f/5769a491e4b01190df7a9a70.json";
        let num = Math.floor(Math.random() * 20);
        $.ajax({type:"GET",url:apiUrl,success:(data)=>{
            $(".motivational_message").text($.parseJSON(data)[num].content);
		}});
		/*-- history table --*/
		
		class HistoryObj{
			constructor(weight,ondate,idNumber){
				this.weight=weight;
				this.ondate=ondate;
				this.idNumber=idNumber;
			}
		}
		generateId();
		let obj=new HistoryObj(actualWeight,weightDate,id);
		history.push(obj);
		id="";
		/*
		history.map((item)=>{
			 $(".history_tbody").html(
				`<tr>
				<td>50</td>
				<td>5/5/2015</td>
				<td>
				  <a href="#" class="btn btn-success m-2">
					<i class="fa fa-fw fa-edit"></i>
					edit
				  </a>
				  <a href="#" class="btn btn-danger m-2">
					  <i class="fa fa-fw fa-trash"></i>
					  delete
					</a>
				  </td>
			  </tr>`)
		})
		*/

	});
});


/* --- hadi britha takhdam f -- histroy.js --*/
let test=function(){
	console.log("this is from the main");
};
export default "main";
	
		




