const btn = document.querySelector('#btnAdd');

btn.onclick = function() {
    const content = document.getElementById('txtAdd').value;

    const main = document.getElementById('works');
    if(main){
        const work = document.createElement('div');
        work.classList.add('work');

        work.onclick = function(e) {
            if(e.target.closest('.delete-work')){
                main.removeChild(work);
            }
        }

        work.onclick = function(e) {
            if(e.target.closest('.check-work')){
                work.style.backgroundColor = '#35de38';
                work.innerHTML = `
                    <div class="title">${content}</div>
                `;
            }
        }

        work.innerHTML = `
            <div class="title">${content}</div>
            <div class="check-work"><i class="fa-solid fa-check"></i></div>
            <div class="delete-work"><i class="fa-solid fa-xmark"></i></div>
        `;

        main.appendChild(work);
    }
}