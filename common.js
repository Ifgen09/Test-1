$(function() {


	var users = 
		[
			{
			    firstName: "Vladislav",
			    lastName: "Chapiuk",
			    email: "razorch@ukr.net"
			},
			{
			    firstName: "Vladislav",
			    lastName: "Chapiuk",
			    email: "Vlad@ukr.net"
			},
			{
			    firstName: "Kewa",
			    lastName: "Adamovich",
			    email: "kewa@ukr.net"
			},
			{
			    firstName: "Onotole",
			    lastName: "Chuka",
			    email: "razorc2@ukr.net"
			},
			{
				firstName: "",
				lastName: "",
			    email: "razorc3@ukr.net"
			}
		];

var autoCmplField = $('#autocomplete-field');
var autoCmplList = $('#autocomplete-list');

autoCmplField.on('input', function() {
	var usersCountMatches = 0;
	var firstNameOutput;
	var lastNameOutput;
	var emailOutput;

	autoCmplList.empty();
	if(this.value === '') {
		return;
	}

	for(var i = 0; i < users.length; i++) {
		if(users[i].firstName.indexOf(this.value) === 0 || users[i].lastName.indexOf(this.value) === 0 || users[i].email.indexOf(this.value) === 0) {

			firstNameOutput = users[i].firstName;
			if(users[i].firstName.indexOf(this.value) === 0) {
				firstNameOutput = '<span class="highlight">'+this.value+'</span>' + users[i].firstName.substring(this.value.length);
			}

			lastNameOutput = users[i].lastName;
			if(users[i].lastName.indexOf(this.value) === 0) {
				lastNameOutput = '<span class="highlight">'+this.value+'</span>' + users[i].lastName.substring(this.value.length);
			}


			emailOutput = users[i].email;
			if(users[i].email.indexOf(this.value) === 0) {
				emailOutput = '<span class="highlight">'+this.value+'</span>' + users[i].email.substring(this.value.length);
			}

			autoCmplList.append(createListItem(firstNameOutput + ' ' + lastNameOutput +   '<br>' + 'Email: ' + emailOutput));
			usersCountMatches++;
		}
	}
});



function createListItem(text) {
	return '<li>'+text+'</li>';
}


});