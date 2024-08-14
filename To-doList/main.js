const btn = document.querySelector('#btnAdd');
const main = document.getElementById('works');

btn.onclick = function() {
    const content = document.getElementById('txtAdd').value;

    if(main){
        const work = document.createElement('div');
        work.classList.add('work');
        
/*-------------------When using onclick method to solve, one section such as work only respond one click, so using addEvenListener method to do it---------------------------*/ 
 
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
                countWorks();
            }
        })

        work.addEventListener('click', function(e) {
            if(e.target.closest('.check-work')){
                work.style.backgroundColor = '#35de38';
                work.style.animation = `fadeOut 1s forwards`;
                /*Because the animation takes 1 second to fade out, using setTimeout with a 1-second delay to postpone removeChild*/
                setTimeout(function(){
                    main.removeChild(work);
                    countWorks();
                }, 1000)
            }
        })

        work.innerHTML = `
            <div class="title">${content}</div>
            <div class="check-work"><i class="fa-solid fa-check"></i></div>
            <div class="delete-work"><i class="fa-solid fa-xmark"></i></div>
        `;

        main.appendChild(work);
        countWorks();
    }
}

/*Counting the amount of works currently are active*/
function countWorks(){
    const works = document.querySelector('.NumberOfWorks');
        const NoWorks = main.childElementCount;
        if(NoWorks>0){
            works.innerHTML = `
            <h3>(${NoWorks} works)</h3>
        `;
        }else{
            works.innerHTML =``;
        }
}
