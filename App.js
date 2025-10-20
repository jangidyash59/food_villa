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
const burgerKing = {
    name: "Burger King",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/869dc7f9-5de9-457a-b2fc-139b39472620_798558.jpg",
    cusines: ["Burger", "American"],
    rating: "4.4"
}
const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={burgerKing.image}/>
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines.join(", ")}</h3>
            <h4>{burgerKing.rating} stars</h4>
        </div>
    );
};
const Body = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
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