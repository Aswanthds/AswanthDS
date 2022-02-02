function sendEmail() {

	Email.send({	Host: "smtp.gmail.com",

	Username : "musicaswanth@gmail.com",

	Password : "musicaswanth1452@2005",

	To :  "worldofaswanth@gmail.com",

	From : document.getElementById("email").value,

	Subject : "New Contact Form",

	Body : "<email body>",

	}).then(

		message => alert("mail sent successfully")

	);

}
