  // For Gallery Function
  document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const sidebarBtn = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
  
    // Toggle sidebar
    sidebarBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('active');
        if(content) content.classList.toggle('active');
        this.classList.toggle('active');
    });
  
    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !sidebarBtn.contains(e.target)) {
            sidebar.classList.remove('active');
            if(content) content.classList.remove('active');
            sidebarBtn.classList.remove('active');
        }
    });
  
    // Prevent clicks inside sidebar from closing it
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
  
    // Close sidebar on mobile when clicking a link
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                if(content) content.classList.remove('active');
                sidebarBtn.classList.remove('active');
            }
        });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const sidebarBtn = document.getElementById('sidebarCollapse');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
  
    // Check if all elements exist
    console.log('Close button:', closeBtn); // Debugging line
    console.log('Sidebar:', sidebar); // Debugging line
  
    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        if (content) content.classList.remove('active');
        sidebarBtn.style.display = 'flex';
    }
  
    // Function to open sidebar
    function openSidebar() {
        sidebar.classList.add('active');
        if (content) content.classList.add('active');
        sidebarBtn.style.display = 'none';
    }
  
    // Sidebar button event listener
    if (sidebarBtn) {
        sidebarBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            openSidebar();
        });
    }
  
    // Close button event listener
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeSidebar();
        });
    }
  
    // Click outside sidebar to close
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !sidebarBtn.contains(e.target)) {
            closeSidebar();
        }
    });
  
    // Prevent sidebar clicks from closing
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
  
    // Mobile link clicks
    const sidebarLinks = sidebar.querySelectorAll('a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });
  });