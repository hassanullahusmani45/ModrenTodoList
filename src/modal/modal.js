export default function modal() {
    const addTodoBtn = document.querySelector('#addTodoBtn');
    const modal = document.querySelector('#addModal');
    const closeBtn = document.querySelector('#closeAddModalBtn');
    const addTodoForm = document.querySelector('#addTodoForm');
    const titleInput = document.querySelector('#title');
    const difficultyInput = document.querySelector('#difficulty');
    const descriptionInput = document.querySelector('#description');
    const addTodoSubmitBtn = document.querySelector('#addTodoSubmitBtn');
    let title = '';
    let difficulty = '';
    let description = '';
    let isTitleValid = false;
    let isDifficultyValid = false;
    let isDescriptionValid = false;



    // error boxes
    const titleErrorBox = document.querySelector('.title');
    const difficultyErrorBox = document.querySelector('.difficulty');
    const descriptionErrorBox = document.querySelector('.description');
    const error = {
        title: '',
        difficulty: '',
        description: ''
    };


    const openModal = () => {
        modal.style.display = 'flex';
        document.body.style.overflow = "hidden";
    }

    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = "auto";
    }

    function addTodo(todo) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('Todo added', todo);
    }


    function updateSubmitButton() {
        if (isTitleValid && isDifficultyValid && isDescriptionValid) {
            addTodoSubmitBtn.disabled = false;
        } else {
            addTodoSubmitBtn.disabled = true;
        }
    }
    addTodoBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Validate title
    titleInput.addEventListener('keyup', () => {

        if (titleInput.value.trim().length < 3) {
            error.title = 'Title must be at least 3 characters long.';
            isTitleValid = false;
        } else if (titleInput.value.trim().length > 50) {
            error.title = 'Title must be less than 50 characters.';
            isTitleValid = false;
        }
        else {
            error.title = '*';
            isTitleValid = true;
            title = titleInput.value.trim();
        }
        titleErrorBox.textContent = error.title;
        updateSubmitButton();
    });
    // Validate difficulty
    difficultyInput.addEventListener('change', () => {
        if (difficultyInput.value < 1) {
            error.difficulty = 'Difficulty must be at least 1.';
            isDifficultyValid = false;
        } else if (difficultyInput.value > 6) {
            error.difficulty = 'Difficulty must be less than 6.';
            isDifficultyValid = false;
        }
        else {
            error.difficulty = '*';
            isDifficultyValid = true;
            difficulty = difficultyInput.value.trim();
        }
        difficultyErrorBox.textContent = error.difficulty;
        updateSubmitButton();
    });

    // Validate description
    descriptionInput.addEventListener('keyup', () => {
        if (descriptionInput.value.trim().length < 10) {
            error.description = 'Difficulty must be at least 1.';
            isDescriptionValid = false;
        } else if (descriptionInput.value.trim().length > 300) {
            error.description = 'Difficulty must be less than 6.';
            isDescriptionValid = false;
        }
        else {
            error.description = '*';
            isDescriptionValid = true;
            description = descriptionInput.value.trim();
        }
        descriptionErrorBox.textContent = error.description;
        updateSubmitButton();
    });




    addTodoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const todo = {
            id: crypto.randomUUID(),
            title,
            difficulty,
            description,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: ""
        };





        if (isTitleValid && isDifficultyValid && isDescriptionValid) {
            addTodo(todo);
            titleInput.value = '';
            difficultyInput.value = '';
            descriptionInput.value = '';
            closeModal();
        } else {
            alert('Please fill in all fields correctly.');
        }
    });


}