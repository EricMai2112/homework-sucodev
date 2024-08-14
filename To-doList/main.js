const btn = document.querySelector('#btnAdd');

btn.onclick = function() {
    const content = document.getElementById('txtAdd').value;

    const main = document.getElementById('works');
    if(main){
        const work = document.createElement('div');
        work.classList.add('work');
        
/*-------------------When using onclick to solve, one section such as work only respond one click, so using addEvenListener to do it---------------------------*/ 
 
        // work.onclick = function(e) {
        //     if(e.target.closest('.delete-work')){
        //         main.removeChild(work);
        //     }
        // }

        // work.onclick = function(e) {
        //     if(e.target.closest('.check-work')){
        //         work.style.backgroundColor = '#35de38';
        //         work.innerHTML = `
        //             <div class="title">${content}</div>
        //         `;
        //     }
        // }
        work.addEventListener('click', function(e){
            if(e.target.closest('.delete-work')){
                main.removeChild(work);
            }
        })

        work.addEventListener('click', function(e) {
            if(e.target.closest('.check-work')){
                work.style.backgroundColor = '#35de38';
                work.style.animation = `fadeOut 1s forwards`;
                setTimeout(function(){
                    main.removeChild(work);
                }, 1000)
            }
        })

        work.innerHTML = `
            <div class="title">${content}</div>
            <div class="check-work"><i class="fa-solid fa-check"></i></div>
            <div class="delete-work"><i class="fa-solid fa-xmark"></i></div>
        `;

        main.appendChild(work);
    }
}