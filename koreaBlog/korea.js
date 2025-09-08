const koreaEmoji = {
    travel: '✈️',
    food: '🍜',
    beauty: '🌸',
    culture: '🏯',
    korean: '🇰🇷'
}

const storageKey = 'koreaBlogs';
let blogs = JSON.parse(localStorage.getItem(storageKey)) || [];

if (blogs.length === 0) {
    addBlogEntry({
        title: `${koreaEmoji.travel} My first Korean Won`,
        date: '8/5/2025',
        content: [
            { type: 'text', data: `I picked up some Korean Won at the bank today. I felt like a millionare
            as she counted out the bills, all those extra zeros will make $100 Canadian feel like a lot more!` },
            { type: 'text', data: `The bank lady informed me that I am able to order more Won through my account, 
            online. Then I can keep an eye on the currency exchange rate and order it when I will get the most
             dollar for dollar rate. It takes the bank 3 days to have the money at the branch, ready for pick
              up. The next order, I will try to get 50,000 and 100,000, I'm not sure if there are bills larger
               than that but I don't have an account large enough to find out 😂`},
            { type: 'text', data: `Now I will have to investigate the currency exchange rate over the last couple
             months, or I can just wing it and say "Sure, looks like a good rate!". Should I spreadsheet
              something? Ohhh, my inner geek likes that idea, lol!`}, 
            { type: 'image', data: 'images/koreanWon.jpg', alt: 'Korean Won' }
        ]
    });

    addBlogEntry({
        title: `${koreaEmoji.travel} Plane Tickets Purchased!`,
        date: '8/16/2025',
        content: [
            { type: 'text', data: `Only two weeks until departure - I am so ready for the next phase of 
            my life! Okay, and a little nervous, walking into the unknown is a bit scary. But, I have 
            prepared myself and planned, and I know I can handle the unexpected - so the only thing that 
            can stop me is fear.` },
            { type: 'text', data: `I am leaving from Calgary in the evening and I will be flying for 12 hours 
            to arrive in Korea on Aug 31. My airBnb isn't open until September 1st so I will have to spend a 
            night in a hotel when I land in Incheon, then get a taxi into Seoul the next day.`},
            { type: 'image', data: 'images/ticket.png', alt: 'Plane Ticket'},
            { type: 'text', data: `My first task upon getting to the airBnb will be a trip to the market just 
            down the road to pick up rice, instant noodles, and whatever else might make some fast and 
            easy meals. Then I need to figure out ordering food, it's trial by fire once I'm there, but I 
            won't go hungry as long as there's instant noodles!`}
        ]
    });
    addBlogEntry({
        title: `${koreaEmoji.travel} In Beautiful Korea`,
        date: '9/3/2025',
        content: [
            { type: 'text', data: `I'm behind in updating the blogs. I have arrived in Korea and I am finally 
            settled. It took a few days to find my groove, and now I can update and get back to studying! 
            This is a picture from the plane, flying at 40000 feet. Being above the clouds is transcendent.` },
            { type: 'image', data: 'images/aboveClouds.jpg', alt: 'Above the clouds'},
            { type: 'text', data: `My first night was in a hotel in Incheon and my first meal was ramyeon at 
            a local convenience store. No picture of that, it was an experience but nothing to really blog 
            about. The next day I took a taxi to the airBnB in Seoul, the drive was long but I got to see 
            the city as we drove in and a bit of some country side.`},
            {type: 'text', data: `Now some trouble I found myself in, my debit card doesn't work here! Neither 
            does google pay. I was so stressed as I was running out of actual cash I had brought with me. It 
            took two days to find a bank machine that would read my international debit card. KT Kootmin Bank 
            is where I found an ATM+ that finally put cash in hand. The relief was palpable! I found a market 
            after that, so many ingredients that I don't know, but I will learn! The next adventure will be 
            finding a library.`},
        ]
    });
    addBlogEntry({
        title: `${koreaEmoji.food} Trying Street Food`,
        date: '9/3/2025',
        content: [
            { type: 'text', data: `Once I had cash in hand, I found street food! It was so worth the wait to 
            fly here and try authentic Korean food. The first thing I tried was a bit spicy and a bit fishy. 
            Turns out it was fishcake, 어묵.` },
            { type: 'image', data: 'images/food/fishcake.jpg', alt: '오묵'},
            { type: 'text', data: `The next night I went back and tried tteokbokki, 떡복이, for the first time! It 
            is soooooo good. My friend Patricia has now challenged me to find the best 떡복이 stand.`},
            {type: 'image', data: 'images/food/tteokbokki.jpg'},
            {type: 'text', data: `Tonight I will try a corndog and maybe something else, I think it's green onion 
            cake, but I'm not sure. The man at the stall is very nice, but doesn't speak any English at all, 
            but we muddle through and my reward for practicing Korean is yummy food!`}
        ]
    });
};
// list example:
/*addBlogEntry({
    title: `${devEmoji.organizing} Organized My Blog Layout`,
    date: new Date().toLocaleDateString(),
    content: [
        { type: 'text', data: `I cleaned up my CSS and reorganized my HTML. 
        Now everything is easy to find and edit.` },
        { type: 'list', data: [
            'Removed redundant divs',
            'Added semantic <main> and <aside>',
            'Cleaned up flexbox CSS'
        ] }
    ]
});*/

// table example:
/*addBlogEntry({
    title: `${devEmoji.cleaning} CSS Cleanup Results`,
    date: new Date().toLocaleDateString(),
    content: [
        { type: 'text', data: `I compared the old layout with the new cleaned-up version. 
        The results are night and day!` },
        { type: 'table', data: [
            ['Feature', 'Before', 'After'],
            ['Layout width', '450px fixed', 'Full-screen flex'],
            ['Sidebar scroll', 'No', 'Yes'],
            ['Theme colors', 'One color', 'Per-page themes']
        ] }
    ]
});*/
refreshHistory();
if (blogs.length > 0) {
displayBlog(blogs[0]);
};