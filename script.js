function addItem() {
    const item = document.getElementById('itemInput').value;
    const reason = document.getElementById('reasonInput').value;
    if (item === "") {
        alert("Please enter an item first!");
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `<strong>📍 ${item}</strong> <br> <small style="color: #666;">${reason}</small>`;
    document.getElementById('itemsList').appendChild(li);
    document.getElementById('itemInput').value = "";
    document.getElementById('reasonInput').value = "";
}

function revealMystery() {
    const box = document.getElementById('destination');
    box.style.display = (box.style.display === 'block') ? 'none' : 'block';
}
