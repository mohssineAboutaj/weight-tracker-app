$(document).ready(function () {

	/* menu drop down */
	$("#menu_toggle").on("click", () => {
		$(".list-group").toggleClass("active");
		if ($("#menu_toggle").text() === "hide menu") {
			$("#menu_toggle").text("show menu");
			console.log("show menu");
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
		if (!actualWeight && !weightDate) {
			return alert("one of the fields is empty");
		}

		/*-- motivational API --*/
		let apiUrl = "https://gist.githubusercontent.com/AbhishekChd/ab9949b618fcbf58ac84f9c8e88d6688/raw/90916f0d09a295eb5b2eea6c29a648e8c60b0e6f/5769a491e4b01190df7a9a70.json";

		$.getJSON(apiUrl, (data) => {
			let num = Math.floor(Math.random() * 20);
			//$(".motivational_message").text(JSON.parse(data)[num].content);
			$(".motivational_message").text(actualWeight)
			$(".modal *[type='reset']").trigger('click');
		}).fail((err) => {
			console.log("err", err)
		})

/* 
		let http = new XMLHttpRequest();
		http.onreadystatechange = function () {
			if (http.readyState == 4 && http.status == 200) {
				let num = Math.floor(Math.random() * 20);
				$(".motivational_message").text(JSON.parse(http.response)[num].content);
				//$(".modal *[type='reset']").trigger('click');
			}
		}
		http.open("GET", apiUrl, true);
		http.send();
 */
	});
})


/*-- 9ra 3la ajax call  o chno howa json hna     https://www.w3schools.com/xml/ajax_intro.asp    ---*/
/*-- had api rah radi nbadlaha 7it khditha rir man wa7ed app
khasni ndir wa7da makhtasa rir b motivation -- */

