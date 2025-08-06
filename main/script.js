// light and dark theme is a must have!
const themeToggle = document.getElementById('themeToggle');
function applyTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
}
themeToggle.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(newTheme);
});
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

// function to post the new blog and add to history
function addBlogEntry(newEntry) {
    blogs.unshift(newEntry);
    refreshHistory();
    displayBlog(blogs[0]);
    localStorage.setItem(storageKey, JSON.stringify(blogs));
};
function displayBlog(blog) {
    const main = document.getElementById('currentBlog');
    main.innerHTML = `
        <h1>${blog.title}</h1>
        <p><em>${blog.date}</em></p>`;

    blog.content.forEach(block => {
        
        let element;
        switch (block.type) {
            case 'text':
                element = document.createElement('p');
                element.textContent = block.data;
                break;
            
            case 'image':
                element = document.createElement('div');
                element.classList.add('photo-box');
                element.style.backgroundImage = `url(${block.data})`;
                break;


            case 'list':
                element = document.createElement('ul');
                block.data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    element.appendChild(li);
                });
                break;
            
            case 'table':
                element = document.createElement('table');
                element.style.borderCollapse = 'collapse';
                block.data.forEach(row => {
                    const tr = document.createElement('tr');
                    row.forEach(cell => {
                        const td = document.createElement('td');
                        td.textContent = cell;
                        td.style.border = '1px solid gray';
                        td.style.padding = '4px';
                        tr.appendChild(td);
                    });
                    element.appendChild(tr);
                });
                break;
        }
        if (element) main.appendChild(element);
    });    
};
function refreshHistory() {
    const historyList = document.getElementById('pastBlogs');
    historyList.innerHTML = '';

    blogs.forEach((blog, i) => {
        const li = document.createElement('li');
        li.textContent = blog.title;

        li.addEventListener('click', () => displayBlog(blogs[i]));
        historyList.appendChild(li);
    
        const editBtn = document.createElement('button');
        editBtn.textContent = 'E';
        editBtn.title = 'Edit Blog';
        editBtn.classList.add('hidden-buttons');
        editBtn.style.marginLeft = '5px';
        editBtn.style.fontSize = '0.8rem';
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            editBlog(i);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'D';
        deleteBtn.title = 'Delete Blog';
        deleteBtn.classList.add('hidden-buttons');
        deleteBtn.style.leftMargin = '2px';
        deleteBtn.style.fontSize = '0.8rem';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteBlog(i);
        });

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
    });
};
function deleteBlog(index) {
    if (!confirm(`Delete "${blogs[index].title}"?`)) return;
    blogs.splice(index, 1);
    localStorage.setItem(storageKey, JSON.stringify(blogs));

    refreshHistory();
    if (blogs.length > 0) {
        displayBlog(blogs[0]);
    } else {
        document.getElementById('currentBlog').innerHTML = '<p>No blogs yet</p>';
    }
};
function editBlog(index) {
    const newTitle = prompt('Edit blog title:', blogs[index].title);
    if (newTitle) {
        blogs[index].title = newTitle;
        refreshHistory();
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }
};
function exportBlogs() {
    const dataStr = JSON.stringify(blogs, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'devBlogBackup.json';
    a.click();

    URL.revokeObjectURL(url);
    alert('Blogs exported as devBlogBackup.json');
};
function importBlogs() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);

                if (!Array.isArray(imported)) {
                    alert('Invalid file format.');
                    return;
                };

                blogs = imported;
                localStorage.setItem('blogs', JSON.stringify(blogs));
                refreshHistory();
                displayBlog(blogs[blogs.length - 1]);
                alert('Blogs imported successfully!');
            } catch (error) {
                alert('Error importing blogs: ' + error.message);
            };
        };
        reader.readAsText(file);
    };
    input.click();
};

const exportBtn = document.getElementById('exportBtn');
if (exportBtn) {
    exportBtn.addEventListener('click', exportBlogs);
};
const importBtn = document.getElementById('importBtn');
if (importBtn) {
    importBtn.addEventListener('click', importBlogs);
};

document.addEventListener('keydown', (event) => {
  // Ctrl+Shift+E will toggle secret buttons
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'e') {
    document.querySelectorAll('.hidden-buttons').forEach(btn => {
      btn.style.display = (btn.style.display === 'none' || btn.style.display === '') 
        ? 'inline-block' 
        : 'none';
    });
  };
});