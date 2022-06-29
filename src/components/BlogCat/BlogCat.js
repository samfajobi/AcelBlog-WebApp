import classes from "./BlogCat.module.css";

const BlogCat = () => {
  return (
    <div className={classes.BlogCat}>
      <ul>
        <li>Tech</li>
        <li>Music</li>
        <li>Lifestyle</li>
        <li>Love</li>
        <li>Fashion</li>
        <li>Sport</li>
      </ul>


    </div>
  )
}

export default BlogCat