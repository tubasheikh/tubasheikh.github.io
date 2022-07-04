/* NAV LINKS */
const techStack = document.querySelector(".nav_tech_stack");
const about = document.querySelector(".nav_about");
const contact = document.querySelector(".nav_contact");
const projects = document.querySelector(".nav_projects");

techStack.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#languages").scrollIntoView({behavior: "smooth"});
});

about.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#about").scrollIntoView({behavior: "smooth"});
});

contact.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#contact").scrollIntoView({behavior: "smooth"});
});

projects.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#projects").scrollIntoView({behavior: "smooth"});
});

/* SOCIAL LINKS */
const linkedin = document.querySelector(".fa-linkedin-in");
linkedin.addEventListener("click", () => {
	window.open("https://www.linkedin.com/in/tuba-sheikh-401253226/", "_blank");
});

const github = document.querySelector(".fa-github");
github.addEventListener("click", () => {
	window.open("https://github.com/tubasheikh", "_blank");
});


/* CONTACT FORM */

function resetForm() {
	firstName.value = "";
	lastName.value = "";
	emailId.value = "";
	message.value = "";
}

function submitForm(){
    message = message.value;
    sendEmail(message);
}

function sendEmail(message) {
	Email.send({
        SecureToken : "15041e16-da70-44ef-b4a7-710a85149c96",
		Host: "smtp.elasticemail.com",
		Username: "booksandbeyond22@gmail.com",
		Password: "BCC69F5A55EC41E0C675EFBC33EDD7CE89B8",
		To: "tubasheikh22@gmail.com",
		From: "booksandbeyond22@gmail.com",
		Subject: "Contact from web portfolio",
		Body: message
	});
	console.log("email sent");
}