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
addNewBlogEntry({
    title: `${koreaEmoji.culture} War Memorial of Korea`,
    date: '9/6/2025',
    content: [
        { type: 'image', data: 'images/culture/warMemorialOne.jpg', alt: 'War Memorial of Korea'},
        { type: 'text', data: `It was a very eventful weekend! A friend from Jeju flew into Seoul to be my
            tour guide. It was wonderful! We met at the War Memorial of Korea and went through a VR experience 
            of Khufu pyramid in Egypt. I didn't get a chance to see much else at the museum, but I think I will 
            go again on my own to really see everything. I was very early for our meet up, so I got to see a bit 
            of the war memorial in front of the building.` },
        { type: 'image', data: 'images/culture/warMemorialTwo.jpg', alt: 'Korean War Monuments information'},
        { type: 'text', data: `As you approach, there is a massive sculpture that is called the 'Tower of Korean 
            War. The large stone plaque says that this monument is representative of a bronze sword and the tree 
            of life.`},
        {type: 'image', data: 'images/culture/towerOne.jpg'},
        {type: 'text', data: `It was impressive and I really liked seeing the artwork carved into the bronze. I 
            wish I could see all of it, but it's very tall and I couldn't see all the way up. When I go again, I 
            will try to use the zoom on my phone camera to see it.`},
        {type: 'image', data: 'images/culture/towerTwo.jpg'},
        {type: 'image', data: 'images/culture/towerThree.jpg'},
        {type: 'text', data: `One each side of the tower were some sculptures. These made me feel sad, fearful, 
            and hopeful. I have never experienced war, and I hope that I don't ever have to. Still, these 
            monuments draw out emotions in a way that is hard to explain.`},
        {type: 'image', data: 'images/culture/statueOne.jpg'},
        {type: 'image', data: 'images/culture/statueTwo.jpg'},
        {type: 'text', data: `As I was leaving, I saw another statue that was very visually striking. The boy and 
            the soldier, I'm not sure what the story is, but when I go again I will update with the name and 
            meaning behind this memorial.`},
        {type: 'image', data: 'images/culture/statueThree.jpg'}
    ]
});
addNewBlogEntry({
    title: `${koreaEmoji.food} Korean BBQ and Jazz Club`,
    date: '9/6/2025',
    content: [
        { type: 'text', data: `After the war memorial, he took me to try my first Korean BBQ. Yum! I had 
            never had soybean paste, it's good! I've already gotten to try so many new foods in my first 
            week here, I haven't found anything I didn't care for yet. Coming to Korea for the food alone 
            is well worth the trip.` },
        { type: 'image', data: 'images/food/koreanBBQ.jpg'},
        { type: 'text', data: `After that, we went to a 노래방 (karaoke room). That was fun! I'm used to 
            having to sing in front of a bar full of people because that's how it is in Canada. Doing 
            karaoke the Korean way is so much better! I'm not scared to mess up and I just let loose 
            and sang my heart out.`},
        {type: 'text', data: `Then we went to All That Jazz! This place I had been looking at on the 
            internet a few times before coming to Korea. They don't really like people taking a table 
            when you are alone, and I get it, every seat was filled when I was there. And the music was 
            fantastic. The singer is also a UFC fighter, but who really impressed me was the guy on the 
            guitar, wow, I got goosebumps! I would love to go again, but I will have to find someone to 
            go with me.`},
        {type: 'image', data: 'images/allThatJazz.jpg'}
    ]
});
addNewBlogEntry({
    title: `${koreaEmoji.beauty} My Morning Walk`,
    date: '9/10/2025',
    content: [
        { type: 'text', data: `To build up my endurance, I have started walking in the early morning hours. 
            I practice reading signs as I go, listen to music, and keep an eye out for things happening 
            around me. One morning I saw a bird wading in the stream. I paused and watched it for a few 
            minutes.` },
        { type: 'image', data: 'images/scenery/waterFowl.jpg'},
        { type: 'text', data: `On that same bridge, there are a lot of pretty flowers. Some blue, purple, 
            and lilac in color that grow along the embankment and around the rails. I think I will paint these 
            flowers once I find an art supply store.`},
        {type: 'image', data: 'images/scenery/bridgeFlowers.jpg'}
    ]
});
addNewBlogEntry({
    title: `${koreaEmoji.beauty} More Flowers ❤️`,
    date: '9/11/2025',
    content: [
        { type: 'text', data: `On my walk, I paused to get pictures of the flowers that I have been passing 
            in the morning. I don't know what kind of flowers these are, but they are all lovely. In particular 
            are the orange ones that bloom on a small tree, I want that in my garden, the way they hang down 
            is beautiful.` },
        { type: 'image', data: 'images/scenery/flowerFour.jpg'},
        { type: 'text', data: `These purple ones are also perfect for edging, I want these little beauties.`},
        { type: 'image', data: 'images/scenery/flowerTwo.jpg'},
        { type: 'text', data: `Bush flowers with more foliage would fill in the back garden. I think I need 
            to move here just to make a pretty little garden area where I can while away the hours in peace.`},
        {type: 'image', data: 'images/scenery/flowerOne.jpg'},
        {type: 'image', data: 'images/scenery/flowerThree.jpg'}
    ]
});
addNewBlogEntry({
    title: `${koreaEmoji.culture} Found an Old Cemetery`,
    date: '9/12/2025',
    content: [
        { type: 'text', data: `I finally made it to the overpass this morning. I could see it in the 
            distance at the top of the incline and it has been my goal destination all week.` },
        { type: 'image', data: 'images/scenery/overpass.jpg'},
        { type: 'image', data: 'images/scenery/underOverpass.jpg'},
        { type: 'text', data: `I love how the greenery has overgrown and hangs over the sides of the wall. 
            I want to try to find a way up there. Next to the overpass, I found an old cemetery.`},
        { type: 'image', data: 'images/culture/cemeterySign.jpg'},
        { type: 'text', data: `There were a few stairs, a path going up a hill made out of some heavy 
            woven plant material like palm or hemp, and lots of overgrown grass and plants with little 
            wildflowers growing all about.`},
        {type: 'image', data: 'images/scenery/wildFlowerOne.jpg'},
        {type: 'image', data: 'images/scenery/wildFlowerTwo.jpg'},
        { type: 'text', data: `From the path I could see the cemetery. Though it's beside a busy road, the 
            area holds a quietness, a serenity or solemnity. I wanted to see the stones, but felt it would 
            have been intrusive so I just observed from the path.`},
        { type: 'image', data: 'images/culture/cemetery.jpg'}
    ]
});
addNewBlogEntry({
    title: `${koreaEmoji.culture} Exploring a Hwagyesa`,
    date: '9/14/2025',
    content: [
        { type: 'text', data: `At the bottom of a mountain near where I am staying is a 
            Hwagyesa, a beautiful Buddhist temple. On the map it is called 대한불교조계중 화계사. 
            This is the entrance to the road leading up to mountain hiking trails and the temple.` },
        { type: 'image', data: 'images/culture/archway.jpg'},
        { type: 'image', data: 'images/culture/dragon.jpg'},
        { type: 'text', data: `You follow a wood pathway that leads into the mountain trails or to 
            the temple. It's very quiet here, I sat by the stream for a while and watched a butterfly.`},
        { type: 'image', data: 'images/scenery/pathway.jpg'},
        { type: 'image', data: 'images/scenery/stream.jpg'},
        { type: 'text', data: `I liked inside the temple as well. Hanging from the ceiling are 
            hundreds of lotus flowers with names. I'm uncertain of the significance but know that 
            the pink lotus represents the Buddha and white is for purity of body, mind and spirit.`},
        { type: 'image', data: 'images/culture/lotusFlowers.jpg'},
        { type: 'image', data: 'images/culture/insideTemple.jpg'},
        { type: 'text', data: `A little history about this temple. It suffered a fire some time ago 
            and had been rebuilt. I like the architecture of the roofs. I don't think it is all hand 
            painted as it used to be, but it's pretty.`},
        { type: 'image', data: 'images/culture/history.jpg'},
        { type: 'image', data: 'images/culture/templeRoof.jpg'},
        { type: 'text', data: `There is an old bronze bell in the center of the temples. The signage 
            says it was made in 1633! There is a bell ringing ceremony that I want to come back for. I 
            can actually stay for a night at the temple, go through a tour, meditation, tea with a monk 
            and other things. Next month I wish to experience this.`},
        { type: 'image', data: 'images/culture/bellInfo.jpg'},
        { type: 'image', data: 'images/culture/bell.jpg'},
        { type: 'text', data: `There are a lot of beautiful paintings on the walls of the buildings. 
            This one is my favorite, the Buddha taking a nap under a tree.`},
        { type: 'image', data: 'images/culture/lazyBuddha.jpg'},
        { type: 'text', data: `Along a path to an outdoor prayer area are many curiosities and 
            small statues set upon the stone walls and gardens. I liked this area, it was peaceful.`},
        { type: 'image', data: 'images/culture/curiosities.jpg'},
        { type: 'image', data: 'images/culture/statueCollection.jpg'},
        { type: 'text', data: `This is the outdoor prayer area or alter to Buddha, maybe both? I hope 
            to get more information when I go on the tour. I didn't go up into the area and stayed 
            on the path. I look forward to seeing, experiencing, and learning more about this temple 
            next month.`},
        { type: 'image', data: 'images/culture/outdoorAlter.jpg'},
        { type: 'image', data: 'images/culture/statueTrio.jpg'}
    ]
});
addNewBlogEntry({
    title: `${koreaEmoji.culture} 충남 Festa`,
    date: '9/17/2025',
    content: [
        { type: 'text', data: `I came home from my morning walk and was chatting over coffee with the 
            lovely girl I met at the AirBnB. We had gone to the Hwagyesa together and today she said 
            she was going to a K-pop concert to see her favorite singer, a Phillipino boy who sings 
            with AHOF. She said that the event was free so I went with her to see my first K-pop concert. 
            Turns out, there was also a festival!` },
        { type: 'image', data: 'images/culture/festivalStage.jpg'},
        { type: 'text', data: `There were many things to see and experience. While waiting in line to 
            get concert tickets for seats (still free!), we saw several mascots. Later, they were on 
            stage dancing too. So cute!`},
        { type: 'image', data: 'images/culture/mascotOne.jpg'},
        { type: 'image', data: 'images/culture/mascotTwo.jpg'},
        { type: 'text', data: `Once we had our wristbands, we walked around among the various booths 
            playing mini games to be a bobusa and receiving various takeaways from the cities that were hosting this 
            festival. They kept giving us little clips with things to put in our hair. Everyone was so nice and 
            and one booth yelled out to me that I was beautiful ❤️. At Asan city booth, I told my friend the Korean 
            word for beer. One the people heard me and was so delighted that they gave me a beer to take home - and 
            a lot of other little things. I will have to take a weekend trip to their city, they have hot springs!`},
        { type: 'image', data: 'images/selfies/pictureStrip.jpg'},
        { type: 'image', data: 'images/selfies/tallMen.jpg'},
        { type: 'text', data: `We heard some interesting music with drums and a horn. I didn't get any information 
            on when or where this music is from. I look forward to visiting some museums here and learning more 
            about Korean culture and history.`},
        { type: 'image', data: 'images/culture/drumMusic.jpg'},
        { type: 'text', data: `Then we had a fish burger and got our seats for the concert. My phone 
            camera didn't work well for taking photos of this, unfortunately. It was an interesting 
            experience and very different from concerts in Canada. People sit still and record on 
            their phones. It was very hard to sit still when all I wanted to do was move to the music. 
            My friend got me to move forward as many audience members would rush out to try to 
            catch a glimpse of their favorite singers walking off the stage. By the end, I was just a 
            few rows back to see ONEW from SHINee. I also got to hear Paul Kim, SF9, ONEUS, STAYC, RE:SCENE, 
            UNIS, and AHOF.`},
        { type: 'image', data: 'images/culture/onew.jpg'},
        { type: 'text', data: `It was an incredibly eventful day and I was blessed to spend it with 
            my new friend Shiela ❤️.`},
    ]
});
addNewBlogEntry({
    title: `${koreaEmoji.beauty} Walking Beside the Stream`,
    date: '9/20/2025',
    content: [
        { type: 'text', data: `I decided to walk next to the stream this morning. Unfortunately, my 
            joint shifted as I was walking down the stairs to the walking path. After 10 minutes of 
            walking, I knew I was in trouble and headed home. Fortunately, I snapped some pics as I 
            made my slow walk back.` },
        { type: 'image', data: 'images/scenery/walkingPath.jpg'},
        { type: 'text', data: `There has been a lot of rain these past days, so the stream was more 
            like a small river. The water is usually calm, but this morning you could hear the water 
            rushing.`},
        { type: 'image', data: 'images/scenery/water.jpg'},
        { type: 'image', data: 'images/scenery/rushingWater.jpg'},
        { type: 'text', data: `Usually, these stones are passable and you can hop/step from one side 
            of the stream to the other.`},
        { type: 'image', data: 'images/scenery/walkingStones.jpg'}        
    ]
});
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