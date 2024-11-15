 const news = [
            {
                title: "Kritti- The Design Community",
                organization: "Incubation Center",
                date: "2024-10-13",
                description: "Work Of Art With Purpose",
                link: "https://www.instagram.com/kritti_design?igsh=MXI1cGg2M3N6cmpmZQ=="
            },
            {
                title: "Seekspace Community",
                organization: "Incubation Center",
                date: "2024-10-06",
                description: "Seekspace: Where Ambitions Meet Opportunities.",
                link: "https://www.instagram.com/seekspace.club?igsh=MTE1d3FsOXBlYmVpbQ=="
            },
            {
                title: "DevsOnLoop- The Developers Community",
                organization: "Incubation Center",
                date: "2024-09-15",
                description: "Bridging Students and Technology for a Smarter Future.",
                link: "https://www.instagram.com/devsonloop?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
            },
            {
                title: "Summer Internships",
                organization: "Incubation Center",
                date: "2024-05-03",
                description: "Make your summer count with an impactful internship!",
                link: "https://drive.google.com/file/d/1vYGhEIDbtB-vJgq7o0Pwr6GqusODXF8T/view"
            },
            {
                title: "Internship Opportunity",
                organization: "BIICF",
                date: "2024-04-24",
                description: "Free internship opportunity at Incubation Center, BIET Jhansi (BIICF) for all B.Tech, MBA students, Kindly reach out to veneu for further details. Registrations are opened!",
                link: "https://docs.google.com/forms/d/e/1FAIpQLSeS589WfWgnij3vz4H2UymFeqBbSmNwSNWTAPH5Vae7VxPOSQ/alreadyresponded"
            },
            {
                title: "INNOVANZA 2024",
                organization: "Innovation and Incubation Cell",
                date: "2024-04-07 ",
                description: "Gear up for the ultimate fusion of innovation and celebration at INNOVANZA 2024 and Bundelkhand Startup Utsav 2024!.",
                link: "https://innovanza.iicbietjhs.in"
            },
            {
                title: "DJ Night ",
                organization: "EventOgraphy X BIET Jhansi",
                date: "2024-04-13",
                description: " Get ready to groove! Join us for an electrifying DJ Night.",
                link: "https://www.instagram.com/p/C5Y8tZtSR8C/"
            },
            
        ];

        const events = [
            { date: "2024-11-19", title: "Experts session: Innovation and Leadership skills of Rani Lakshmibai" },
        
            
        ];

        let activeTab = 'news';

        function renderNews() {
            const newsGrid = document.querySelector('.news-grid');
            newsGrid.innerHTML = news.map(item => `
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">${item.title}</h2>
                        <span class="badge">${item.organization}</span>
                    </div>
                    <div class="card-content">
                        <p>${item.description}</p>
                    </div>
                    <div class="card-footer">
                        <span class="date">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            ${new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                        <a href="${item.link}" target="_blank" class="more-button">
                            More
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            `).join('');
        }

        function renderEvents() {
            const eventsList = document.querySelector('.events-list');
            eventsList.innerHTML = events.map(event => `
                <li class="event-item">
                    <div class="event-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <div class="event-details">
                        <h3>${event.title}</h3>
                        <p>${new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                </li>
            `).join('');
        }

        function switchTab(tabName) {
            document.querySelectorAll('.tab-trigger').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.tab === tabName);
            });
            document.getElementById('news-content').style.display = tabName === 'news' ? 'block' : 'none';
            document.getElementById('events-content').style.display = tabName === 'events' ? 'block' : 'none';
            document.getElementById('download-button').style.display = tabName === 'news' ? 'inline-flex' : 'none';
            activeTab = tabName;
        }

        // Initialize the page
        renderNews();
        renderEvents();

        // Add event listeners
        document.querySelectorAll('.tab-trigger').forEach(tab => {
            tab.addEventListener('click', () => switchTab(tab.dataset.tab));
        });

        document.getElementById('download-button').addEventListener('click', (e) => {
            e.preventDefault();
            alert('Downloading all news...');
        });
    
