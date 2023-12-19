// Note

/*
1.Whenever you are planning to build a app, first step is to plan how it will build
2.Step for plan:
    a.You should exactly know what you have to build
    b.UI design, Layout, A wireframe
    c.A name for a website
    d.When we have visual picture of that writing code is become easy
*/


/**  Low level of planing
 * What component have in my app
 * Header
 *  -Logo
 *  -NavItem
 *  -CartIcon
 * Body
 *  - Search Bar input
 *  - RestaurantCardContainer
 *        - Restuarant Card
 * Footer
 *  - CopyRight
 *  - DifferentLinks
 *  - Address
 *  - Contact
 */

// Component is just a normal javascript function which returns some jsx

// Props(Properties)
/**
 * Properties is something that can passed to the componenet
 * Passing prop to a component is like passing argument to a function
 * Props is an object
 * 
 * 
 * 
 * 
//  * Confige Driven UI---> 

        A config-driven UI, short for configuration-driven user interface, refers to a design approach where the behavior and appearance of a user interface are determined by configuration rather than hard-coded logic. In this approach, the UI's features, layout, and behavior can be customized or controlled through configuration files or settings, allowing for flexibility and easier modifications without changing the underlying code.

        The configuration typically includes parameters, options, or settings that define how the UI elements should behave, what data to display, and how they should be presented. This separation of configuration from the actual code allows developers and designers to make adjustments or add new features to the user interface without having to modify the source code. It also enables non-technical users to configure the UI according to their preferences or specific requirements.

        Config-driven UIs are often used in systems where customization and adaptability are essential, such as content management systems, dashboards, or applications that serve multiple clients with varying needs. This approach can streamline the development process, enhance maintainability, and make it easier to scale and adapt the user interface to different use cases.


    Optional CHaining---->
        1.Optional chaining is a feature in JavaScript that allows you to access properties or call methods of an object without explicitly checking if each level of the property chain is defined. It helps to avoid errors that would occur if an intermediate property in the chain is null or undefined.
        2.Optional chaining is especially useful when dealing with complex data structures or when working with APIs where the shape of the data may vary. It was introduced in ECMAScript 2020 (ES11) and is supported in modern JavaScript environments.

    --Whenever we do mapping always give key prop to the component
    --React itself says that never use index as keys
 */








import React from "react";
import ReactDOM from "react-dom/client";


