const searchInput = document.getElementById('searchInput');
        const buttons = document.querySelectorAll('.button');

        // Функция для инициализации Popover на кнопках
        function initializePopovers() {
            buttons.forEach(button => {
                const popover = button.querySelector('.popover');
                if (popover) {
                    button.addEventListener('mouseover', () => {
                        popover.style.display = 'block';
                    });

                    button.addEventListener('mouseout', () => {
                        popover.style.display = 'none';
                    });
                }
            });
        }

        initializePopovers(); // Инициализировать Popover при загрузке страницы

        searchInput.addEventListener('input', () => {
            const searchText = searchInput.value.toLowerCase();

            buttons.forEach(button => {
                const buttonText = button.textContent.toLowerCase();
                const popover = button.querySelector('.popover');

                if (buttonText.includes(searchText)) {
                    button.style.display = 'block';
                    if (popover) {
                        popover.style.display = 'none'; // Скрыть Popover после фильтрации
                    }
                } else {
                    button.style.display = 'none';
                    if (popover) {
                        popover.style.display = 'none';
                    }
                }
            });

            initializePopovers(); // Инициализировать Popover после фильтрации
        });
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            button.style.borderRight = `10px solid ${randomColor}`;
        });
        
        button.addEventListener('mouseout', () => {
            button.style.borderRight = '10px solid transparent';
        });
    });
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

