import styles from "../page.module.css";
import Link from "next/link";


export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
      

        <div className="header-routes">
          <Link href="/">[Home] </Link>

          <Link href="/projects">[Projects] </Link>
          
          <Link href="/about">[About me] </Link>

          <Link href="/updates">[Updates]</Link>
        </div>
      </header>

      <h1>My Projects  <img src="/computer.gif" alt="computer" width={50} /></h1>

      <div>
        
      <h3>Griphitor</h3>
      <p>Griphitor is a code editor made in Electron. We take time and participation working with this IDE. find out more on our website.</p>
      <a href="https://github.com/Griphcode/Griphitor-IDE">
      <img className={styles.image} width={800} alt="Griphitor" src="https://user-images.githubusercontent.com/67136658/140071180-0562815b-b175-4da6-8d00-c26c727a81e8.png"></img>
      </a> 
      </div>

      
    </div>
  );
}
