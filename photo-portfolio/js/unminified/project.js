$(document).ready(function(){
	$(".thumbnail").featherlight();

	$("#order").click(function(evt){
		evt.preventDefault();
		$("#orderform form").slideToggle(1000);
		$("html, body").animate({ scrollTop: $(this).offset().top}, 1000);
	});

	$(".thumbnail").hover(function(){
		$(this).append($("<p/>").html($(this).find("img").attr("title")).fadeIn(200));
	}, function(){
		$(this).find("p").remove();
	});

	$("#orderform form").submit(function(evt){
		evt.preventDefault();

		if($("#orderform form").attr("action") == "order.php" && $("#orderform form").attr("method") == "post") {		
			if ($("input[name=customer]").length > 0 && $("input[name=address1]").length > 0 && $("input[name=address2]").length > 0 && $("select[name=photo]").length > 0 && $("input[name=size]").length > 1 && $("input[name=email]").length > 0 && $("input[name=terms]").length > 0 && $("textarea[name=comments]").length > 0){
				if($("label[for=customer]").length > 0 && $("label[for=address1]").length > 0 && $("label[for=address2]").length > 0 && $("label[for=photo]").length > 0 && $("label[for=size]").length > 0 && $("label[for=email]").length > 0 && $("label[for=terms]").length > 0 && $("label[for=comments]").length > 0) {
					alert("Form sent successfully!");
				}
				else {
					alert("Form sent, but not all labels are correct.");
				}
			}
			else {
				alert("Form sent, but not all inputs are correct.");
			}
		}
		else {
			alert("Form not sent.")
		}
	});
});