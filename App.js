import React from "react"
import ReactDOM from "react-dom/client"
/*
*Header
    -logo(title)
    -Nav items(right side items)
    -cart
*Body
    -search
    -restaurantList
        -restaurantCard(many cards)
            -image
            -Name
            -rating
            -cousine
*Footer
    -links
    -copyright
*/
// const Heading = () => (
//     <h1 className="MOTO">
//         Welcome to food villa!
//     </h1>
// );
const Title = () => (
    <a href="/">
        <img className="logo" 
        alt= "logo"
        src="https://static.vecteezy.com/system/resources/previews/028/338/773/non_2x/vintage-illustration-deign-for-t-shirt-t-shirt-design-for-your-business-pod-business-western-cowboy-rodeo-vintage-car-logo-free-png.png"/>
    </a>
    
);
const styleObj = ({
    border: "1px solid red", 
});
const Header = () => (
    <div className="header">
        <Title /> 
        <div style={styleObj} className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    
);

//config driven UI -> in interviesw
// const burgerKing = {
//     name: "Burger King",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/869dc7f9-5de9-457a-b2fc-139b39472620_798558.jpg",
//     cusines: ["Burger", "American"],
//     rating: "4.4"
// }
const restaurantList = [
    {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/869dc7f9-5de9-457a-b2fc-139b39472620_798558.jpg",
        name: "Burger king",
        cusines: ["Burger", "American"],
        rating: "4.4",
    },
    {
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_544,w_504/8631423fdda91d968a3889a37cc1fc8c",
        name: "Pizza Palace",
        cusines: ["Italian", "Pizza", "Fast Food"],
        rating: "4.2",
    },
    {
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_544,w_504/NI_CATALOG/IMAGES/CIW/2025/8/23/fcba4ea4-00d3-4d1f-a0d5-8a85fa21b7ee_9418_1.png",
        name: "Taco Town",
        cusines: ["Mexican", "Snacks"],
        rating: "4.0",
    },
    {
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_544,w_504/a96f0fe557a37d608d8dc0856f639374",
        name: "Curry Express",
        cusines: ["Indian", "North Indian", "Biryani"],
        rating: "4.5",
    },
    {
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_544,w_504/a3ef06754fdcc3dc002f6898a06498c5",
        name: "Wok n Roll",
        cusines: ["Chinese", "Asian", "Thai"],
        rating: "4.3",
    },
    {
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_544,w_504/e22a43ef919527925bb20ab08a9e56f1",
        name: "Cafe Delight",
        cusines: ["Cafe", "Bakery", "Desserts"],
        rating: "4.6",
    }
];
const RestaurantCard = ({image, name, cusines, rating}) => {
    return (
        <div className="card">
            <img src={image}/>
            <h2>{name}</h2>
            <h3>{cusines.join(", ")}</h3>
            <h4>{rating} stars</h4>
        </div>
    );
};
//props passed as argument in funtinal components, it is recieved as parameters (props or any other name);

//Config driven UI
const Body = () => {
    return (
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant) => {
                    return <RestaurantCard {...restaurant} key={restaurant.image} />;
                })
            }
        </div>
    );
};
const Footer = () => {
    return (
        <h4>Footer</h4>
    );
};
//JSX can only have one parent, so use React.Fragment//empty tag
//removes extra layer of div ( in lecture)
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);