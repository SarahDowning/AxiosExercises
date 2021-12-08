"Use strict"

const getOutput = document.querySelector("#getOutput");

const getUsers = () => {
    
    axios
        .get(`https://reqres.in/api/users?page=2`)
        .then(res => {
            console.log(res);
            const users = res.data.data;
            getOutput.innerHTML = "";
            for (let user of users) {
                const userContainer = document.createElement("div");

                const userFirstName = document.createElement("p");
                userFirstName.innerText = `First name: ${user.first_name}`;
                userContainer.appendChild(userFirstName);

                const userLastName = document.createElement("p");
                userLastName.innerText = `Last name: ${user.last_name}`;
                userContainer.appendChild(userLastName);

                const userEmail = document.createElement("p");
                userEmail.innerText = `Email: ${user.email}`;
                userContainer.appendChild(userEmail);

                const userId = document.createElement("p");
                userId.innerText = `ID: ${user.id}`;
                userContainer.appendChild(userId);

                getOutput.appendChild(userContainer);
            }
        })
        .catch(err => console.error(err));
}

// Get request for list of users
document.querySelector("button#listUser").addEventListener("click", getUsers);


const getUserById = () => {
    axios
        .get(`https://reqres.in/api/users/2`)
        .then(res => {
            console.log(res);
            const userById = document.createElement("ol")
            getOutput.appendChild(userById);
        })
        .catch(err => console.error(err));
}

// Get request for single user with id of 2
document.querySelector("button#listUserById").addEventListener("click", getUserById);



// Post request for create
document.querySelector("#userForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // const form = event.target
        const form = this
        const userData = {
            id: form.userId.value,
            email: form.emailId.value,
            first_name: form.firstName.value,
            last_name: form.lastName.value,
            avatar: "'https://reqres.in/img/faces/12-image.jpg'"
        };

        axios
            .post(`https://reqres.in/api/users`, userData)
            .then((res) => {
                form.reset();
                form.firstName.focus();
                console.log(res);
            }).catch(err => console.error(err));
});

//                 // Deleting the people
//         document.querySelector("#deleteForm").addEventListener("submit", function(event) {
//         event.preventDefault();
//          const userId = form.userId.value;
       
//          axios
//             .delete(`https://reqres.in/api/users/2,${userId}`)
//             .then(res => {
//                 console.log(res);
//                 form.reset();
//                 form.userId.focus();
//                 getUsers();
//       }) .catch(err => console.error(err));
//     })
// });
