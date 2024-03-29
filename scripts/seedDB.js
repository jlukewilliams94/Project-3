const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the seed below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/post");

const brewerySeed = [
    {   
        id: 1, 
        name: "NoDa Brewing Company",
        logo: "https://d2sochvv0rudri.cloudfront.net/place_photos/4526/noda-brewing-company.png",
        location: "Noda, Charlotte",
        website: "http://nodabrewing.com",
        description: "Whether it’s a small-batch brew or one of our full-production, year-round beers, NoDa Brewing Company crafts “the beer on everyone’s lips” with the highest standards and an extreme attention to detail. We strive to brew an extensive variety with consistent quality so that every beer drinker’s palate gets a dependable, delicious beer.",
            
    },
    {
        id: 2,
        name: "Birdsong Brewing Company",
        logo: "https://irp-cdn.multiscreensite.com/26a64c38/dms3rep/multi/birdsong+brewing+co.svg",
        location: "Uptown, Charlotte",
        website: "https://birdsongbrewing.com/",
        description: "In 2010, husband and wife, Chris and Tara Goulet were ready for a change. Chris was tired of the corporate grind and Tara needed a break from managing a local bakery. A friend and co-worker at the bakery, Conor Robinson, was learning how to home-brew. Chris and Tara felt like Charlotte was missing a small neighborhood brewery where folks could stop in for a pint or take home a growler of super-fresh, unfiltered, American-style ale. They invited a handful of close friends over to pitch a business plan and serve Conor’s beer, and Birdsong Brewing Company was born.",
        
    },
    {
        id: 3,
        name: "Blue Blaze Brewing",
        logo: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
        location: "West End, Charlotte",
        website: "http://www.blueblazebrewing.com/",
        description: "Blue Blaze Brewing offers fresh, full-flavored beer brewed locally in small, artisan handcrafted batches using the freshest quality pesticide-free and local ingredients whenever available.",
    
    },
    {
        id: 4,
        name: "Brewers At 4001 Yancy",
        logo: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
        location: "LoSO, Charlotte",
        website: "http://brewersat4001yancey.com/",
        description: "",
       
    },
    {
        id: 5,
        name: "Catawba",
        logo: "https://catawbabrewing.com/wp-content/uploads/2018/09/logo-01.png",
        location: "Belmont, Charlotte",
        website: "https://catawbabrewing.com/locations/charlotte",
        description: "Catawba Brewing Company has been making unique ales and lagers in Western NC since 1999. You can find our kegs and cans in NC, SC, TN, AL, GA, and the Dominican Republic. Better still, visit one of our four North Carolina tasting rooms (Asheville Biltmore Village, Asheville South Slope, Charlotte, Morganton) for the freshest, most unique beers out there. Cheers! ",
    
    },
    {
        id: 6,
        name: "Free Range Brewing",
        logo: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
        location: "Noda, Charlotte",
        website: "https://www.heistbrewery.com/",
        description: "Free Range Brewing opened in the summer of 2015, on a mission to express our creativity through the wild world of fermentation; with an excitement to contribute to our community! Our adventures in beer making are as varied and dynamic as the seasons and environment around us; from city-scape foraging to quiet farmland harvests. We prefer to let the ingredients dictate the process, whether in a brettanomyces fermented blackberry wild ale, juicy hop-bombing IPA or a sourdough-bread fermented farmhouse ale.",
    
    },
    {
        id: 7,
        name: "Heist Brewery",
        logo: "https://static.wixstatic.com/media/87619c_5da216e3b854443490ce8489ee403f18~mv2.jpg/v1/fill/w_600,h_358,al_c,q_80,usm_0.66_1.00_0.01/87619c_5da216e3b854443490ce8489ee403f18~mv2.webp",
        location: "Noda, Charlotte",
        website: "https://www.heistbrewery.com/",
        description: "Heist opened its doors in 2012 as Charlotte’s only Craft Brewpub. Originally brewing on a 10HL German brewhouse, we have opened a 30 barrel production facility. Over the years, our focus has changed from traditional Belgian styles to hazy IPAs, heavily fruited sours, and imperial stouts, thanks to our signature brew: CitraQuench'l. Our original location features an extensive craft cocktail menu, as well as a multi-chef inspired tapas style menu for dining. Above all, Heist is an experience. Enjoy, and cheers!",

    },
    {
        id: 8,
        name: "Legion Brewing",
        logo: "https://static1.squarespace.com/static/5d8256d0783d5e79f8a01c54/t/5d88d38a9473093f77f85b8a/1592583220251/?format:1500w",
        location: "Plaza Midwood, Charlotte",
        website: "http://legionbrewing.com/",
        description: "",

    },
    {
        id: 9,
        name: "Lenny Boy Brewing",
        logo: "https://lh3.googleusercontent.com/sWR88oW0GI29Hgid6rl49Orc6y6iGyjUkp7G2XbD4YaDb2zir806PXjvh3dpBLJoB651R4UVr0O-LalwFXdio52hCh68kg=s300",
        location: "South End, Charlotte",
        website: "http://www.discoverlennyboy.com/",
        description: "",
    },
    {
        id: 10,
        name: "Olde Mecklenburg Brewery",
        logo: "https://pbs.twimg.com/profile_images/642011577588281344/oygSX5HW_400x400.png",
        location: "LoSO, Charlotte",
        website: "http://www.oldemeckbrew.com/",
        description: "Founded in 2009 in Charlotte, NC, The Olde Mecklenburg Brewery believes in delivering fresh, local beer and adhering to Germany’s oldest beer purity guideline, known as the “Reinheitsgebot”. Five beers are available year-round and at least 8 others make seasonal and holiday appearances -- always delivered in refrigerated trucks to preserve freshness and meet the demands of ultra-premium beer consumers. OMB is Charlotte's largest & oldest brewery. The Brewery has received numerous regional and international medals in North America and Europe. OMB was also named Best Brewery Tour in the country by the readers of USA Today, and receives many accolades for its multi-acre Munich-inspired Biergarten, which seats over 1,000. For more information, visit @oldemeckbrew on social media.",
    
    },
    {
        id: 11,
        name: "Resident Culture Brewing",
        logo: "https://residentculturebrewing.com/dist/images/logo-vertical-inverse.png",
        location: "Plaze Midwood, Charlotte",
        website: "https://residentculturebrewing.com/",
        description: "",
       
    },
    {
        id: 12,
        name: "Suffolk Punch",
        logo: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
        location: "South End, Charlotte",
        website: "https://thesuffolkpunch.com/brewery/",
        description: "Since 2017, our brewers have inspired thought and challenged expectations through a wide array of styles – including the classics, the latest trends, barrel aged special releases, and stronger seasonal beers. We are respectful of tradition, but not governed by it. We honor history, while creating modern interpretations of old favorites. Our scientific expertise and artful interpretations combine to inspire our recipes, guide our flavor profiles, delight our drinkers, and evolve our community. We’re on a delicious journey. We hope you’ll join us.",
       
    },
    {
        id: 13,
        name: "Sugar Creek Brewing",
        logo: "https://workforyourbeer.com/custom/domain_1/image_files/sitemgr_photo_1156.jpg",
        location: "LoSO, Charlotte",
        website: "https://sugarcreekbrewing.com/",
        description: "With Master Cicerone and participant in the award winning documentary 'Beers of Joy' Joe Vogelbacher at the wheel. Sugar Creek Brewing's philosophy combines the watchful eye of a Trappist Monk with the technical precision of a nuclear engineer to craft fresh, full-flavored beers that are immensely satisfying and intensely drinkable. Using unique combinations of aromatic yeast strains, domestic and imported hops and award-winning malt varieties, Sugar Creek infuses traditional recipes with modern tastes and techniques to create beer that nourishes both mind and body.",

    },
    {
        id: 14,
        name: "Sycamore Brewing",
        logo: "https://images.squarespace-cdn.com/content/v1/5944056d2994cabd292ec71b/1497730491164-E9FIDC9YC54DG2HUT5EW/ke17ZwdGBToddI8pDm48kMt_LvWl5LoYpdLqHrbTKEdZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7TQvSJ-dUvq06FiA6bZ_jnVAAe7AbWQG6HGLWr_6FxQq_TjCHq6scRcoCEeNESm4-Q/image-asset.png",
        location: "South End, Charlotte",
        website: "https://www.sycamorebrew.com/",
        description: "Award Winning, Easy-Drinking Craft Liquids 100% Family Owned Since the First Drop Proudly Rooted in Charlotte, North Carolina",
    },
    {
        id: 15,
        name: "Triple C Brewing",
        logo: "https://images.squarespace-cdn.com/content/v1/552bc631e4b0a253ae3ab53c/1559610659709-FL1OUMSA0CHJYY0BY9DK/ke17ZwdGBToddI8pDm48kFvPKNrAM_5Ks_wP0i7UpCR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWv0N-WVKFc0IB5GsctIjSEiNQCUYtO_myC6h1OOvprR7zs2yPjc1ECvpa5Zm_kMqw/triple_c_logo_nobg.png",
        location: "South End, Charlotte",
        website: "http://www.triplecbrewing.com/",
        description: "Triple C Brewing believes in craft, community, and commitment to the environment. From an easy drinking blonde ale to a boozy barrel-aged stout, we make sure we have something for everyone on our tap list. We’ve even won two bronze medals at the Great American Beer Festival for our 3C IPA (2015), and Zest-A-Peel (2018). Our brewery operates a 15 barrel brew system in our main brewhouse and a 7 barrel brew system in our barrel room as well as two, (15 barrel capacity) foeders. Giving back to our community and cultivating events that bring people together are also incredibly important to us. We love to celebrate and support our historic South End neighborhood. Our commitment to the environment includes donations to Catawba River clean-up, a strict recycling program at our brewery, and ensuring the spent grain (waste from the brewing process) goes to local farms which then feed their livestock with the grain.",

    },
    {
        id: 16,
        name: "Unknown Brewing",
        logo: "https://www.porchdrinking.com/wp-content/uploads/2017/05/unknown-brewing.png",
        location: "The Gold District, Charlotte",
        website: "http://www.unknownbrewing.com/",
        description: "brew beer, drink beer, live beer, venture into the Unknown with us.",
    
    },
    {
        id: 17,
        name: "Wooden Robot Brewing",
        logo: "https://media.bizj.us/view/img/9098592/wooden-robot-logo-2016*750xx1035-1380-162-0.jpg",
        location: "South End, Charlotte",
        website: "https://woodenrobotbrewery.com/",
        description: "An urban farmhouse brewery bringing preservation and innovation to the Charlotte, NC beer drinking community.",
    },

];

