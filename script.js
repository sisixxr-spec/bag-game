let count = 1;

function nextScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function addClue() {
    const item = document.getElementById('itemInput').value;
    const reason = document.getElementById('reasonInput').value;

    if (item === "") return alert("Enter a clue first!");

    const li = document.createElement('li');
    li.innerHTML = `<strong>Clue #${count}: ${item}</strong><br><small>${reason}</small>`;
    document.getElementById('itemsList').prepend(li); // يضيف الغرض الجديد فوق

    // تصفير الخانات
    document.getElementById('itemInput').value = "";
    document.getElementById('reasonInput').value = "";

    // تفعيل التويست (مثلاً بعد 4 أغراض)
    if (count === 4) {
        document.getElementById('twist-trigger').classList.remove('hidden');
        document.querySelector('.input-area').classList.add('hidden');
    }

    count++;
    document.getElementById('clue-count').innerText = count;

    // إظهار زر النهاية بعد الغرض رقم 6
    if (count > 6) {
        document.getElementById('final-btn').classList.remove('hidden');
    }
}

function resumeGame() {
    document.getElementById('twist-trigger').classList.add('hidden');
    document.querySelector('.input-area').classList.remove('hidden');
}
