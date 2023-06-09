import Styles from "./SearchBox.module.css"

const SearchBox = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.searchBox}>
        <input type="text" placeholder="Search movies" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchBox