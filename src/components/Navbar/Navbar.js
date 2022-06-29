import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        <i  className={classes.leftIcon} class="fa-brands fa-facebook"></i>
      </div>
      <div className={classes.center}>
        <ul className={classes.ul}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>THE BLOG</li>
            <li>CREATE</li>
            <li>CONTACT</li>
        </ul>
      </div>
      <div className={classes.right}>
        <img className={classes.image} src="./MyImage2.png"/>
        <div className={classes.search} >
      </div>
      </div>

    </div>
  )
}

export default Navbar