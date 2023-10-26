let firstNameEl = document.getElementById("first_name");
let lastNameEl = document.getElementById("last_name");
let firstIssueE1 = document.getElementById("issueFirst")
let lastIssueE1 = document.getElementById("issueLast")

let countryStatusEl = document.getElementById("status")
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale")
let emailEl = document.getElementById("email");
let numberEl = document.getElementById("number");
let emailIssueEl = document.getElementById("emailIssue");
let numberIssueEl = document.getElementById("numberIssue");


let dateE1 = document.getElementById("date");
let qualifyEl = document.getElementById("qualify");
let dateIssueEl = document.getElementById("dateIssue");
let QualificationIssueEl = document.getElementById("QualificationIssue");
let myFormEl = document.getElementById("myForm")

let formData = {
    firstName: "",
    LastName: "",
    email: "",
    number: "",
    gender: "Male",
    date: "",
    country: "America",
    profession: ""
};

firstNameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        firstIssueE1.textContent = "Required*";
    } else {
        firstIssueE1.textContent = "";
    }

    formData.firstName = event.target.value;
});
lastNameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        lastIssueE1.textContent = "Required*";
    } else {
        lastIssueE1.textContent = "";
    }

    formData.LastName = event.target.value;
});
emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailIssueE1.textContent = "Required*";
    } else {
        emailIssueE1.textContent = "";
    }

    formData.email = event.target.value;
});

numberEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        numberIssueE1.textContent = "Required*";
    } else {
        numberIssueE1.textContent = "";
    }

    formData.number = event.target.value;
});
countryStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});
dateE1.addEventListener("change", function(event) {
    if (event.target.value === "") {
        dateIssueE1.textContent = "Required*";
    } else {
        dateIssueE1.textContent = "";
    }

    formData.date = event.target.value;
});
qualifyEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        QualificationIssueE1.textContent = "Required*";
    } else {
        QualificationIssueEl.textContent = "";
    }

    formData.profession = event.target.value;
});

function validateFormData(formData) {
    let {
        firstName,
        LastName,
        email,
        number,
        gender,
        date,
        country,
        profession
    } = formData;
    if (firstName === "") {
        firstIssueE1.textContent = "Required*";
    }
    if (LastName === "") {
        lastIssueE1.textContent = "Required*";
    }
    if (number === "") {
        numberIssueEl.textContent = "Required*";
    }
    if (date === "") {
        dateIssueEl.textContent = "Required*";
    }
    if (profession === "") {
        QualificationIssueEl.textContent = "Required*";
    }

    if (email === "") {
        emailIssueEl.textContent = "Required*";
    }
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);

});

function clearData() {
    myFormEl.reset()
}