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

	/*--- actual weight and motivatinal message ---*/
	$("#modal_form").submit(function (e) {
		e.preventDefault();
		let actualWeight = $("#input-weight").val();   //had variable  radi na7tajoha 
		let weightDate = $("#input-date").val(); //had variable  radi na7tajoha 
		$(".span_value").text(actualWeight);
		if (!actualWeight && !weightDate) return alert("one of the fields is empty");

		/*-- motivational API --*/
		let apiUrl = "https://gist.githubusercontent.com/AbhishekChd/ab9949b618fcbf58ac84f9c8e88d6688/raw/90916f0d09a295eb5b2eea6c29a648e8c60b0e6f/5769a491e4b01190df7a9a70.json";
        let num = Math.floor(Math.random() * 20);
        $.ajax({type:"GET",url:apiUrl,success:(data)=>{
            $(".motivational_message").text($.parseJSON(data)[num].content);
        }})
	});
})




