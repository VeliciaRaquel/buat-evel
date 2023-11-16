document.addEventListener("DOMContentLoaded", function () {
    var popupContainer = document.getElementById('popupContainer');
    var popupContent = document.getElementById('popupContent');
    var messageIndex = 0;

    var messages = [
        {
            title: 'Another Year Older, Another Year Wiser!',
            image: '5fe1f972dccb5f685c14b1f44ce695f0.png',
            text: 'May all your dreams come true!'
        },
        {
            title: 'Celebrate and Enjoy Your Special Day!',
            image: 'b2a9f394f4a957d1e461494fa63835f7.png',
            text: 'Best wishes for the year ahead!'
        },
	{
            title: 'Sending Birthday Hugs!!',
            image: '2660ab52939da93a9e397db208a7ba52.jpg',
            text: 'Even if were miles apart, know that my love is always with you. Have a fantastic day!'
        },
        {
            title: 'Another year of Learning! Hopefully...',
            image: '2e35ad4ca175d122cec93b14b1b8c4de.jpg',
            text: 'Congratulations on being a year older and not much wiser. Keep up the good work!'
        },
        {
            title: 'Happy Birthday! Because Aging is a Piece of Cake...',
            image: '7f3224b310b170e8ff88381dc4cf48be.jpg',
            text: 'Aging is like a piece of cake – sweet, crumbly, and sometimes covered in frosting. Enjoy your cake!'
        },
	{
	title: 'Congratulations on Being One Year Closer to Wisdom (or Insanity)...',
        image: '2560d4ac12440fa90db63a4803dee5d8.jpg',
        text: 'Happy Birthday! Youre one year closer to wisdom... or insanity. Its a fine line.'
    	},
    	{
        title: 'Happy Birthday! Because Growing Up is a Trap...',
        image: '30079fd9137e1a20a7e36be468448657.png',
        text: 'Growing up is a trap. Stay young, stay foolish, and enjoy your birthday like a rebel!'
    	},
    	{
        title: 'Congratulations on Reaching the "Still Deciding What to Be When You Grow Up" Milestone!',
        image: '9d07085dd3a08f473b651fc61eb2f13d.jpg',
        text: 'Congrats on reaching the "still deciding what to be when you grow up" milestone.'
    	},
    	{
        title: 'Because Age is Just a Number, Not a Distance...',
        image: '3547572a48f68776370ded4de4e2bdaf.png',
        text: 'Age is just a number, and distance is just a concept, right? Enjoy the long-distance celebration!'
    	},
    	{
        title: 'Because Hugs Through the Screen Count Too...',
        image: '76b9e94f1b3c075adb0a6d7e6ef1e617.jpg',
        text: 'Sending virtual birthday hugs because apparently, they count just as much. Embrace the pixelated love!'
    	},
    	{
        title: 'Happy Birthday to My Sister in a Different Time Zone!',
        image: 'ec1b8becc99df3d839a6a2055d04f997.png',
        text: 'Wishing a happy birthday to my sister in a different time zone. Cause Im living in the future!'
    	},
    	{
        title: 'Enjoy the Virtual Cake... Its Calorie-Free!',
        image: '8508e1c2120275d0e0eb9513196eb4dc.jpg',
        text: 'Heres your virtual cake—calorie-free and distance-approved. The best kind of celebration!'
    	},
    	{
        title: 'Living That 24/7 Parental Surveillance Life...',
        image: 'e4f5bfa6e796e610ce0a4aa49eb1af8d.jpg',
        text: 'Cheers to another year of 24/7 parental surveillance. Privacy is overrated anyway.'
    	},
    	{
        title: 'Cheers to Home Sweet Home, Where the Wi-Fi is Strong and the Rent is Free...',
        image: 'de27afb07706572fae2a2ceb14f23f7b.jpg',
        text: 'Happy Birthday! Cheers to home sweet home, where the Wi-Fi is strong, and the rent is free. What more could you ask for?'
    	},
    	{
        title: 'Still Deciding Between Doing Laundry Now or Later...',
        image: '9c0e2a894f75d204b2584af0ae324b47.png',
        text: 'To return laundry now or leter..., that is the question. Happy Birthday to the sibling with the everyday laundry pile!'
    	},
    	{
        title: 'Get Ready for the Studying Abroad Rollercoaster!',
        image: '5e245783abe02b509e96d9657ee203f3.png',
        text: 'Brace yourself for the thrilling rollercoaster of studying abroad! Spoiler alert: It involves equal parts excitement and existential crisis.'
    	},
    	{
        title: 'Soon Youll Navigate Public Transportation Like a Local... Maybe...',
        image: 'ea7999f3910acbcda9dd092db491edc5.png',
        text: 'Navigating public transportation like a local is an art form. Dont worry; youll master it in just a few wrong turns and not enough money to get on the bus and getting on the wrong bus... and...'
    	},
    	{
        title: 'Get Ready to Join the Study Abroad Struggle Bus!',
        image: '43261ef71ad5464231bd3d559fbe25ab.jpg',
        text: 'Brace yourself for the study abroad struggle bus – where every ticket comes with a side of culture shock and sleepless nights!'
    	},
    	{
        title: 'Cheers to Joining the Prestigious Club of Insomniac Scholars...',
        image: '970360ad9818e2fc9c71213feb77a73b.jpg',
        text: 'Happy Birthday! Youre about to join the exclusive club of insomniac scholars, where every member proudly wears bags under their eyes as a badge of honor.'
    	},
    	{
        title: 'Happy Birthday! Soon Youll Be a Pro at the Fine Art of Last-Minute Assignment Excellence...',
        image: '3f8472d0d98ecc44ad196d5e24c652dd.jpg',
        text: 'Wishing you a birthday as efficient as your future study habits! Soon, youll be a pro at the fine art of crafting last-minute assignments with unmatched excellence.'
    	},
    	{
        title: 'Refresh to Watch Again!',
        image: '6fa64cffcf733dfe360e185980b3c707.png',
        text: 'Yang semangat ngerjain tugas sama bantuin mami buat roti sama ngembaliin bajunya kamu, mami , dan papi sama <br> jangan tidur malem malem kaya cicik ni jam setengah 2 malem baru selesai buat ini. <br> Gila awalnya mau buat game tau ga tp sadar diri cicik waktunya ga realitis. <br> Tahun depan request apa hadiah nya? jangan yang mahal wkwkwkwk. Uang cicik terbatas disini.'
    	},
        // Add more messages as needed
    ];

    function showNextMessage() {
        if (messageIndex < messages.length) {
            var message = messages[messageIndex];
            popupContent.innerHTML = `
                <h2 class="vaporwave">${message.title}</h2>
                <div class="image-container">
                    <img src="${message.image}" alt="Birthday Image">
                </div>
                <p class="vaporwave">${message.text}</p>
                <button class="vaporwaveButton">Next</button>
            `;
            messageIndex++;

            // Attach event listener to the new button
            var nextButton = document.querySelector('.vaporwaveButton');
            nextButton.addEventListener('click', showNextMessage);
        } else {
            closePopup();
        }
    }

    function closePopup() {
        popupContainer.style.display = 'none';
    }

    // Initial show when the page loads
    popupContainer.style.display = 'flex';

    // Attach event listener to the initial button
    var initialButton = document.querySelector('.vaporwaveButton');
    initialButton.addEventListener('click', showNextMessage);
});

