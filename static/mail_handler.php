<?php
	if (isset ($_POST['mail'])){
		$name=$_POST['name'];
		$email=$_POST['email'];
		$phone=$_POST['phone'];
		$msg=$_POST['message'];

		$to='hazeezadediran@gmail.com'; // Receiver Email ID, Replace with your email ID
		$subject='MESSAGE FROM MY PORTFOLIO';
		$msg="Name : ".$name."\n"."Phone :     ".$phone."\n"."Email address:   ".$email." \n"."\n"."Wrote the following : "."\n\n".$msg;
		$headers="From: ".$email;

		if(mail($to, $subject, $msg, $headers)){
			echo "success";
		}
		else{
			echo "Something went wrong!";
		}
	}
?>
