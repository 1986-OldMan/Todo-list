
document.querySelector('#add-task').onclick = function () {

    if (document.querySelector('#input-text').value.length == 0) {

        alert('Enter something in to do list');

        console.log('Please enter a task');
    }

    else {

        document.querySelector('#tasks').innerHTML += `

            <div class="task">

                <span id="task-name">

                    ${document.querySelector('#input-text').value}

                </span>

                <button class="delete">

                    <i class="far fa-trash-alt"></i>

                </button>

            </div>
        `;

        console.log('task are put on the list');

        let currentTasks = document.querySelectorAll('.delete');

        for (let i = 0; i < currentTasks.length; i++) {

            currentTasks[i].onclick = function () {

                this.parentNode.remove();

                console.log('task are remove from the list');

            }
        }
    }
}
