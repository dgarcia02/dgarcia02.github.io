// toggle when user clicks on button
const openDropdown = () => {
    document.getElementById("dropBtn").classList.toggle("show");    
}

window.onClick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content')
        // const i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}