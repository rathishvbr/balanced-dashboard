module("Balanced.ProductionAccessRequest");

test("#dob", function(assert) {
	var subject = Balanced.ProductionAccessRequest.create({
		dobYear: 1980,
		dobMonth: 1,
		dobDay: 31
	});

	assert.equal(subject.get("dob"), "1980-01-31");
});


test("#getPersonAttributes", function(assert) {
	var subject = Balanced.ProductionAccessRequest.create({
		personalInformation: {
			name: "Big Bird",
			socialSecurityNumber: "1111"
		},
		streetAddress: "123 Sesame St",
		postalCode: "98210",
		phoneNumber: "111 234 0099",
		dobYear: 1980,
		dobMonth: 1,
		dobDay: 31
	});

	assert.deepEqual(subject.getPersonAttributes(), {
		street_address: "123 Sesame St",
		postal_code: "98210",
		phone_number: "111 234 0099",

		dob: "1980-01-31",
		name: "Big Bird",
		tax_id: "1111",
	});
});

test("#getPersonApiKeyAttributes", function (assert) {
	var subject = Balanced.ProductionAccessRequest.create({
		personalInformation: {
			name: "Big Bird",
			socialSecurityNumber: "1111"
		},
		streetAddress: "123 Sesame St",
		postalCode: "98210",
		phoneNumber: "111 234 0099",
		dobYear: 1980,
		dobMonth: 1,
		dobDay: 31
	});

	assert.deepEqual(subject.getPersonApiKeyAttributes(), {
		type: "PERSON",
		street_address: "123 Sesame St",
		postal_code: "98210",
		phone_number: "111 234 0099",

		dob: "1980-01-31",
		name: "Big Bird",
		tax_id: "1111",
	});
});