const beerSeed = [
    {
        name: "Hop Drop 'N' Roll",
        picture: "https://nodabrewing.com/wp-content/uploads/2019/10/HopDrop2.png",
        price: 14.99,
        description: "2014 World Beer Cup® Gold Award Winner, American-Style IPA. Hops in your face. Crisp, mouthwatering, American citrus hops dominate for an ideal IPA character. It’s hopped before, during and after the boil with late boil additions of Citra and Amarillo for a complex flavor profile. The rich golden color comes from a blend of English and American base malts accented with substantial amounts of Vienna and Wheat malt. This is the beer that started it all for NoDa Brewing.",
        type: "IPA",
        alcoholContent: "7.2%",
        quantity: 100,
        userReviews: "8/10",
        brewery_id: 1
    },
    {
        name: "Jam Session",
        picture: "https://nodabrewing.com/wp-content/uploads/2019/10/JamSession.png",
        price: 14.99,
        description: "The evolution of American Pale Ale—still a session beer but it sacrifices nothing—clear hop flavor shines through without being too dominant, and there’s a great malt flavor uncommon to the variety. The backbone of this beer is the balance of imported Maris Otter and Caramunich malts with the pine and citrus flavors of Centennial, Simcoe, and Citra hops.",
        type: "Pale Ale",
        alcoholContent: "5.1%",
        quantity: 84,
        userReviews: "7/10",
        brewery_id: 1
    
    },
    {
        name: "Cavu",
        picture: "https://nodabrewing.com/wp-content/uploads/2019/10/CAVU.png",
        price: 14.99,
        description: "Inspired by Todd’s experience as a pilot, CAVU (Ceiling And Visibility Unlimited) is a flight term used to describe clear skies or ideal conditions. We hope you have the same outlook during the warm summer months while sipping on this light-colored and brisk ale that presents itself with hints of tropical fruit and citrus notes from our west coast hops, then finishes clean and bright…like a cool breeze on a clear summer day.",
        type: "Blode Ale",
        alcoholContent: "4.6%",
        quantity: 40,
        userReviews: "7/10",
        brewery_id: 1
    
    },
    {
        name: "Coco Loco",
        picture: "https://nodabrewing.com/wp-content/uploads/2019/10/CocoLoco.png",
        price: 10.99,
        description: "Deep, rich and delicious. This robust porter has a base of Chocolate and Brown malts for a stunningly deep rich color with ruby highlights. The slight bitterness from American chocolate is balanced with the sweet notes of organic coconut we toast onsite at the brewery. It was even awarded the Great American Beer Festival Silver Medal in 2012.",
        type: "Porter",
        alcoholContent: "6.2%",
        quantity: 48,
        userReviews: "6/10",
        brewery_id: 1
    
    },
    {
        name: "Higher-Ground",
        picture: "https://brewerydb-images.s3.amazonaws.com/beer/5k8d4v/upload_M0ojpK-medium.png",
        price: 8.99,
        description: "Higher Ground, our first high gravity offering, is a classic West Coast IPA style, with a hearty dose of Cascade hops to create a delicious citrusy flavor and aroma. We also include specialty crystal malts to give the beer it's unique caramel color and firm malt foundation. It's noticeable bitterness is balanced by a subtle caramel background to make for an easy drinking IPA.",
        type: "WestCoast IPA",
        alcoholContent: "7.1",
        quantity: 44,
        userReviews: "6/10",
        brewery_id: 2
    },
    {
        name: "Jalepeno",
        picture: "https://untappd.akamaized.net/site/beer_logos_hd/beer-109679_e9693_hd.jpeg",
        price: 9.99,
        description: "Our Jalapeño Pale Ale is in a class of its own. We start by brewing Free Will Pale Ale, and then add in a hefty dose of fresh-picked jalapeño peppers with the seeds removed, so you can enjoy a subtle flavor and the aroma of the green peppers without the heat.",
        type: "Pale Ale",
        alcoholContent: "6.8%",
        quantity: 72,
        userReviews: "5/10",
        brewery_id: 2
    
    },
    {
        name: "Lazy Bird",
        picture: "https://beerconnoisseur.com/sites/default/files/styles/beer_page_245w/public/beer/lazy-bird.jpg?itok=ZnLUOlkj",
        price: 9.99,
        description: "Lazy Bird captures the essence of what it means to be an American Brown Ale. It pours a mahogany brown with a noticeable lemony yet roasty aroma, which comes from a heavy amount of cascade hops at the end of the boil as well as a generous amount of roasted barley in the mash. This combination of malt and hop intricacy makes for an enjoyable beer year round.",
        type: "Brown Ale",
        alcoholContent: "7%",
        quantity: 64,
        userReviews: "8/10",
        brewery_id: 2
        
    },
    {
        name: "Paradise City",
        picture: "https://products1.imgix.drizly.com/ci-birdsong-brewing-paradise-city-session-ipa-5f0fe5990a136439.png?auto=format%2Ccompress&fm=jpg&q=20",
        price: 7.99,
        description: "Bright tropical notes and clean finish make Paradise City a perfect all year brew. A light ABV and balanced body help to create a flavorful, aromatic IPA that’s 100% drinkably dank. Grab a can and head on down to where the grass is green and the beers are chilly.",
        type: "IPA",
        alcoholContent: "7.6%",
        quantity: 20,
        userReviews: "8/10",
        brewery_id: 2
       
    },
    {
        name: "Blue Blaze Altbier",
        picture: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
        price: 6.99,
        description: "We have taken two very different classic German Altbier styles and crafted them into one refreshing, crisp, lighter-bodied beer that still packs in the flavor. The deep copper maltiness contrasts with the bright white head and spicy finish.",
        type: "Pilsner",
        alcoholContent: "4.8%",
        quantity: 12,
        userReviews: "6/10",
        brewery_id: 3
        
    },
    {
        name: "Yellow Blazer Kolsch",
        picture: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
        price: 6.99,
        description: "This classic German golden ale is crisp and satisfying. The mild, sweet malt is perfectly balanced with a subdued spicy flavor note from German hops.",
        type: "Blonde Ale",
        alcoholContent: "5.2%",
        quantity: 16,
        userReviews: "8/10",
        brewery_id: 3
        
    },
    {
        name: "Black Blaze Milk Stout",
        picture: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
        price: 5.90,
        description: "Our milk stout is a classic English mainstay. Black Blaze is a medium-bodied, creamy, dark beer. It has a slightly sweetened roastiness with hints of espresso & chocolate. This is a dark beer that you can drink all day long and all year long.",
        type: "Stout",
        alcoholContent: "8%",
        quantity: 24,
        userReviews: "5/10",
        brewery_id: 3
        
    },
    {
        name: "SoBo Orangerine Hazy IPA",
        picture: "https://static1.squarespace.com/static/5671e0d2b204d5dd9d545e81/t/5681be390ab377a994811999/1586995143463/",
        price: 6.99,
        description: "Heading Southbound, this New England style hazy, juicy IPA (6.4%) was brewed only with water, malt, yeast, hops, and orange peels yielding a citrusy, refreshing beer. No purees, extracts, or additives.  SoBo is a slang term for a southbound thru-hiker on the AT. ",
        type: "IPA",
        alcoholContent: "6%",
        quantity: 12,
        userReviews: "6/10",
        brewery_id: 3
    },
    {
        name: "Hootie",
        picture: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
        price: 7.00,
        description: "Let your instincts take over. Channel your inner beast. When our brewmaster pulls a fresh beer off the canning line he brings everyone close to crack it open and inhale the instantaneous aroma explosion. It’s ritualistic. This sort of obsession led to vision quests in Pacific Northwest hop fields, not to mention years of maniacal recipe modification on a small scale. Embrace your inner HOOTIE and fly silently into the night!",
        type: "IPA",
        alcoholContent: "6.4%",
        quantity: 8,
        userReviews: "4/10",
        brewery_id: 4
    
    },
    {
        name: "Citrus Jammer",
        picture: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
        price: 7.00,
        description: "A refreshing, 125 calorie, tart beer with a lemon-lime kick. Just tangy enough to tingle the taste buds.",
        type: "Sour",
        alcoholContent: "6.7%",
        quantity: 4,
        userReviews: "8/10",
        brewery_id: 4
        
    },
    {
        name: "Sweet Action",
        picture: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
        price: 7.00,
        description: "That short-lived sensation sparked one of our first collaborations—the beer you hold in your hand. Our quest to classify SWEET ACTION has ended; it’s a beer your brain can’t categorize, but instead speaks directly to your palate. Our senses and intuition sometimes conquer rational thought. It’s Mad Science.",
        type: "Blonde Ale",
        alcoholContent: "6.9%",
        quantity: 32,
        userReviews: "7/10",
        brewery_id: 4
        
    },
    {
        name: "The Crisp",
        picture: "https://pbs.twimg.com/media/DdQZ5tLU0AAMPmG.png",
        price: 7.00,
        description: "The original Sehr Crisp from Sixpoint. Brewed with noble hops for indelible sehr crisp flavor",
        type: "Pilsner",
        alcoholContent: "5%",
        quantity: 28,
        userReviews: "5/10",
        brewery_id: 4
    
    },
    {
        name: "El Gato Mariachi",
        picture: "https://catawbabrewing.com/wp-content/uploads/2020/02/CVB-ElGato12ozFRONT.png",
        price: "5.99",
        description: "El Gato Mariachi incorporates all the traditional Horchata ingredients into a wheat ale base – along with a healthy dose of milk sugar. An addition of rice in the grain bill lightens the body for excellent drinkability, without sacrificing its creamy mouthfeel. The beer features an enticing aroma of freshly baked cinnamon rolls. It pours a milky straw color, and finishes with just the right blend of vanilla sweetness and a touch of cinnamon spice.",
        type: "White Ale",
        alcoholContent: "5.3%",
        quantity: 24,
        userReviews: "6/10",
        brewery_id: 5
      
    },
    {
        name: "Hopness Haze",
        picture: "https://catawbabrewing.com/wp-content/uploads/2020/02/CVB-Hopness12ozFRONT.png",
        price: 5.99,
        description: "The sip is layered with notes of juicy tangerine, pineapple, and ripe mango, finishing with only a whisper of hop bitterness.",
        type: "IPA",
        alcoholContent: "6%",
        quantity: 8,
        userReviews: "7/10",
        brewery_id: 5
       
    },
    {
        name: "White Zombie",
        picture: "https://catawbabrewing.com/wp-content/uploads/2020/02/CVB-WZombie12ozFRONT.png",
        price: 6.99,
        description: "Brewed according to the Belgian Witbier tradition using unmalted wheat to create a light body and white sheen. Additions of coriander and orange peel give it a fruity and spicy character while the hops are subtle and only lightly detected",
        type: "White Ale",
        alcoholContent: "5.1%",
        quantity: 32,
        userReviews: "6/10",
        brewery_id: 5
        
    },
    {
        name: "Evening Joe",
        picture: "https://catawbabrewing.com/wp-content/uploads/2020/02/CVB-EJoe12ozFRONT.png",
        price: 7.99,
        description: "Like the Cream Ale at its roots, the beer is light and crisp, endlessly drinkable. Arabica coffee is introduced after fermentation to impart delicious notes of roast and dark chocolate typically associated with Porters and Stouts, without detracting from the beer’s refreshing quality. Natural vanilla flavor and lactose sugar add a hint of sweet cream to top off this café au lait-inspired cold brew.",
        type: "Coffee Blonde Ale",
        alcoholContent: "5.7%",
        quantity: 16,
        userReviews: "6/10",
        brewery_id: 5
       
    },
    {
        name: "Common Home",
        picture: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
        price: 7.99,
        description: "COMMON HOME is an easy-drinking, malt-forward common ale. The Carolina Common…it’s a Free Range style of beer, inspired by our love of local malt and English pub ales. Expect notes of fresh baked bread, iced tea, bread crust and hints of cocoa powder and coffee. A perfectly light, sessionable beer for year-round drinkin’ with family and friends. Cheers!",
        type: "Common Ale",
        alcoholContent: "5.1%",
        quantity: 80,
        userReviews: "3/10",
        brewery_id: 6
     
    },
    {
        name: "Therapy Session",
        picture: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
        price: 7.99,
        description: "A new addition to our LOVE AND DEVOTION series, ‘THERAPY SESSION’ celebrates the small things, the unexpected simplicity that brightens your day. A light and juicy IPA, uplifting in nature. Expect refreshing brightness of tropical fruit and citrus. This little beer wants to bring a smile to your face and some peace of mind, all wrapped up in a soft, juicy haze, cheers! ",
        type: "Hazy IPA",
        alcoholContent: "6.2",
        quantity: 84,
        userReviews: "6/10",
        brewery_id: 6
        
    },
    {
        name: "You're Everything I Knead",
        picture: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
        price: 7.99,
        description: "A Carolina Hoppy Sourdough (Tart) Wild Ale w/ Buckwheat collaboration with: Duke’s Bread, grains: NC barley, wheat and buckwheat, color: golden, hops: Citra and Comet special: 200+ year old sourdough yeast starter suggested serving size: goblet (12oz). We love bread almost as much as beer and this fine and funky ale is a true hybrid of the two! Brewed with 100% NC malt and fermented in full with a wonderfully tart sourdough culture shared with us by our good friends at Duke’s Bread. Expect a tart shandy! Citrusy-bright IPA with aromatics of fresh sourdough bread mingled with a juicy meyer lemon flavor-balanced body. A wonderfully refreshing experience",
        type: "Sourdough IPA",
        alcoholContent: "5.4%",
        quantity: 88,
        userReviews: "6/10",
        brewery_id: 6
        
    },
    {
        name: "Serious Business",
        picture: "https://workforyourbeer.com/custom/domain_1/image_files/49_photo_319.jpg",
        price: 7.99,
        description: "A new lager and this one is seriously fresh! A real fine Carolina Kellerbier, also known as a “cellar beer” a fresh and unfiltered lager. SERIOUS BUSINESS is medium bodied and tragically easy drinking. Tastes like fresh baked bread and a hint of toasty-nuts, basic yet so subtle and complex, balanced unknowingly by a tiny hint of floral hop character. This lager is old school and hiding nothing. Drink it and reminisce of the good ol’ days and new ones to come. Cheers.",
        type: "Lager",
        alcoholContent: "5.2",
        quantity: 72,
        userReviews: "8/10",
        brewery_id: 6
        
    },
    {
        name: "Big Pick'n",
        picture: "https://untappd.akamaized.net/site/beer_logos/beer-3148411_46058_sm.jpeg",
        price: 4.99,
        description: "The return of our Raspberry Pick'n, but BIGGER! We bumped up the ABV on this one to change things up a bit. This bold and tart Berliner Weisse was created with loads of fruit!",
        type: "Sour",
        alcoholContent: "6.1%",
        quantity: 60,
        userReviews: "4/10",
        brewery_id: 7
       
    },
    {
        name: "Bramblin Blackberry",
        picture: "https://untappd.akamaized.net/site/beer_logos/beer-1522359_9fdd8_sm.jpeg",
        price: 6.89,
        description: "This tantalizing fruit cider is dark plum in color with an alluring fruit forward aroma. Subtle blackberry notes wash over your palate for a balanced, complex and slightly tart semi-dry finish.",
        type: "IPA",
        alcoholContent: "6.9%",
        quantity: 76,
        userReviews: "7/10",
        brewery_id: 7
        
    },
    {
        name: "Brunch Junkie",
        picture: "https://untappd.akamaized.net/site/beer_logos/beer-1376720_b4d23_sm.jpeg",
        price: 5.89,
        description: "Breakfast Stout brewed with flaked oats and Sumatra Coffee from Central Coffee.",
        type: "Stout",
        alcoholContent: "7.5%",
        quantity: 34,
        userReviews: "7/10",
        brewery_id: 7
      
    },
    {
        name: "Druid Pils",
        picture: "https://untappd.akamaized.net/site/beer_logos/beer-3195425_f2369_sm.jpeg",
        price: 4.89,
        description: "A classic German-style pilsner, from the yeast to the hops. Crisp, dry, refreshing.",
        type: "Pilsner",
        alcoholContent: "6%",
        quantity: 27,
        userReviews: "7/10",
        brewery_id: 7
      
    },
    {
        name: "Juicy Jay",
        picture: "https://images.squarespace-cdn.com/content/v1/5d8256d0783d5e79f8a01c54/1588775526033-I975KKZEUNJ1NOR9QWIG/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k2HH6OEm6WCCYLibno-s8b4weTEWBRU0WHPO2pE1u2Ju0c04VQ6HZ7fTjtKQ38BuA/Cans-01.png",
        price: 8.89,
        description: "Mosaic, El Dorado, and Cascade hops join in harmony to produce a juicy, tropical treat with a distinct, dry finish.",
        type: "Hazy IPA",
        alcoholContent: "7.1%",
        quantity: 120,
        userReviews: "9/10",
        brewery_id: 8
       
    },
    {
        name: "Penguin Pils",
        picture: "https://images.squarespace-cdn.com/content/v1/5d8256d0783d5e79f8a01c54/1588775526033-I975KKZEUNJ1NOR9QWIG/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k2HH6OEm6WCCYLibno-s8b4weTEWBRU0WHPO2pE1u2Ju0c04VQ6HZ7fTjtKQ38BuA/Cans-01.png",
        price: 7.99,
        description: "",
        type: "Lager",
        alcoholContent: "6.3%",
        quantity: 90,
        userReviews: "4/10",
        brewery_id: 8
    },
    {
        name: "Flicker Daze",
        picture: "https://images.squarespace-cdn.com/content/v1/5d8256d0783d5e79f8a01c54/1588775526033-I975KKZEUNJ1NOR9QWIG/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k2HH6OEm6WCCYLibno-s8b4weTEWBRU0WHPO2pE1u2Ju0c04VQ6HZ7fTjtKQ38BuA/Cans-01.png",
        price: 6.99,
        description: "Wheat beer with notes of peach ring and orange peel made with Zappa hops and all Riverbend malt",
        type: "Wheat Ale",
        alcoholContent: "5.8%",
        quantity: 75,
        userReviews: "7/10",
        brewery_id: 8
    
    },
    {
        name: "Carolina Sparkle Party",
        picture: "https://images.squarespace-cdn.com/content/v1/5d8256d0783d5e79f8a01c54/1588775526033-I975KKZEUNJ1NOR9QWIG/ke17ZwdGBToddI8pDm48kCX-V5vw-8h9IBXN10-_8XN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k2HH6OEm6WCCYLibno-s8b4weTEWBRU0WHPO2pE1u2Ju0c04VQ6HZ7fTjtKQ38BuA/Cans-01.png",
        price: 5.99,
        description: "Traditional kettle sour German wheat beer with notes of sourdough, lemonade, and a crisp tartness.",
        type: "Berliner Weisse Ale",
        alcoholContent: "4%",
        quantity: 130,
        userReviews: "8/10",
        brewery_id: 8
     
    },
    {
        name: "Citraphilia",
        picture: "https://storage-trianglewine.comcash.com/images/products/a73c756b4eb911afdda6b3b9877edb4f.png",
        price: 7.89,
        description: "Our flagship IPA was brewed with massive amounts of Citra hops and blended with Amarillo and Eukanot hops to leave you with a true tropical citrus experience.",
        type: "IPA",
        alcoholContent: "6.4%",
        quantity: 56,
        userReviews: "7/10",
        brewery_id: 9
       
    },
    {
        name: "Burn Down Brown",
        picture: "https://www.thebigbridge.com/wp-content/uploads/2019/01/Lenny-Boy-Burn-Down-Brown-can-design-by-big-bridge-1030x1030.jpg",
        price: 7.59,
        description: "This English style brown ale has notes reminiscent of chocolate and toffee with a balanced hop character. We add a heavy dose of rolled oats to bring it all together for a rich creamy brown ale",
        type: "Brown Ale",
        alcoholContent: "5%",
        quantity: 36,
        userReviews: "8/10",
        brewery_id: 9
        
    },
    {
        name: "Tropicalus",
        picture: "https://untappd.akamaized.net/photos/2020_06_11/b17a941c78d0d445f011708e14b3304c_640x640.jpg",
        price: "7.99",
        description: "An aromatic, hazy White IPA bursting with notes of tropical fruit and banana from our house Belgian yeast.",
        type: "IPA",
        alcoholContent: "6%",
        quantity: 66,
        userReviews: "6/10",
        brewery_id: 9
       
    },
    {
        name: "Booty Call",
        picture: "https://untappd.akamaized.net/site/beer_logos_hd/beer-1783409_a9c47_hd.jpeg",
        price: 6.99,
        description: "Big double IPA blended with Citra, Simcoe, & Bravo hops. The beer you turn to when you need some lovin'. This beer will always be around to leave you feeling happy & wanted.",
        type: "Double IPA",
        alcoholContent: "8.7%",
        quantity: 31,
        userReviews: "8/10",
        brewery_id: 9
        
    },
    {
        name: "Copper",
        picture: "https://www.oldemeckbrew.com/wp-content/uploads/2020/05/Beer_Indv_Copper_can.png",
        price: 5.00,
        description: "OMB’s flagship, Copper, is an authentic Düsseldorf style “Altbier” or Amber Ale. There are no crazy flavors or gimmicks with Copper – its full-flavored start transitions to a smooth, balanced, easy-drinking finish. It’s the beer that tastes like beer.",
        type: "Altbier",
        alcoholContent: "5.3%",
        quantity: 111,
        userReviews: "5/10",
        brewery_id: 10
        
    },
    {
        name: "Captain Jack",
        picture: "https://www.oldemeckbrew.com/wp-content/uploads/2020/05/Beer_Indv_CaptJack_can.png",
        price: 6.00,
        description: "We created this crisp, smooth, straw-colored Pilsner as a salute to the courage of Captain James Jack and the members of the Mecklenburg Convention, who on May 20, 1775 signed the first declaration of independence in America! Enjoy the unmistakable taste of freedom in every swig",
        type: "Pilsner",
        alcoholContent: "4,8%",
        quantity: 81,
        userReviews: "5/10",
        brewery_id: 10
    },
    {
        name: "Hornets Nest",
        picture: "https://cdn.shopify.com/s/files/1/2624/3464/products/HornetsNest_bottles_grande.jpg?v=1587132320",
        price: 6.00,
        description: "This opaque, subtly sweet Hefeweizen is our tribute to Charlotte history: Hornet’s Nest is the nickname England’s General Cornwallis gave Charlotte when he met more resistance here than anticipated during the Revolutionary War.",
        type: "Hefeweizen",
        alcoholContent: "5.2%",
        quantity: 32,
        userReviews: "8/10",
        brewery_id: 10
    },
    {
        name: "704",
        picture: "https://www.oldemeckbrew.com/wp-content/uploads/2020/05/Beer_page_704_HazyW.png",
        price: 5.99,
        description: "At OMB, we love all things Charlotte. So we decided to name this delicious beer after the area code synonymous with Charlotte. Aromatic and refreshingly crisp, with pleasant lemon and mandarin orange notes courtesy of Loral and Mandarina Bavaria hops.",
        type: "Hazy Wheat Ale",
        alcoholContent: "5.3%",
        quantity: 87,
        userReviews: "7/10",
        brewery_id: 10
    },
    {
        name: "Double Universe",
        picture: "https://untappd.akamaized.net/site/beer_logos_hd/beer-3564469_8b4a8_hd.jpeg",
        price: 7.89,
        description: "Double version of our Universal Mind IPA, 100% Citra hops including Citra from our 2019 harvest.",
        type: "Hazy Double IPA",
        alcoholContent: "8.2%",
        quantity: 93,
        userReviews: "7/10",
        brewery_id: 11
    },
    {
        name: "This Is Just A Test",
        picture: "https://untappd.akamaized.net/photos/2020_05_30/cfef35e3c9808e89422bf831e68399c6_640x640.jpg",
        price: 7.99,
        description: "Hazy IPA hopped with Sabro, Citra, and Mosaic. Good mix of resinous dank flavor, tropical fruit and that je ne sais quois that Sabro brings to the mix.",
        type: "Hazy IPA",
        alcoholContent: "7.6%",
        quantity: 12,
        userReviews: "7/10",
        brewery_id: 11
    },
    {
        name: "Tropical Ponche",
        picture: "https://residentculturebrewing.com/dist/images/slides/RC_TropicalPonche_Label.jpg",
        price: 8.00,
        description: "Collab with our good friends at Salud Cerveceria. Fruited Berliner Weisse fruited with over 700 lbs of tropical fruit puree. A tart, tropical fruit puunch, bursting with aromas of passion fruit, mango and orange. Super refreshing, dry and drinkable.",
        type: "IPA",
        alcoholContent: "7.1%",
        quantity: 4,
        userReviews: "8/10",
        brewery_id: 11
    },
    {
        name: "Paegent Worthy",
        picture: "https://cdn.beeradvocate.com/im/beers/488137.jpg",
        price: 7.00,
        description: "Double New England IPA hopped with Amarillo and Strata.",
        type: "Hazy Double IPA",
        alcoholContent: "8.3%",
        quantity: 0,
        userReviews: "8/10",
        brewery_id: 11
    },
    {
        name: "Bayern Echo",
        picture: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
        price: 5.00,
        description: "Our Weissbier is made with 59 percent malted wheat, giving it a wonderful bready flavor and cloudy appearance. The aromas of clove and banana come from the traditional German top cropping yeast we use. Expect a wonderfully balanced, highly drinkable beer, with a soft mouthfeel and a fluffy head of foam.",
        type: "IPA",
        alcoholContent: "7.2%",
        quantity: 24,
        userReviews: "7/10",
        brewery_id: 12
    },
    {
        name: "Hyde In The Haze",
        picture: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
        price: 5.00,
        description: "We went deep into the haze on this one. This New England IPA is made with over 3 pounds per barrel of Mandarina Bavaria and El Dorado hops. This juicy IPA is layered with tropical aromas and a sweet clementine flavor that lingers on the palate. #hazy",
        type: "Hazy IPA",
        alcoholContent: "7.1%",
        quantity: 2,
        userReviews: "6/10",
        brewery_id: 12
    },
    {
        name: "Blue Daisy",
        picture: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
        price: 6.00,
        description: "Pale golden color. Malty flavor and aroma with subtle hop character. Crisp and refreshing.",
        type: "IPA",
        alcoholContent: "6.4%",
        quantity: 78,
        userReviews: "7/10",
        brewery_id: 12
    },
    {
        name: "Pulp Perscription",
        picture: "https://thesuffolkpunch.com/wp-content/uploads/2018/11/Primary-Logo-01.png",
        price: 6.00,
        description: "This hazy IPA was brewed with heaps of oats and double dry hopped with obscene amounts of the freshest Galaxy Hops. Opaque, fluffy, with notes of tropical fruits. This beer is out of this world...Dare we say it's out of this galaxy. ",
        type: "IPA",
        alcoholContent: "6.8%",
        quantity: 56,
        userReviews: "7/10",
        brewery_id: 12
    },
    {
        name: "Blood Orange",
        picture: "https://untappd.akamaized.net/site/beer_logos_hd/beer-2793323_80dd1_hd.jpeg",
        price: 5.99,
        description: "Our pursuit of world class flavor has germinated the seed of our latest creation – “The 'Blood Orange'! This offspring is a West Coast style IPA brewed and infused with California grown 'Moro' Blood Oranges. This unique citrus fruit creates a deeper and more penetrating citrus flavor than the usual fruit-forward IPA. Hints of raspberry and grapefruit interweave harmoniously with new flavors created from novel dry hopping techniques. Copious amounts of Citra and Mosaic hops transform during fermentation into a bouquet of tropical and floral aromas. A touch of toasted specialty malt lends a subtle fresh baked-bread character to balance this incredibly refreshing ale. The result is an indescribable blend of euphoric flavors that you must experience first hand to believe.",
        type: "IPA",
        alcoholContent: "5.6%",
        quantity: 100,
        userReviews: "6/10",
        brewery_id: 13
    },
    {
        name: "Pale Ale",
        picture: "https://sugarcreekbrewing.com/wp-content/uploads/2017/04/pale-ale-4-square.png",
        price: 5.99,
        description: "A multicultural fusion combining American and European styles. This ale, brewed with imported Belgian specialty malts supported by a traditional English floor malt backbone, is hopped with some of America’s most popular whole-cone hop varieties yielding a surprisingly refreshing and well-balanced Pale Ale. Pronounced hop-flavors of fruit, citrus, pine and grapefruit balance a caramelized toastiness from our unique malt combination appealing to both hop-heads and malt-lovers alike. Expect a medium-bodied ale with a dry finish that will lend itself to easy drinking any time of year.",
        type: "Pale Ale",
        alcoholContent: "5.4%",
        quantity: 75,
        userReviews: "9/10",
        brewery_id: 13
    },
    {
        name: "Hazy Creek",
        picture: "https://sugarcreekbrewing.com/wp-content/uploads/2020/03/hazy.png",
        price: 5.99,
        description: "Unfiltered, hazy, and packaged straight from our brewery cellar Hazy Creek is packed full of juicy mouthwatering flavors. Huge new world dry hop additions transform during fermentation into tropical aromas of orange, tangerine, pineapple and grapefruit without leaving any lingering bitterness or hop bite. Weighing in around 30 IBU’s and 6% ABV, this beer has a creamy mouthfeel and medium dry finish from a healthy amount of wheat added to the recipe",
        type: "IPA",
        alcoholContent: "5.8%",
        quantity: 78,
        userReviews: "8/10",
        brewery_id: 13
    },
    {
        name: "Raspberry",
        picture: "https://untappd.akamaized.net/photo/2020_05_08/55554c34c7c77e18896e0762dadbfd8d_c_893827389_640x640.jpg",
        price: 5.99,
        description: "This vibrant, rosy-hued beer is bursting with raspberry flavor! Its traditional 14th Century recipe has been revived by our beer engineers using over 500 pounds of fresh raspberries. The Sugar Creek Raspberry White Ale boasts a naturally ruby pink color and pours with a picture perfect white head. The clean, subtle tartness makes this beer perfect for drinking in the Carolina sunshine.",
        type: "White Ale",
        alcoholContent: "4.2%",
        quantity: 98,
        userReviews: "5/10",
        brewery_id: 13
    },
    {
        name: "Mountain Candy",
        picture: "https://pbs.twimg.com/media/DKVXeQBW4AEdHc7.jpg",
        price: 7.99,
        description: "Hop-bursted and double dry hopped, juicy flavors of stone fruit and rainbow candy with notes of citrusy dankness.",
        type: "IPA",
        alcoholContent: "6.2%",
        quantity: 45,
        userReviews: "8/10",
        brewery_id: 14
    },
    {
        name: "Countryside",
        picture: "https://www.charlottefive.com/wp-content/uploads/2016/02/Syamore-Brewing-Countryside-IPA.jpg",
        price: 7.99,
        description: "Countryside is not your typical IPA! Fresh and fruity from a half dozen supercharged, exotic hop varietals. A beautiful bouquet of tropical fruits pairs with a bright grapefruit finish.",
        type: "IPA",
        alcoholContent: "6.6%",
        quantity: 67,
        userReviews: "5/10",
        brewery_id: 14
    },
    {
        name: "Southern Girl",
        picture: "https://www.charlottefive.com/wp-content/uploads/2016/02/Sycamore-Brewing-Southern-Girl-American-Blonde-Ale.jpg",
        price: 7.99,
        description: "Brilliantly golden in color and remarkably easy drinking, Southern Girl is perfectly balanced. Expect a biscuity, malt sweetness with subtle notes of strawberry and honeydew melon.",
        type: "Blonde Ale",
        alcoholContent: "5.2%",
        quantity: 87,
        userReviews: "8/10",
        brewery_id: 14
    },
    {
        name: "Rainbow Dust",
        picture: "https://pbs.twimg.com/media/DW-b8AQWsAI3bjK.jpg",
        price: 7.99,
        description: "Bursting with six rare hop varietals from around the world. Bright, tropical pure magic in a can!",
        type: "IPA",
        alcoholContent: "5.3",
        quantity: 98,
        userReviews: "7/10",
        brewery_id: 14
    },
    {
        name: "Golden Boy",
        picture: "https://products1.imgix.drizly.com/ci-triple-c-brewing-golden-boy-blonde-ale-986a3531ede31f93.jpeg?auto=format%2Ccompress&fm=jpg&q=20",
        price: 8.99,
        description: "A  golden colored, smooth drinking session beer meant for everyone. The toasted malt character comes from German malts with a slight spicy fruitiness from Mt. Hood hops",
        type: "Blonde Ale",
        alcoholContent: "7.1%",
        quantity: 34,
        userReviews: "5/10",
        brewery_id: 15
    },
    {
        name: "Cranes in the Sky",
        picture: "https://untappd.akamaized.net/photo/2020_06_10/74a71bbba11f92a835354b895f334010_c_904614861_640x640.jpg",
        price: 6.89,
        description: "This hazy pale pours a light yellow with pillowy white head. Aromas of juicy fruit, candied pineapple, sweet mango, and a hint of shredded coconut. Flavors of tropical fruits, bright citrus, juicy mango, and a slight melon presence. With a soft bitterness and creamy mouthfeel, this pale will bring you to the tropical beaches of the southern coast",
        type: "Pale Ale",
        alcoholContent: "6.5%",
        quantity: 105,
        userReviews: "7/10",
        brewery_id: 15
    },
    {
        name: "Baby Maker",
        picture: "https://products2.imgix.drizly.com/ci-triple-c-brewing-baby-maker-double-ipa-e3c8b20f29152992.png?auto=format%2Ccompress&fm=jpg&q=20",
        price: 8.99,
        description: "A beer with this excessive amount of dank hops needed a sturdy malt backbone, making it almost too easy to drink. Massive amounts of Amarillo, Azacca, Cascade, and Glacier hops in three differentdry hop additions provide intense fruitiness and spicy grapefruit hop aromas and flavors with low perceived bitterness.",
        type: "Double IPA",
        alcoholContent: "8%",
        quantity: 23,
        userReviews: "7/10",
        brewery_id: 15
    },
    {
        name: "Bier",
        picture: "https://images.squarespace-cdn.com/content/v1/552bc631e4b0a253ae3ab53c/1568654415503-HZW7F0AJQFYO1TKD3H7S/ke17ZwdGBToddI8pDm48kIu1QHqWqYcqSXGQukjVMYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0nTmq4t20SVBEeP1hbZbF3p0qWlzeoQAyZPk2qJaMlJDYnGVeje1wcxYJ6ka56sIZA/BierPilsner_Media2.png",
        price: 5.99,
        description: "Aromas of whole grain bread crust and touch of hop spice. Balanced malt sweetness on the palate. Crisp, dry finish and medium bodied.",
        type: "German Style Pilsner",
        alcoholContent: "6%",
        quantity: 65,
        userReviews: "7/10",
        brewery_id: 15
    },
    {
        name: "Feather",
        picture: "https://lh3.googleusercontent.com/-OmY1wo1WYkM/WlD2LfuLyAI/AAAAAAAFRZI/Ltjh8cDWQpQXAATvlB59FoqDOsGweaVMgCHMYCw/image_thumb%255B1%255D?imgmax=800",
        price: 5.76,
        description: "Who says you can’t have delicious craft beer and watch your calories at the same time? Feather Light is Charlotte’s first light craft beer! This low calorie light Berliner ale is slightly tart and has a crisp taste from kettle sour blend.",
        type: "Light Berliner",
        alcoholContent: "4.3%",
        quantity: 55,
        userReviews: "6/10",
        brewery_id: 16
    },
    {
        name: "Over The Edge",
        picture: "https://untappd.akamaized.net/site/beer_logos_hd/beer-499141_f0c2c_hd.jpeg",
        price: 6.99,
        description: "Over The Edge takes a great balance of 5 grains and then ramps it up with West Coast hops that were born in the shadows of the Cascades. This beer has blood orange color & thick white head. The beer starts with great hop aroma and malty sweetness followed by citrus orange full bodied flavor, finishing with clean piney end and cascade aromas",
        type: "IPA",
        alcoholContent: "6.4%",
        quantity: 23,
        userReviews: "9/10",
        brewery_id: 16
    },
    {
        name: "Pregame",
        picture: "https://target.scene7.com/is/image/Target/GUEST_b8719c8c-1384-42a4-9a1d-542a047db31c?wid=488&hei=488&fmt=pjpeg",
        price: 5.99,
        description: "You wake up and that first thought is . . Today is going to be a big day. It may be a tail gate, a pontoon party, a wedding, or it may be getting ready to run with the bulls.The fact remains you’ve got to get ready for the big day or prepare for a long night. It’s time to Pre-Game.Pre-Game is a Session Ale, this means this beer has great drinking potential. At 4.5% it beholds all of the craft flavor that you crave, but stays away from being too heavy. This beer is golden in color and low in bitterness. Hops do come through in a sweet piney aroma that makes the end of every sip sound like . . . Game Time!",
        type: "Session Ale",
        alcoholContent: "4.8%",
        quantity: 6,
        userReviews: "6/10",
        brewery_id: 16
    },
    {
        name: "Tele Porter",
        picture: "https://i2.wp.com/beerstreetjournal.com/wp-content/uploads/Unknown-Brewing-The-Teleporter.jpeg?fit=2048%2C1329&ssl=1",
        price: 6.99,
        description: "Tele-porter is a robust porter with a rich grain bill and dark malts that we brew with local cocoa nibs from French Broad chocolatiers in Asheville, NC, milk sugar and aromatic coffee roasted by our friends at Enderly Coffee in Charlotte. These ingredients give this beer a wonderful nose of coffee and chocolate, a creamy tan head, and rich mocha taste.",
        type: "Coffee Porter",
        alcoholContent: "7.2%",
        quantity: 44,
        userReviews: "7/10",
        brewery_id: 16
    },
    {
        name: "Botbier",
        picture: "https://media.bizj.us/view/img/9098592/wooden-robot-logo-2016*750xx1035-1380-162-0.jpg",
        price: 5.99,
        description: "This easy drinking urban farmhouse ale is inspired by the beers brewed and drank on traditional Belgian farms. Brewed with 100% local pale malt and moderately hopped, it is dry with a balance of fruity and spicy character.",
        type: "Oak-Aged Saison",
        alcoholContent: "5.4%",
        quantity: 65,
        userReviews: "9/10",
        brewery_id: 17
    },
    {
        name: "Fluoresent Sunburn",
        picture: "https://media.bizj.us/view/img/9098592/wooden-robot-logo-2016*750xx1035-1380-162-0.jpg",
        price: 6.99,
        description: "This light and refreshing wheat beer is brewed with loads of apricot, mango, and tangerine. Juicy and supremely drinkable with notes of tropical and stone fruits with a slightly tart finish. ",
        type: "Fruited Ale",
        alcoholContent: "5%",
        quantity: 3,
        userReviews: "3/10",
        brewery_id: 17
    },
    {
        name: "Overachiever",
        picture: "https://media.bizj.us/view/img/9098592/wooden-robot-logo-2016*750xx1035-1380-162-0.jpg",
        price: 6,
        description: "Overachiever exceeds expectations by packing the citrusy, juicy hop character of a hazy NE-style IPA into an obsessively drinkable pale ale. Brewed with local malt from our friends at Epiphany Craft Malt, oats, Simcoe and Centennial hops, the soft mouthfeel and restrained bitterness will have you coming back for sip after sip.",
        type: "Juicy IPA",
        alcoholContent: "5.3%",
        quantity: 98,
        userReviews: "4/10",
        brewery_id: 17
    },
    {
        name: "What He's Having",
        picture: "https://media.bizj.us/view/img/9098592/wooden-robot-logo-2016*750xx1035-1380-162-0.jpg",
        price: 6,
        description: "Brewed with over 3 pounds of bold, American hops per barrel. This IPA combines citrus and tropical fruit notes with a silky, light body and restrained bitterness.",
        type: "IPA",
        alcoholContent: "6.5%",
        quantity: 31,
        userReviews: "9/10",
        brewery_id: 17
    }
];

db.breweryPost.deleteMany({})
  .then(() => db.breweryPost.collection.insertMany(brewerySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

db.beerPost.deleteMany({})
  .then(() => db.beerPost.collection.insertMany(beerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});


// console.log(brewerySeed[0].beers[0]);
