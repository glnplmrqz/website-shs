 // Calendar data
 const CALENDAR_DATA = {
    months: [
        { name: 'Jan', fullName: 'January', days: 31, startDay: 6 },
        { name: 'Feb', fullName: 'February', days: 28, startDay: 2 },
        { name: 'Mar', fullName: 'March', days: 31, startDay: 2 },
        { name: 'Apr', fullName: 'April', days: 30, startDay: 5 },
        { name: 'May', fullName: 'May', days: 31, startDay: 7 },
        { name: 'Jun', fullName: 'June', days: 30, startDay: 3 },
        { name: 'Jul', fullName: 'July', days: 31, startDay: 5 },
        { name: 'Aug', fullName: 'August', days: 31, startDay: 1 },
        { name: 'Sep', fullName: 'September', days: 30, startDay: 4 },
        { name: 'Oct', fullName: 'October', days: 31, startDay: 6 },
        { name: 'Nov', fullName: 'November', days: 30, startDay: 2 },
        { name: 'Dec', fullName: 'December', days: 31, startDay: 4 }
    ],
    events: {
        'Jan1': 'New Years Day',
        'Feb1': 'Chinese New Year',
        'Feb25': 'People Power Anniversary',
        'Mar19': "Gian's Birthday",
        'Apr9': 'Day of Valor',
        'Apr14': 'Maundy Thursday',
        'Apr15': 'Good Friday',
        'Apr16': 'Black Saturday',
        'Apr17': 'Easter Sunday',
        'Apr23': "Mark's Birthday",
        'May1': 'Labour Day',
        'May3': 'Eidul-Fitar',
        'May9': 'Philippine Election Day',
        'Jun12': 'Independence Day',
        'Jun19': "Sherwin's Birthday",
        'Jul10': 'Eid al-Adha (Feast of the Sacrifice)',
        'Aug11': "Abraham's Birthday",
        'Aug21': 'Ninoy Aquino Day',
        'Aug29': 'National Heroes Day',
        'Sep17': "Glen's Birthday",
        'Nov1': 'All Saints Days',
        'Nov2': 'All Souls Day',
        'Nov30': 'Bonifacio Day',
        'Dec2': "Jhoseph's Birthday",
        'Dec8': 'Feast of the Immaculate Conception',
        'Dec24': 'Christmas Eve',
        'Dec25': 'Christmas Day',
        'Dec30': 'Rizal Day',
        'Dec31': "New Year's Eve"
    }
};

class Calendar {
    constructor(data) {
        this.data = data;
        this.selectedMonth = null;
        this.selectedDate = null;
        this.init();
    }

    init() {
        this.renderMonths();
        this.selectMonth('Jan');
    }

    renderMonths() {
        const monthsContainer = document.getElementById('month');
        monthsContainer.innerHTML = this.data.months.map(month => `
            <li id="${month.name}">
                <a href="#" title="${month.name}">${month.name}</a>
            </li>
        `).join('');

        monthsContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                this.selectMonth(e.target.title);
            }
        });
    }

    selectMonth(monthName) {
        // Clear previous selection
        const prevSelected = document.querySelector('.months .selected');
        if (prevSelected) {
            prevSelected.classList.remove('selected');
        }

        // Set new selection
        const monthElement = document.querySelector(`#${monthName} a`);
        monthElement.classList.add('selected');
        this.selectedMonth = monthName;

        // Render days for selected month
        this.renderDays(monthName);
    }

    renderDays(monthName) {
        const month = this.data.months.find(m => m.name === monthName);
        const daysContainer = document.getElementById('day');
        let html = '';

        // Previous month's days
        const prevDays = month.startDay - 1;
        const prevMonth = this.data.months[this.data.months.findIndex(m => m.name === monthName) - 1] || 
                        this.data.months[11];
        for (let i = prevDays; i > 0; i--) {
            html += `<li class="disabled"><a href="#" class="previous">${prevMonth.days - i + 1}</a></li>`;
        }

        // Current month's days
        for (let i = 1; i <= month.days; i++) {
            const hasEvent = this.data.events[`${monthName}${i}`];
            const className = hasEvent ? 'event' : '';
            html += `
                <li data-date="${i}" data-month="${monthName}">
                    <a href="#" class="${className}">${i}</a>
                </li>
            `;
        }

        // Next month's days
        const totalCells = 42;
        const remainingCells = totalCells - (prevDays + month.days);
        for (let i = 1; i <= remainingCells; i++) {
            html += `<li class="disabled"><a href="#" class="previous">${i}</a></li>`;
        }

        daysContainer.innerHTML = html;

        // Add click handlers
        daysContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && !e.target.parentElement.classList.contains('disabled')) {
                e.preventDefault();
                this.selectDate(e.target.parentElement);
            }
        });
    }

    selectDate(dateElement) {
        // Clear previous selection
        const prevSelected = document.querySelector('.days .selected');
        if (prevSelected) {
            prevSelected.classList.remove('selected');
        }

        // Update selection
        const day = dateElement.dataset.date;
        const month = dateElement.dataset.month;
        const monthData = this.data.months.find(m => m.name === month);
        
        dateElement.querySelector('a').classList.add('selected');

        // Update current date display
        const date = new Date(2022, this.data.months.indexOf(monthData), day);
        const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
        document.getElementById('current').innerHTML = `${weekday}<span>${monthData.fullName} ${day}</span>`;

        // Update notes
        const event = this.data.events[`${month}${day}`];
        document.getElementById('notes').textContent = event || 'Nothing for today';
    }
}

// Initialize calendar
const calendar = new Calendar(CALENDAR_DATA);