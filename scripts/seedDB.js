const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the seed below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const brewerySeed = [
    {
        name: "NoDa Brewing Company",
        logo: "https://d2sochvv0rudri.cloudfront.net/place_photos/4526/noda-brewing-company.png",
        location: "Noda, Charlotte",
        website: "http://nodabrewing.com",
        description: "Whether it’s a small-batch brew or one of our full-production, year-round beers, NoDa Brewing Company crafts “the beer on everyone’s lips” with the highest standards and an extreme attention to detail. We strive to brew an extensive variety with consistent quality so that every beer drinker’s palate gets a dependable, delicious beer.",
        beers =[
            {
                name: "Hop Drop 'N' Roll",
                picture: "https://nodabrewing.com/wp-content/uploads/2019/10/HopDrop2.png",
                price: 14.99,
                description: "2014 World Beer Cup® Gold Award Winner, American-Style IPA. Hops in your face. Crisp, mouthwatering, American citrus hops dominate for an ideal IPA character. It’s hopped before, during and after the boil with late boil additions of Citra and Amarillo for a complex flavor profile. The rich golden color comes from a blend of English and American base malts accented with substantial amounts of Vienna and Wheat malt. This is the beer that started it all for NoDa Brewing.",
                type: "IPA",
                alcoholContent: "7.2%",
                quantity: "100",
                userReviews = "",
            },
            {
                name: "Jam Session",
                picture: "https://nodabrewing.com/wp-content/uploads/2019/10/JamSession.png",
                price: 14.99,
                description: "The evolution of American Pale Ale—still a session beer but it sacrifices nothing—clear hop flavor shines through without being too dominant, and there’s a great malt flavor uncommon to the variety. The backbone of this beer is the balance of imported Maris Otter and Caramunich malts with the pine and citrus flavors of Centennial, Simcoe, and Citra hops.",
                type: "Pale Ale",
                alcoholContent: "5.1%",
                quantity: "84",
                userReviews = "",
            },
            {
                name: "Cavu",
                picture: "https://nodabrewing.com/wp-content/uploads/2019/10/CAVU.png",
                price: 14.99,
                description: "Inspired by Todd’s experience as a pilot, CAVU (Ceiling And Visibility Unlimited) is a flight term used to describe clear skies or ideal conditions. We hope you have the same outlook during the warm summer months while sipping on this light-colored and brisk ale that presents itself with hints of tropical fruit and citrus notes from our west coast hops, then finishes clean and bright…like a cool breeze on a clear summer day.",
                type: "Blode Ale",
                alcoholContent: "4.6%",
                quantity: 40,
                userReviews = "",
            },
            {
                name: "Coco Loco",
                picture: "https://nodabrewing.com/wp-content/uploads/2019/10/CocoLoco.png",
                price: 10.99,
                description: "Deep, rich and delicious. This robust porter has a base of Chocolate and Brown malts for a stunningly deep rich color with ruby highlights. The slight bitterness from American chocolate is balanced with the sweet notes of organic coconut we toast onsite at the brewery. It was even awarded the Great American Beer Festival Silver Medal in 2012.",
                type: "Porter",
                alcoholContent: "6.2%",
                quantity: "48",
                userReviews = "",
            },
        ],
    },
    {
        name: "Birdsong Brewing Company",
        logo: "https://irp-cdn.multiscreensite.com/26a64c38/dms3rep/multi/birdsong+brewing+co.svg",
        location: "Uptown, Charlotte",
        website: "https://birdsongbrewing.com/",
        description: "In 2010, husband and wife, Chris and Tara Goulet were ready for a change. Chris was tired of the corporate grind and Tara needed a break from managing a local bakery. A friend and co-worker at the bakery, Conor Robinson, was learning how to home-brew. Chris and Tara felt like Charlotte was missing a small neighborhood brewery where folks could stop in for a pint or take home a growler of super-fresh, unfiltered, American-style ale. They invited a handful of close friends over to pitch a business plan and serve Conor’s beer, and Birdsong Brewing Company was born.",
        beers =[
            {
                name: "Higher-Ground",
                picture: "https://brewerydb-images.s3.amazonaws.com/beer/5k8d4v/upload_M0ojpK-medium.png",
                price: 8.99,
                description: "",
                type: "WestCoast IPA",
                alcoholContent: "7.1",
                quantity: 44,
                userReviews = "",
            },
            {
                name: "Jalepeno",
                picture: "https://untappd.akamaized.net/site/beer_logos_hd/beer-109679_e9693_hd.jpeg",
                price: 9.99,
                description: "",
                type: "Pale Ale",
                alcoholContent: "6.8%",
                quantity: 72,
                userReviews = {},
            },
            {
                name: "Lazy Bird",
                picture: "https://beerconnoisseur.com/sites/default/files/styles/beer_page_245w/public/beer/lazy-bird.jpg?itok=ZnLUOlkj",
                price: 9.99,
                description: "",
                type: "Brown Ale",
                alcoholContent: "7%",
                quantity: 64,
                userReviews = {},
            },
            {
                name: "Paradise City",
                picture: "https://products1.imgix.drizly.com/ci-birdsong-brewing-paradise-city-session-ipa-5f0fe5990a136439.png?auto=format%2Ccompress&fm=jpg&q=20",
                price: 7.99,
                description: "",
                type: "IPA",
                alcoholContent: "7.6%",
                quantity: 20,
                userReviews = {},
            },
        ],
    },
    {
        name: "Blue Blaze Brewing",
        logo: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
        location: "West End, Charlotte",
        website: "http://www.blueblazebrewing.com/",
        description: "",
        beers =[
            {
                name: "Blue Blaze Altbier",
                picture: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
                price: 6.99,
                description: "",
                type: "Pilsner",
                alcoholContent: "4.8%",
                quantity: 12,
                userReviews = {},
            },
            {
                name: "Yellow Blazer Kolsch",
                picture: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
                price: 6.99,
                description: "",
                type: "Blonde Ale",
                alcoholContent: "5.2%",
                quantity: 16,
                userReviews = {},
            },
            {
                name: "Black Blaze Milk Stout",
                picture: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
                price: 5.90,
                description: "",
                type: "Stout",
                alcoholContent: "8%",
                quantity: 24,
                userReviews = {},
            },
            {
                name: "SoBo Orangerine Hazy IPA",
                picture: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
                price: 6.99,
                description: "",
                type: "IPA",
                alcoholContent: "6%",
                quantity: 12,
                userReviews = {},
            },
        ],
    },
    {
        name: "Brewers At 4001 Yancy",
        logo: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
        location: "LoSO, Charlotte",
        website: "http://brewersat4001yancey.com/",
        description: "",
        beers =[
            {
                name: "Hootie",
                picture: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
                price: 7.00,
                description: "",
                type: "IPA",
                alcoholContent: "6.4%",
                quantity: 8,
                userReviews = {},
            },
            {
                name: "Citrus Jammer",
                picture: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
                price: 7.00,
                description: "",
                type: "Sour",
                alcoholContent: "6.7%",
                quantity: 4,
                userReviews = {},
            },
            {
                name: "Sweet Action",
                picture: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
                price: 7.00,
                description: "",
                type: "Blonde Ale",
                alcoholContent: "6.9%",
                quantity: 32,
                userReviews = {},
            },
            {
                name: "The Crisp",
                picture: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
                price: 7.00,
                description: "",
                type: "Pilsner",
                alcoholContent: "5%",
                quantity: 28,
                userReviews = {},
            },
        ],
    },
    {
        name: "Catawba",
        logo: "https://catawbabrewing.com/wp-content/uploads/2018/09/logo-01.png",
        location: "Belmont, Charlotte",
        website: "https://catawbabrewing.com/locations/charlotte",
        description: "",
        beers =[
            {
                name: "El Gato Mariachi",
                picture: "https://catawbabrewing.com/wp-content/uploads/2020/02/CVB-ElGato12ozFRONT.png",
                price: "5.99",
                description: "El Gato Mariachi incorporates all the traditional Horchata ingredients into a wheat ale base – along with a healthy dose of milk sugar. An addition of rice in the grain bill lightens the body for excellent drinkability, without sacrificing its creamy mouthfeel. The beer features an enticing aroma of freshly baked cinnamon rolls. It pours a milky straw color, and finishes with just the right blend of vanilla sweetness and a touch of cinnamon spice.",
                type: "White Ale",
                alcoholContent: "5.3%",
                quantity: 24,
                userReviews = {},
            },
            {
                name: "Hopness Haze",
                picture: "https://catawbabrewing.com/wp-content/uploads/2020/02/CVB-Hopness12ozFRONT.png",
                price: 5.99,
                description: "The sip is layered with notes of juicy tangerine, pineapple, and ripe mango, finishing with only a whisper of hop bitterness.",
                type: "IPA",
                alcoholContent: "6%",
                quantity: 8,
                userReviews = {},
            },
            {
                name: "White Zombie",
                picture: "https://catawbabrewing.com/wp-content/uploads/2020/02/CVB-WZombie12ozFRONT.png",
                price: 6.99,
                description: "Brewed according to the Belgian Witbier tradition using unmalted wheat to create a light body and white sheen. Additions of coriander and orange peel give it a fruity and spicy character while the hops are subtle and only lightly detected",
                type: "White Ale",
                alcoholContent: "5.1%",
                quantity: 32,
                userReviews = {},
            },
            {
                name: "Evening Joe",
                picture: "https://catawbabrewing.com/wp-content/uploads/2020/02/CVB-EJoe12ozFRONT.png",
                price: 7.99,
                description: "Like the Cream Ale at its roots, the beer is light and crisp, endlessly drinkable. Arabica coffee is introduced after fermentation to impart delicious notes of roast and dark chocolate typically associated with Porters and Stouts, without detracting from the beer’s refreshing quality. Natural vanilla flavor and lactose sugar add a hint of sweet cream to top off this café au lait-inspired cold brew.",
                type: "Coffee Blonde Ale",
                alcoholContent: "5.7%",
                quantity: 16,
                userReviews = {},
            },
        ],
    },
    {
        name: "Free Range Brewing",
        logo: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
        location: "Noda, Charlotte",
        website: "https://www.heistbrewery.com/",
        description: "",
        beers =[
            {
                name: "Common Home",
                picture: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
                price: 7.99,
                description: "",
                type: "Common Ale",
                alcoholContent: "5.1%",
                quantity: 80,
                userReviews = {},
            },
            {
                name: "Therapy Session",
                picture: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
                price: 7.99,
                description: "",
                type: "Hazy IPA",
                alcoholContent: "6.2",
                quantity: 84,
                userReviews = {},
            },
            {
                name: "You're Everything I Knead",
                picture: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
                price: 7.99,
                description: "",
                type: "Sourdough IPA",
                alcoholContent: "5.4%",
                quantity: 88,
                userReviews = {},
            },
            {
                name: "Serious Business",
                picture: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
                price: 7.99,
                description: "",
                type: "Lager",
                alcoholContent: "5.2",
                quantity: 72,
                userReviews = {},
            },
        ],
    },
    {
        name: "Heist Brewery",
        logo: "https://static.wixstatic.com/media/87619c_5da216e3b854443490ce8489ee403f18~mv2.jpg/v1/fill/w_600,h_358,al_c,q_80,usm_0.66_1.00_0.01/87619c_5da216e3b854443490ce8489ee403f18~mv2.webp",
        location: "Noda, Charlotte",
        website: "https://www.heistbrewery.com/",
        description: "",
        beers =[
            {
                name: "Big Pick'n",
                picture: "https://untappd.akamaized.net/site/beer_logos/beer-3148411_46058_sm.jpeg",
                price: 4.99,
                description: "The return of our Raspberry Pick'n, but BIGGER! We bumped up the ABV on this one to change things up a bit. This bold and tart Berliner Weisse was created with loads of fruit!",
                type: "Sour",
                alcoholContent: "6.1%",
                quantity: 60,
                userReviews = {},
            },
            {
                name: "Bramblin Blackberry",
                picture: "https://untappd.akamaized.net/site/beer_logos/beer-1522359_9fdd8_sm.jpeg",
                price: 6.89,
                description: "This tantalizing fruit cider is dark plum in color with an alluring fruit forward aroma. Subtle blackberry notes wash over your palate for a balanced, complex and slightly tart semi-dry finish.",
                type: "IPA",
                alcoholContent: "6.9%",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Brunch Junkie",
                picture: "https://untappd.akamaized.net/site/beer_logos/beer-1376720_b4d23_sm.jpeg",
                price: 5.89,
                description: "Breakfast Stout brewed with flaked oats and Sumatra Coffee from Central Coffee.",
                type: "Stout",
                alcoholContent: "7.5%",
                quantity: "34",
                userReviews = {},
            },
            {
                name: "Druid Pils",
                picture: "https://untappd.akamaized.net/site/beer_logos/beer-3195425_f2369_sm.jpeg",
                price: 4.89,
                description: "A classic German-style pilsner, from the yeast to the hops. Crisp, dry, refreshing.",
                type: "Pilsner",
                alcoholContent: "6%",
                quantity: 27,
                userReviews = {},
            },
        ],
    },
    {
        name: "Legion Brewing",
        logo: "https://static1.squarespace.com/static/5d8256d0783d5e79f8a01c54/t/5d88d38a9473093f77f85b8a/1592583220251/?format=1500w",
        location: "Plaza Midwood, Charlotte",
        website: "http://legionbrewing.com/",
        description: "",
        beers =[
            {
                name: "Juicy Jay",
                picture: "https://images.squarespace-cdn.com/content/v1/5d8256d0783d5e79f8a01c54/1588775526033-I975KKZEUNJ1NOR9QWIG/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k2HH6OEm6WCCYLibno-s8b4weTEWBRU0WHPO2pE1u2Ju0c04VQ6HZ7fTjtKQ38BuA/Cans-01.png",
                price: 8.89,
                description: "",
                type: "Hazy IPA",
                alcoholContent: "7.1%",
                quantity: 120,
                userReviews = {},
            },
            {
                name: "Penguin Pils",
                picture: "https://images.squarespace-cdn.com/content/v1/5d8256d0783d5e79f8a01c54/1588775526033-I975KKZEUNJ1NOR9QWIG/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k2HH6OEm6WCCYLibno-s8b4weTEWBRU0WHPO2pE1u2Ju0c04VQ6HZ7fTjtKQ38BuA/Cans-01.png",
                price: 7.99,
                description: "",
                type: "Lager",
                alcoholContent: "6.3%",
                quantity: 90,
                userReviews = {},
            },
            {
                name: "Flicker Daze",
                picture: "https://images.squarespace-cdn.com/content/v1/5d8256d0783d5e79f8a01c54/1588775526033-I975KKZEUNJ1NOR9QWIG/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k2HH6OEm6WCCYLibno-s8b4weTEWBRU0WHPO2pE1u2Ju0c04VQ6HZ7fTjtKQ38BuA/Cans-01.png",
                price: 6.99,
                description: "",
                type: "Wheat Ale",
                alcoholContent: "5.8%",
                quantity: 75,
                userReviews = {},
            },
            {
                name: "Carolina Sparkle Party",
                picture: "https://images.squarespace-cdn.com/content/v1/5d8256d0783d5e79f8a01c54/1588775526033-I975KKZEUNJ1NOR9QWIG/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k2HH6OEm6WCCYLibno-s8b4weTEWBRU0WHPO2pE1u2Ju0c04VQ6HZ7fTjtKQ38BuA/Cans-01.png",
                price: "",
                description: "",
                type: "Berliner Weisse Ale",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
        ],
    },
    {
        name: "Lenny Boy Brewing",
        logo: "https://lh3.googleusercontent.com/sWR88oW0GI29Hgid6rl49Orc6y6iGyjUkp7G2XbD4YaDb2zir806PXjvh3dpBLJoB651R4UVr0O-LalwFXdio52hCh68kg=s300",
        location: "South End, Charlotte",
        website: "http://www.discoverlennyboy.com/",
        description: "",
        beers =[
            {
                name: "Citraphilia",
                picture: "https://storage-trianglewine.comcash.com/images/products/a73c756b4eb911afdda6b3b9877edb4f.png",
                price: 7.89,
                description: "Our flagship IPA was brewed with massive amounts of Citra hops and blended with Amarillo and Eukanot hops to leave you with a true tropical citrus experience.",
                type: "IPA",
                alcoholContent: "6.4%",
                quantity: 56,
                userReviews = {},
            },
            {
                name: "Burn Down Brown",
                picture: "https://www.thebigbridge.com/wp-content/uploads/2019/01/Lenny-Boy-Burn-Down-Brown-can-design-by-big-bridge-1030x1030.jpg",
                price: 7.59,
                description: "This English style brown ale has notes reminiscent of chocolate and toffee with a balanced hop character. We add a heavy dose of rolled oats to bring it all together for a rich creamy brown ale",
                type: "Brown Ale",
                alcoholContent: "5%",
                quantity: 36,
                userReviews = {},
            },
            {
                name: "Tropicalus",
                picture: "https://untappd.akamaized.net/photos/2020_06_11/b17a941c78d0d445f011708e14b3304c_640x640.jpg",
                price: "7.99",
                description: "An aromatic, hazy White IPA bursting with notes of tropical fruit and banana from our house Belgian yeast.",
                type: "IPA",
                alcoholContent: "6%",
                quantity: 66,
                userReviews = {},
            },
            {
                name: "Booty Call",
                picture: "https://untappd.akamaized.net/site/beer_logos_hd/beer-1783409_a9c47_hd.jpeg",
                price: 6.99,
                description: "Big double IPA blended with Citra, Simcoe, & Bravo hops. The beer you turn to when you need some lovin'. This beer will always be around to leave you feeling happy & wanted.",
                type: "Double IPA",
                alcoholContent: "8.7%",
                quantity: 31,
                userReviews = {},
            },
        ],
    },
    {
        name: "Olde Mecklenburg Brewery",
        logo: "https://pbs.twimg.com/profile_images/642011577588281344/oygSX5HW_400x400.png",
        location: "LoSO, Charlotte",
        website: "http://www.oldemeckbrew.com/",
        description: "",
        beers =[
            {
                name: "Copper",
                picture: "https://www.oldemeckbrew.com/wp-content/uploads/2020/05/Beer_Indv_Copper_can.png",
                price: 5.00,
                description: "",
                type: "Altbier",
                alcoholContent: "5.3%",
                quantity: 111,
                userReviews = {},
            },
            {
                name: "Captain Jack",
                picture: "https://www.oldemeckbrew.com/wp-content/uploads/2020/05/Beer_Indv_CaptJack_can.png",
                price: 6.00,
                description: "",
                type: "Pilsner",
                alcoholContent: "4,8%",
                quantity: 81,
                userReviews = {},
            },
            {
                name: "Hornets Nest",
                picture: "https://cdn.shopify.com/s/files/1/2624/3464/products/HornetsNest_bottles_grande.jpg?v=1587132320",
                price: 6.00,
                description: "",
                type: "Hefeweizen",
                alcoholContent: "5.2%",
                quantity: 32,
                userReviews = {},
            },
            {
                name: "704",
                picture: "https://www.oldemeckbrew.com/wp-content/uploads/2020/05/Beer_page_704_HazyW.png",
                price: 5.99,
                description: "",
                type: "Hazy Wheat Ale",
                alcoholContent: "5.3%",
                quantity: 87,
                userReviews = {},
            },
        ],
    },
    {
        name: "Resident Culture Brewing",
        logo: "https://residentculturebrewing.com/dist/images/logo-vertical-inverse.png",
        location: "Plaze Midwood, Charlotte",
        website: "https://residentculturebrewing.com/",
        description: "",
        beers =[
            {
                name: "Double Universe",
                picture: "https://untappd.akamaized.net/site/beer_logos_hd/beer-3564469_8b4a8_hd.jpeg",
                price: 7.89,
                description: "",
                type: "Hazy Double IPA",
                alcoholContent: "8.2%",
                quantity: 93,
                userReviews = {},
            },
            {
                name: "This Is Just A Test",
                picture: "https://untappd.akamaized.net/photos/2020_05_30/cfef35e3c9808e89422bf831e68399c6_640x640.jpg",
                price: 7.99,
                description: "",
                type: "Hazy IPA",
                alcoholContent: "7.6%",
                quantity: 12,
                userReviews = {},
            },
            {
                name: "Tropical Ponche",
                picture: "https://residentculturebrewing.com/dist/images/slides/RC_TropicalPonche_Label.jpg",
                price: 8.00,
                description: "",
                type: "IPA",
                alcoholContent: "7.1%",
                quantity: 4,
                userReviews = {},
            },
            {
                name: "Paegent Worthy",
                picture: "https://cdn.beeradvocate.com/im/beers/488137.jpg",
                price: 7.00,
                description: "",
                type: "Hazy Double IPA",
                alcoholContent: "8.3%",
                quantity: 0,
                userReviews = {},
            },
        ],
    },
    {
        name: "Suffolk Punch",
        logo: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
        location: "South End, Charlotte",
        website: "https://thesuffolkpunch.com/brewery/",
        description: "",
        beers =[
            {
                name: "Bayern Echo",
                picture: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
                price: 5.00,
                description: "",
                type: "IPA",
                alcoholContent: "7.2%",
                quantity: 24,
                userReviews = {},
            },
            {
                name: "Hyde In The Haze",
                picture: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
                price: 5.00,
                description: "",
                type: "Hazy IPA",
                alcoholContent: "7.1%",
                quantity: 2,
                userReviews = {},
            },
            {
                name: "Blue Daisy",
                picture: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
                price: 6.00,
                description: "",
                type: "IPA",
                alcoholContent: "6.4%",
                quantity: 78,
                userReviews = {},
            },
            {
                name: "Pulp Perscription",
                picture: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
                price: 6.00,
                description: "",
                type: "IPA",
                alcoholContent: "6.8%",
                quantity: 56,
                userReviews = {},
            },
        ],
    },
    {
        name: "Sugar Creek Brewing",
        logo: "",
        location: "LoSO, Charlotte",
        website: "https://sugarcreekbrewing.com/",
        description: "",
        beers =[
            {
                name: "Blood Orange",
                picture: "",
                price: "",
                description: "",
                type: "IPA",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Pale Ale",
                picture: "",
                price: "",
                description: "",
                type: "Pale Ale",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Hazy Creek",
                picture: "",
                price: "",
                description: "",
                type: "IPA",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Raspberry",
                picture: "",
                price: "",
                description: "",
                type: "White Ale",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
        ],
    },
    {
        name: "Sycamore Brewing",
        logo: "",
        location: "South End, Charlotte",
        website: "https://www.sycamorebrew.com/",
        description: "",
        beers =[
            {
                name: "Mountain Candy",
                picture: "",
                price: "",
                description: "",
                type: "IPA",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Countryside",
                picture: "",
                price: "",
                description: "",
                type: "IPA",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Southern Girl",
                picture: "",
                price: "",
                description: "",
                type: "Blonde Ale",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Rainbow Dust",
                picture: "",
                price: "",
                description: "",
                type: "IPA",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
        ],
    },
    {
        name: "Triple C Brewing",
        logo: "",
        location: "South End, Charlotte",
        website: "http://www.triplecbrewing.com/",
        description: "",
        beers =[
            {
                name: "Golden Boy",
                picture: "",
                price: "",
                description: "",
                type: "Blonde Ale",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Cranes in the Sky",
                picture: "",
                price: "",
                description: "",
                type: "Pale Ale",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Baby Maker",
                picture: "",
                price: "",
                description: "",
                type: "Double IPA",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Bier",
                picture: "",
                price: "",
                description: "",
                type: "German Style Pilsner",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
        ],
    },
    {
        name: "Unknown Brewing",
        logo: "",
        location: "The Gold District, Charlotte",
        website: "http://www.unknownbrewing.com/",
        description: "",
        beers =[
            {
                name: "Feather",
                picture: "",
                price: "",
                description: "",
                type: "Light Berliner",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Over The Edge",
                picture: "",
                price: "",
                description: "",
                type: "IPA",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Pregame",
                picture: "",
                price: "",
                description: "",
                type: "Session Ale",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Tele Porter",
                picture: "",
                price: "",
                description: "",
                type: "Coffee Porter",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
        ],
    },
    {
        name: "Wooden Robot Brewing",
        logo: "",
        location: "South End, Charlotte",
        website: "https://woodenrobotbrewery.com/",
        description: "",
        beers =[
            {
                name: "Botbier",
                picture: "",
                price: "",
                description: "",
                type: "Oak-Aged Saison",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Fluoresent Sunburn",
                picture: "",
                price: "",
                description: "",
                type: "Fruited Ale",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "Overachiever",
                picture: "",
                price: "",
                description: "",
                type: "Juicy IPA",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
            {
                name: "What He's Having",
                picture: "",
                price: "",
                description: "",
                type: "IPA",
                alcoholContent: "",
                quantity: "",
                userReviews = {},
            },
        ],
    },

];

db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(brewerySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


// console.log(brewerySeed[0].beers[0]);