// Header component
const Header = () => {
    return (
        <div className="header">
            {/* Logo */}
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="" />
            </div>
            {/* NavItems */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}



// Restaurant DATA

const resList = [
    {
        "info": {
            "id": "627936",
            "name": "Meraki",
            "cloudinaryImageId": "5e17217be8633b82c254cbc8e94bd4d0",
            "locality": "Waman Tukaram Patil Marg",
            "areaName": "Chembur",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Chinese",
                "Thai",
                "Burmese"
            ],
            "avgRating": 4.3,
            "parentId": "2356",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=9995015~p=1~eid=0000018c-815c-61a6-5277-bf6a003a0117~srvts=1702977364390~45995",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-20 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=627936",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "422749",
            "name": "Dabba Garam (Homestyle,Combo, Thali & More)",
            "cloudinaryImageId": "j2yst2jqzn20jgtg4vvj",
            "locality": "Omkar Online",
            "areaName": "Chembur",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Home Food",
                "North Indian",
                "Thalis"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "67608",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 22:50:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    },
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "15% OFF",
                "subHeader": "UPTO ₹45"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=422749",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "23747",
            "name": "McDonald's",
            "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
            "locality": "K star mall",
            "areaName": "Chembur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-20 02:45:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹1000",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=23747",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "665112",
            "name": "Big Bowl",
            "cloudinaryImageId": "c99751d54e4e1847186c62b3309c1327",
            "locality": "St Anthonys Road",
            "areaName": "Chembur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "434792",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹169"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=665112",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "197025",
            "name": "Brijwasi Sweets, Original Since 1946 - GD Group",
            "cloudinaryImageId": "x7sy7x46ntsg5apivub6",
            "locality": "Greater Mumbai Ward-N",
            "areaName": "Ghatkopar East",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Sweets",
                "Snacks",
                "Fast Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "50164",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=9994208~p=2~eid=0000018c-815c-61a6-5277-bf6b003a024a~srvts=1702977364390~45995",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                    "description": "pureveg"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=197025",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "646672",
            "name": "Bakingo-Cakes & Desserts",
            "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
            "locality": "Chembur",
            "areaName": "Anwar Compound",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages",
                "Snacks"
            ],
            "avgRating": 4.5,
            "parentId": "3818",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-20 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=646672",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "721050",
            "name": "Chilya's Darbar",
            "cloudinaryImageId": "dcfe2edf703b0669d5e885622fb5aa07",
            "locality": "Janta Timber Market",
            "areaName": "Chembur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Indian",
                "Tandoor",
                "Mughlai",
                "Chinese",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "429497",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "18 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-20 00:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=721050",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "62898",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "jjaa2392w4wbt7ii34am",
            "locality": "Anwar compound, Nera Vanmali Tower",
            "areaName": "Chembur",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Punjabi",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "4925",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹159"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=62898",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "777480",
            "name": "Bombay Sweet Shop",
            "cloudinaryImageId": "1d0ff81018cb64bd96438a59a3c11062",
            "locality": "Shah Industrial Estate",
            "areaName": "Chembur",
            "costForTwo": "₹700 for two",
            "cuisines": [
                "Snacks",
                "Desserts",
                "Sweets",
                "Bakery",
                "Indian"
            ],
            "avgRating": 5,
            "veg": true,
            "parentId": "48883",
            "avgRatingString": "5.0",
            "totalRatingsString": "10+",
            "promoted": true,
            "adTrackingId": "cid=9733364~p=3~eid=0000018c-815c-61a6-5277-bf6c003a0307~srvts=1702977364390~45995",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=777480",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "17505",
            "name": "Faasos - Wraps, Rolls & Shawarma",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "Anwar compound, Nera Vanmali Tower",
            "areaName": "Chembur",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "North Indian",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "21809",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 4.3,
                "serviceability": "SERVICEABLE",
                "slaString": "28 mins",
                "lastMileTravelString": "4.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=17505",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "47610",
            "name": "Theobroma",
            "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
            "locality": "Chembur",
            "areaName": "Chembur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "1040",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-20 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "imageId": "newg.png",
                                    "description": "Gourmet"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹159",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=47610",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "23777",
            "name": "Shivsu chinese restuarant",
            "cloudinaryImageId": "ya7lqu9fqvegbu90ztxa",
            "locality": "Mumbai",
            "areaName": "Chembur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "183889",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 3.6,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "3.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=23777",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "26577",
            "name": "Lalta Pav Bhaji",
            "cloudinaryImageId": "xcpz67eipc6kvftvv6fq",
            "locality": "Sindhu Wadi",
            "areaName": "Ghatkopar East",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Chinese",
                "Beverages",
                "Juices"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "230825",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=9993669~p=4~eid=0000018c-815c-61a6-5277-bf6d003a044d~srvts=1702977364390~45995",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 4.8,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "4.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-20 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textBased": {},
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=26577",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "587027",
            "name": "Monginis",
            "cloudinaryImageId": "itmij9i1su6sxl5sfqay",
            "locality": "Baiganwadi",
            "areaName": "Chembur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 4.3,
            "parentId": "5007",
            "avgRatingString": "4.3",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "16 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "textExtendedBadges": {},
                    "textBased": {},
                    "imageBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=587027",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "237108",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
            "locality": "DK Sandu Street",
            "areaName": "Chembur",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.4,
            "parentId": "195515",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "description": "",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            }
                        ]
                    },
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=237108",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "665111",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "St Anthonys Road",
            "areaName": "Chembur",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "61955",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-19 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textExtendedBadges": {},
                    "textBased": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "swiggy://menu?restaurant_id=665111",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
        }
    }
]




// Restaurant Card Component
const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info


    return (
        <div className="restaurant-card">
            <img className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
            <h3 className="card-title">{name}</h3>
            <h4 className="cuisine">{cuisines.join(", ")}</h4>
            <div className="sub-details">
                <h4 className="rating">{avgRating}⭐</h4>
                <h4 className="eta">{sla.deliveryTime} MINS </h4>
            </div>
            <h4 className="price">{costForTwo}</h4>
        </div>
    )
}


// Body Component

const Body = () => {
    return (
        <div className="body">
            {/* Search Bar */}
            <div className="search"> Search</div>
            {/* Restuarant Title */}
            <h1 className="res-title">Restaurants</h1>
            {/* Restaurant Container */}
            <div className="restaurant-container">
                {
                    resList.map((resTaurantCard) => <RestaurantCard key={resTaurantCard.info.id} resData={resTaurantCard} />)
                }
            </div>
        </div>
    )
}


// Top level Component
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}




const rootDOM = ReactDOM.createRoot(document.querySelector('#root'));
rootDOM.render(<AppLayout />)