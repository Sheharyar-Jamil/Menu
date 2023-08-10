import React, { useState } from "react";
import menu from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

const allCategories = ['all', ... new Set(menu.map((item) => item.category))]


function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [category, setCategory] = useState(allCategories);

  const filterItems = (category) => {

    if(category === 'all'){
      return setMenuItems(menu);
    }
    const newItems = menu.filter((item) => item.category === category);
    return setMenuItems(newItems);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={category} filterItems={filterItems}/>
        <div className="section-center">
          {menuItems.map((menu) => {
            return (
              <Menu
                key={menu.id}
                title={menu.title}
                category={menu.category}
                price={menu.price}
                image={menu.img}
                desc={menu.desc}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
