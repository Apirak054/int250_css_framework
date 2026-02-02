// 1. Initial State & Elements
let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Load from Storage [cite: 39]
let currentFilter = 'all';

const taskInput = document.getElementById('taskInput');
const priorityInput = document.getElementById('priorityInput');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');
const taskCounter = document.getElementById('taskCounter');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

// Bootstrap Modal Instance
const editModal = new bootstrap.Modal(document.getElementById('editModal'));

// 2. Main Functions

// Save to LocalStorage [cite: 8, 38]
function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Render Tasks [cite: 35, 9]
function renderTasks() {
    taskList.innerHTML = '';
    
    // Filter logic (Search + Tab Filters) 
    const searchText = searchInput.value.toLowerCase();
    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.title.toLowerCase().includes(searchText);
        const matchesFilter = 
            currentFilter === 'all' ? true :
            currentFilter === 'active' ? !task.completed :
            task.completed;
        return matchesSearch && matchesFilter;
    });

    // Generate HTML
    filteredTasks.forEach(task => {
        // Priority Badge Color 
        let badgeClass = 'bg-secondary';
        if (task.priority === 'High') badgeClass = 'bg-danger';
        if (task.priority === 'Medium') badgeClass = 'bg-warning text-dark';
        if (task.priority === 'Low') badgeClass = 'bg-success';

        const li = document.createElement('li');
        li.className = `list-group-item d-flex justify-content-between align-items-center task-card mb-2 border-0 text-white ${task.completed ? 'completed' : ''}`;
        li.style.backgroundColor = '#2b2b40'; // Match CSS
        
        li.innerHTML = `
            <div class="d-flex align-items-center gap-3">
                <input type="checkbox" class="form-check-input mt-0" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
                <div>
                    <div class="fw-bold task-title">${task.title}</div>
                    <span class="badge ${badgeClass}" style="font-size: 0.7em;">${task.priority}</span>
                    <small class="text-muted ms-2">${new Date(task.id).toLocaleDateString()}</small>
                </div>
            </div>
            <div class="btn-group">
                <button class="btn btn-sm btn-outline-info" onclick="openEditModal(${task.id})">✎</button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${task.id})">🗑</button>
            </div>
        `;
        taskList.appendChild(li);
    });

    updateStats();
}

// Add Task [cite: 34]
function addTask() {
    if (taskInput.value.trim() === '') return;
    
    const newTask = {
        id: Date.now(), // Use timestamp as unique ID
        title: taskInput.value,
        priority: priorityInput.value,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = ''; // Clear input
    saveAndRender();
}

// Delete Task [cite: 37]
window.deleteTask = function(id) {
    if(confirm('Are you sure?')) {
        tasks = tasks.filter(t => t.id !== id);
        saveAndRender();
    }
};

// Toggle Complete [cite: 36]
window.toggleTask = function(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveAndRender();
    }
};

// Edit Task Logic [cite: 48]
let editingId = null;
window.openEditModal = function(id) {
    const task = tasks.find(t => t.id === id);
    if(task) {
        editingId = id;
        document.getElementById('editTaskTitle').value = task.title;
        document.getElementById('editTaskPriority').value = task.priority;
        editModal.show();
    }
};

document.getElementById('saveEditBtn').addEventListener('click', () => {
    const task = tasks.find(t => t.id === editingId);
    if(task) {
        task.title = document.getElementById('editTaskTitle').value;
        task.priority = document.getElementById('editTaskPriority').value;
        saveAndRender();
        editModal.hide();
    }
});

// Stats & Clear Completed [cite: 49, 51]
function updateStats() {
    const activeCount = tasks.filter(t => !t.completed).length;
    const totalCount = tasks.length;
    taskCounter.innerText = `${totalCount} total, ${activeCount} active`;
    
    const hasCompleted = tasks.some(t => t.completed);
    clearCompletedBtn.classList.toggle('d-none', !hasCompleted);
}

clearCompletedBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    saveAndRender();
});

// 3. Event Listeners [cite: 7, 54]
document.getElementById('addTaskBtn').addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

searchInput.addEventListener('input', renderTasks);

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active to clicked
        e.target.classList.add('active');
        // Update filter state
        currentFilter = e.target.getAttribute('data-filter');
        renderTasks();
    });
});

// Initial Render
renderTasks();