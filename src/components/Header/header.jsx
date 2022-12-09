// import { useState } from "react";

const Header = (props) => {
  const onInputHandles = event => {
    props.searchHandler(event.target.value)
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/"><h1>Cargo Planner</h1></a>
        </div>
        <div className="header__search">
          <form className="search" action="">
            <input onInput={onInputHandles} value={props.search} type="text" className="form__input" name="s" placeholder="Search" />
            <button type="submit" className="form__submit" name="search"><i className="icon-search"></i></button>
          </form>
        </div>
        <div className="header__nav">
          <nav>
            <ul>
              <li>
                <a href="/">Load</a>
              </li>
              <li>
                <a href="/">Save</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;