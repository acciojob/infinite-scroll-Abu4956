const list = document.getElementById("infi-list");

let count = 1;

function addItems(num) {
    for (let i = 0; i < num; i++) {
        const li = document.createElement("li");
        li.textContent = `Item ${count++}`;
        list.appendChild(li);
    }
}

// Add 10 items initially
addItems(10);

// Add 2 items whenever the list reaches its end
window.addEventListener("scroll", function () {
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
    ) {
        addItems(2);
    }
});