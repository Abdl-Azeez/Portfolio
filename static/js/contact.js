function ContactForm() {
		var form = $("#ContactForm")[0];
		var formdata = new FormData(form); {
			$.ajax({
				type: 'post',
				url: '/static/mail_handler.php',
				data: formdata,
				contentType: false,
				processData: false,
				success: function (response) {
					if (response == "success") {
						alert("Sent Successfully! \nThank you, We will contact you shortly!");
						window.location.reload();
					} else {
						alert(response);
					}
				}
			});
		}
		return false;
	}