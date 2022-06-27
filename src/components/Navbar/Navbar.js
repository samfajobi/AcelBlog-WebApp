import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <i  className={classes.leftIcon} class="fa-brands fa-facebook"></i>
      </div>
      <div className={classes.center}>
        <ul className={classes.ul}>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Create</li>
        </ul>
      </div>
      <div className={classes.right}>
        <img className={classes.image} src="./MyImage2.png"/>
        <div className={classes.search} >
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      </div>

    </div>
  )
}

export default Navbar