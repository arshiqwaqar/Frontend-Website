var products = [
    {
        id:7,
        name:"Red Heel Sandals",
        Price:700,
        image: 'texhwizimages/Women3.jpg',
        stock:2,
        availability:'In stock',
        category:'shoes',
        category2:'Women',
        desc:'Slay this Summer Season in these Comfortable Sandals for Women.These shoes have been made with good quality Man Made Leather material that gives them durability.The upper of these sandals consist of stitched details and a round toe shape make it stand out in a bunch of other sandals.The PU outsole provides grip and a good resistance to slip.'
    },
    {id:40,
        name:"louis Vuitton",
        Price:700,
        image:'texhwizimages/bagwomen4.jpg',
        stock:5,
        availability:'in stock',
        category:'Bags',
        category2:'Women',
        desc:'This Coussin MM handbag is made from puffy lambskin embossed with a surprising Monogram pattern, featuring a subtle floral pattern inside. It has a removable, chunky gold-color chain for shoulder carry and a wide, adjustable strap for cross-body wear. Inside, elegant simplicity reigns with two compartments separated by a zipped pocket.'

    }, 
    {
        id:2,
        name:"Shoes2",
        Price:450,
        image:'texhwizimages/nike2.jpg',
        stock:0,
        availability:'Out off stock',
        category:'shoes',
        category2:'men',
        desc:'Be your casual self in these Mens Laceup Shoes by Ndure.These shoes have been made with good quality Man Made Leather material that gives them durability.These shoes come with a Closed Toe detailing and finished with a Soft PU insole and Round toe shape.The PU outsole provides grip and a good resistance to slip.'
    },
    {id:22,
        name:"Hawaian Shirt",
        Price:450,
        image:'texhwizimages/shirtwomen2.jpg',
        stock:1,
        availability:'In stock',
        category:'Shirts',
        category2:'Women',
        desc:'egular fit check design casual shirt with good room for movement and a gently shaped waist to create a comfortable, tailored silhouette.'

    }, 
    {
        id:13,
        name:"Light Blue Denim",
        Price:450,
        image:'texhwizimages/jeanswomen1.jpg',
        stock:10,
        availability:'In stock',
        category:'Jeans',
        category2:'Women',
        desc:'Womens Slim Fit Elasticated Denim will keep you comfortable and make you look really good. The wide waistband, skinny fit, and beautiful color make this pair of jeans perfect for your wardrobe.'
    },
   
    {
        id:9,
        name:"Dark Gray Denim",
        Price:450,
        image:'texhwizimages/jeansmen1.jpg',
        stock:9,
        availability:'In stock',
        category:'Jeans',
        category2:'Men',
        desc:'Keep you comfortable and look fantastic. The Straight-fit denim makes this pair of jeans perfect for your wardrobe.'
    },
    {id:38,
        name:"Versace",
        Price:450,
        image:'texhwizimages/bagwomen2.jpg',
        stock:4,
        availability:'In stock',
        category:'Bags',
        category2:'Women',
        desc:'This Coussin MM handbag is made from puffy lambskin embossed with a surprising Monogram pattern, featuring a subtle floral pattern inside. It has a removable, chunky gold-color chain for shoulder carry and a wide, adjustable strap for cross-body wear. Inside, elegant simplicity reigns with two compartments separated by a zipped pocket.'

    }, 
    
    {
        id:5,
        name:"Brown Heel Sandals",
        Price:450,
        image:'texhwizimages/Women1.jpg',
        stock:0,
        availability:'Out of stock',
        category:'shoes',
        category2:'Women',
        desc:'Stand tall and elegant in these Deluxe Heels by Ndure.These shoes have been made with good quality Man Made Leather material which gives them durability.The upper of these shoes consist of straps with a metal strip. The insole is padded and is finished with a Square Toe shape.A TPR outsole keeps the shoe light and provides anti-slip resistence.'
    },
   
    
  
    
    {
        id:10,
        name:"Dark Blue Denim",
        Price:450,
        image:'texhwizimages/jeansmen2.jpg',
        stock:4,
        availability:'In stock',
        category:'Jeans',
        category2:'Men',
        desc:'Keep you comfortable and look fantastic. The Straight-fit denim makes this pair of jeans perfect for your wardrobe.'
    },
    {id:4,
        name:"Shoes4",
        Price:450,
        image:'texhwizimages/nike4.jpg',
        stock:4,
        availability:'In stock',
        category:'shoes',
        category2:'men',
        desc:'Kick back and relax in these casual mens sneakers by Ndure.These shoes have been made with good quality man-made material that ensures durability.A lace up style with a round toe shape makes these sneakers perfect everyday wear.A PVC outsole provides good grip and keeps the shoe light.'
    },
    {
        id:11,
        name:"Blue Ripped Jeans",
        Price:450,
        image:'texhwizimages/jeansmen3.jpg',
        stock:4,
        availability:'In stock',
        category:'Jeans',
        category2:'Men',
        desc:'Keep you comfortable and look fantastic. The Straight-fit denim makes this pair of jeans perfect for your wardrobe.'
    },
    {id:33,
        name:"Grey Leather Bag",
        Price:450,
        image:'texhwizimages/bagmen1.jpg',
        stock:0,
        availability:'Out of stock',
        category:'Bags',
        category2:'Men',
        desc:'Ample space, compact and convenient design. Hayden elegantly stores all your belongings safely in his padded pockets. This leather messenger bag was designed to fit up to 16" laptops comfortably while boasting an extensive range of sub-compartments designed for a number of smaller items too. Meet one of our most versatile leather companions yet.'

    }, 
 
    {
        id:6,
        name:"White Heel Sandals",
        Price:450,
        image:'texhwizimages/Women2.jpg',
        stock:5,
        availability:'In stock',        
        category:'shoes',
        category2:'Women',
        desc:'Let your feet shine in these Chain Embellished Sandals By Ndure.These shoes have been made with good quality man-made material, which makes them water-resistant, flexible and soft.The upper of these sandals is embellished with a chain and comes with a Square shaped toe finishing.The PVC outsole provides a good grip and keeps the shoe light.'
    },
    {
        id:14,
        name:"Faded Jeans",
        Price:450,
        image:'texhwizimages/jeanswomen2.jpg',
        stock:6,
        availability:'In stock',
        category:'Jeans',
        category2:'Women',
        desc:'Womens skinny-fit style jeans. Soft cotton denim keeps you moving comfortably all day long.'
    },
    {id:23,
        name:"Light Blue Shirt",
        Price:450,
        image:'texhwizimages/shirtwomen3.jpg',
        stock:4,
        availability:'In stock',
        category:'Shirts',
        category2:'Women',
        desc:'egular fit check design casual shirt with good room for movement and a gently shaped waist to create a comfortable, tailored silhouette.'

    }, 
    {
        id:16,
        name:"Royal Blue Denim",
        Price:450,
        image:'texhwizimages/jeanswomen4.jpg',
        stock:0,
        availability:'Out of stock',
        category:'Jeans',
        category2:'Women',
        desc:'Womens skinny-fit style jeans. Soft cotton denim keeps you moving comfortably all day long.'
    },
   
 
    {
        id:8,
        name:"White Heels",
        Price:450,
        image:'texhwizimages/Women4.jpg',
        stock:2,
        availability:'In stock',
        category:'shoes',
        category2:'Women',
        desc:'These Airy Toe Ring Sandal by Ndure are perfect for running errands on a summer day Let your feet breath in these flats.These ladies Sandals are made with good quality Crocodile Skin Imitation man-made leather to ensure durability.Embellished with Metallic Buckle with a round toe shape.Crafted with PU sole and a comfortable soft footbed'
    },
    {id:28,
        name:"Dark Green Upper",
        Price:450,
        image:'texhwizimages/jacketmen4.jpg',
        stock:4,
        availability:'In stock',
        category:'Jacket',
        category2:'Men',
        desc:'What is soft-shell? This is a new type of fabric which actually 3 different fabrics bonded together. Each layer has its properties i.e. warmth, moisture-wicking, and waterproofing.'

    },  
    {id:19,
        name:"shirt3",
        Price:450,
        image:'texhwizimages/shirtmen3.jpg',
        stock:4,
        availability:'In stock',
        category:'Shirts',
        category2:'men',
        desc:'egular fit check design casual shirt with good room for movement and a gently shaped waist to create a comfortable, tailored silhouette.'

    },
    {id:30,
        name:"jacket6",
        Price:450,
        image:'texhwizimages/jacketwomen2.jpg',
        stock:4,
        availability:'In stock',
        category:'Jacket',
        category2:'Women',
        desc:'Designed for comfort, function, and mobility, the fabric is an ideal temperature regulator with full-zip for added warmth.'

    }, 
    {
        id:15,
        name:"Blue Faded Jeans",
        Price:450,
        image:'texhwizimages/jeanswomen3.jpg',
        stock:4,
        availability:'In stock',
        category:'Jeans',
        category2:'Women',
        desc:'Terranova Womens Skinny Fit distressed style  Denim will keep you comfortable and looking great. The skinny leg and two-tone black color make this pair of jeans perfect for your wardrobe.'
    },
    {id:21,
        name:"Green Shirt",
        Price:450,
        image:'texhwizimages/shirtwomen1.jpg',
        stock:4,
        availability:'In stock',
        category:'Shirts',
        category2:'Women',
        desc:'egular fit check design casual shirt with good room for movement and a gently shaped waist to create a comfortable, tailored silhouette.'

    }, 
    {
        id:12,
        name:"Black Denim",
        Price:450,
        image:'texhwizimages/jeansmen4.jpg',
        stock:12,
        availability:'In stock',
        category:'Jeans',
        category2:'Men',
        desc:'Keep you comfortable and look fantastic. The Straight-fit denim makes this pair of jeans perfect for your wardrobe.'
    },
   
    
    {id:24,
        name:"Self Printed Shirt",
        Price:450,
        image:'texhwizimages/shirtwomen4.jpg',
        stock:1,
        availability:'In stock',
        category:'Shirts',
        category2:'Women',
        desc:'egular fit check design casual shirt with good room for movement and a gently shaped waist to create a comfortable, tailored silhouette.'

    }, 
    {id:17,
        name:"shirt1",
        Price:450,
        image:'texhwizimages/shirtmen1.jpg',
        stock:4,
        availability:'In stock',
        category:'Shirts',
        category2:'men',
        desc:'Regular fit check design casual shirt with good room for movement and a gently shaped waist to create a comfortable, tailored silhouette.'

    },
    {id:25,
        name:"Parachute Upper",
        Price:450,
        image:'texhwizimages/jacketmen1.jpg',
        stock:7,
        availability:'In stock',
        category:'Jacket',
        category2:'Men',
        desc:'What is soft-shell? This is a new type of fabric which actually 3 different fabrics bonded together. Each layer has its properties i.e. warmth, moisture-wicking, and waterproofing.'

    }, 
    {id:32,
        name:"Green Long Coat",
        Price:450,
        image:'texhwizimages/jacketwomen4.jpg',
        stock:4,
        availability:'In stock',
        category:'Jacket',
        category2:'Women',
        desc:'Designed for comfort, function, and mobility, the fabric is an ideal temperature regulator with full-zip for added warmth.'

    }, 
    {id:27,
        name:"Green Upper",
        Price:450,
        image:'texhwizimages/jacketmen3.jpg',
        stock:3,
        availability:'In stock',
        category:'Jacket',
        category2:'Men',
        desc:'What is soft-shell? This is a new type of fabric which actually 3 different fabrics bonded together. Each layer has its properties i.e. warmth, moisture-wicking, and waterproofing.'

    },
    {id:18,
        name:"shirt2",
        Price:450,
        image:'texhwizimages/shirtmen2.jpg',
        stock:6,
        availability:'In stock',
        category:'Shirts',
        category2:'men',
        desc:'egular fit check design casual shirt with good room for movement and a gently shaped waist to create a comfortable, tailored silhouette.'

    },
    {id:36,
        name:"Black Leather Bag",
        Price:450,
        image:'texhwizimages/bagmen4.jpg',
        stock:4,
        availability:'In stock',
        category:'Bags',
        category2:'Men',
        desc:'Ample space, compact and convenient design. Hayden elegantly stores all your belongings safely in his padded pockets. This leather messenger bag was designed to fit up to 16" laptops comfortably while boasting an extensive range of sub-compartments designed for a number of smaller items too. Meet one of our most versatile leather companions yet.'

    },
    {id:29,
        name:"Brown Long Coat",
        Price:450,
        image:'texhwizimages/jacketwomen1.jpg',
        stock:4,
        availability:'In stock',
        category:'Jacket',
        category2:'Women',
        desc:'Designed for comfort, function, and mobility, the fabric is an ideal temperature regulator with full-zip for added warmth.'

    }, 
    {id:35,
        name:"Brown LV Bag",
        Price:450,
        image:'texhwizimages/bagmen3.jpg',
        stock:4,
        availability:'In stock',
        category:'Bags',
        category2:'Men',
        desc:'Ample space, compact and convenient design. Hayden elegantly stores all your belongings safely in his padded pockets. This leather messenger bag was designed to fit up to 16" laptops comfortably while boasting an extensive range of sub-compartments designed for a number of smaller items too. Meet one of our most versatile leather companions yet.'

    }, 
    {id:20,
        name:"shirt4",
        Price:450,
        image:'texhwizimages/shirtmen4.jpg',
        stock:4,
        availability:'In stock',
        category:'Shirts',
        category2:'men',
        desc:'egular fit check design casual shirt with good room for movement and a gently shaped waist to create a comfortable, tailored silhouette.'

    },
   
    {id:31,
        name:"Red Upper",
        Price:450,
        image:'texhwizimages/jacketwomen3.jpg',
        stock:4,
        availability:'In stock',
        category:'Jacket',
        category2:'Women',
        desc:'Designed for comfort, function, and mobility, the fabric is an ideal temperature regulator with full-zip for added warmth.'

    }, 
   
    
    {id:34,
        name:"Grey Traveller Bag",
        Price:450,
        image:'texhwizimages/bagmen2.jpg',
        stock:9,
        availability:'In stock',
        category:'Bags',
        category2:'Men',
        desc:'Ample space, compact and convenient design. Hayden elegantly stores all your belongings safely in his padded pockets. This leather messenger bag was designed to fit up to 16" laptops comfortably while boasting an extensive range of sub-compartments designed for a number of smaller items too. Meet one of our most versatile leather companions yet.'

    }, 
    
    
    {id:26,
        name:"Blue Upper",
        Price:450,
        image:'texhwizimages/jacketmen2.jpg',
        stock:7,
        availability:'In stock',
        category:'Jacket',
        category2:'Men',
        desc:'What is soft-shell? This is a new type of fabric which actually 3 different fabrics bonded together. Each layer has its properties i.e. warmth, moisture-wicking, and waterproofing.'

    }, 
    {id:37,
        name:"Victoire",
        Price:450,
        image:'texhwizimages/bagwomen1.jpg',
        stock:4,
        availability:'In stock',
        category:'Bags',
        category2:'Women',
        desc:'This Coussin MM handbag is made from puffy lambskin embossed with a surprising Monogram pattern, featuring a subtle floral pattern inside. It has a removable, chunky gold-color chain for shoulder carry and a wide, adjustable strap for cross-body wear. Inside, elegant simplicity reigns with two compartments separated by a zipped pocket.'

    }, 
      {
        id:3,
        name:"Shoes3",
        Price:450,
        image:'texhwizimages/nike3.jpg',
        stock:1,
        availability:'In stock',
        category:'shoes',
        category2:'men',
        desc:'Exude a formal look with these mens loafers by Ndure.These loafers have been made with good quality flyknit material that ensures durability and breathibility.These mens loafers have an upper completed with textured detailing and a lace up style that makes them perfect for all day use.A flat PVC outsole gives these shoes good grip and comfort'
    },
    {id:39,
        name:"Black LV",
        Price:450,
        image:'texhwizimages/bagwomen3.jpg',
        category:'Bags',
        category2:'Women',
        desc:'This Coussin MM handbag is made from puffy lambskin embossed with a surprising Monogram pattern, featuring a subtle floral pattern inside. It has a removable, chunky gold-color chain for shoulder carry and a wide, adjustable strap for cross-body wear. Inside, elegant simplicity reigns with two compartments separated by a zipped pocket.'

    }, 

    {
        id:1,
        name:"Shoes1",
        Price:450,
        image:'texhwizimages/nike1.jpg',
        stock:7,
        availability:'In stock',
        category:'shoes',
        category2:'men',
        desc:'A classic wardrobe staple that will go with almost everything! Pair these casual shoes with your polos and jeans.They have been made with good quality Man Made Leather material that gives them durability.These shoes feature stylish lacing at the front, a round toe shape, and a padded insole.The PVC outsole provides good grip and keeps the shoe light.'
    },
    {id:41,
        name:"shirt9",
        Price:450,
        image:'texhwizimages/shirtmen5.jpg',
        stock:4,
        availability:'In stock',
        category:'Shirts',
        category2:'men',
        desc:'egular fit check design casual shirt with good room for movement and a gently shaped waist to create a comfortable, tailored silhouette.'

    },
    {
        id:42,
        name:"Flat Sandal",
        Price:700,
        image: 'texhwizimages/Women5.jpg',
        stock:0,
        availability:'Out of stock',
        category:'shoes',
        category2:'Women',
        desc:'Slay this Summer Season in these Comfortable Sandals for Women.These shoes have been made with good quality Man Made Leather material that gives them durability.The upper of these sandals consist of stitched details and a round toe shape make it stand out in a bunch of other sandals.The PU outsole provides grip and a good resistance to slip.'
    },
    ]

