const container = document.getElementById('container');
let api_user = "users"
let api_url = `https://jsonplaceholder.typicode.com/${api_user}`;

fetch(api_url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        } else {
            return response.json();
        }
    })
    .then((data) => {
        let wrapper = data.map(item => {
            return `<div class="item">
        <h4>UserId:${item.id}</h4>
        <h4>Name:${item.name}</h4>
        <h4>UserName:${item.username}</h4>
        <h4>UserEmail:${item.email}</h4>
    </div>`;
        })
        container.innerHTML = wrapper.join("");
    })