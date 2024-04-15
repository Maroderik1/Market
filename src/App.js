import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Стул серый",
                    img: "chair-grey.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur",
                    category: "chairs",
                    price: "49.99"
                },
                {
                    id: 2,
                    title: "Стол",
                    img: "table.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur",
                    category: "tables",
                    price: "149.99"
                },
                {
                    id: 3,
                    title: "Диван",
                    img: "divan.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur",
                    category: "sofa",
                    price: "249.99"
                },
                {
                    id: 4,
                    title: "Лампа",
                    img: "lampa.jpeg",
                    desc: "Lorem ipsum dolor sit amet, consectetur",
                    category: "light",
                    price: "50.99"
                }
            ],
            showFullItem: false,
            fullItem: {},
        };
        this.state.currentItems = this.state.items
        this.addtoorder = this.addtoorder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItem = this.onShowItem.bind(this);

    }
    render() {
        return (
            <div className="wrapper">
                <Header
                    orders={this.state.orders}
                    onDelete={this.deleteOrder}
                />
                <Categories chooseCategory={this.chooseCategory} />
                <Items
                    onShowItem={this.onShowItem}
                    items={this.state.currentItems}
                    onAdd={this.addtoorder}
                />

                {this.state.showFullItem && (
                    <ShowFullItem
                        item={this.state.fullItem}
                        onAdd={this.addtoorder}
                        onShowItem={this.onShowItem}
                    />
                )}
                <Footer />
            </div>
        );
    }
    

    onShowItem(item) { 
        this.setState({fullItem: item});
        this.setState({
            showFullItem: !this.state.showFullItem
        })
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({ currentItems: this.state.items });
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({
            orders: this.state.orders.filter((el) => el.id !== id)
        });
    }

    addtoorder(item) {
        let isInArray = false;
        this.state.orders.forEach((el) => {
            if (el.id === item.id) {
                isInArray = true;
            }
        });
        if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
    }
}

export default App;
