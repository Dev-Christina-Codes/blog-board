const koreaEmoji = {
    travel: '✈️',
    food: '🍜',
    beauty: '🌸',
    culture: '🏯',
    korean: '🇰🇷'
}

// get the appropriate const blog from index to paste here
const storageKey = 'koreaBlogs';

let blogs = JSON.parse(localStorage.getItem(storageKey)) || [
    {
        title: `${koreaEmoji.travel} Blog initializer`,
        date: new Date().toLocaleDateString(),
        content: [
            { type: 'text', data: `The initial blog point for the Korea Blog` },
        ]
    }
];
/*addBlogEntry({
    title: `${koreaEmoji.travel} Plane Tickets purchased!`,
    date: new Date().toLocaleDateString(),
    content: [
        { type: 'text', data: 'Only two weeks until departure - I am so ready for the next phase in life!' }
    ]
});*/

// image example:
/*addBlogEntry({
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
});*/

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
displayBlog(blogs[0]);