import styles from "../../styles/Components.module.css";


function Logo({setPage}) {
    return (
        <img
            alt="Bemo Pizza"
            src="../../media/pizza-logo.png"
            className={styles.logo}
            onClick={()=>setPage("home")}
          />
    )
}

export default Logo;
