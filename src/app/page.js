import styles from "./page.module.css";
import Link from "next/link";
import { GitHub, Youtube, MessageCircle, Terminal } from "react-feather";
import Lanyard from './components/lanyard'


export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
      <script src="https://cdn.jsdelivr.net/gh/0x5841524f4e/js-lanyard/lanyard.js"></script>

        <div className={styles.links}>
          <Link href="/">[Home]</Link>
          
          <Link href="/projects">[Projects]</Link>
          
          <Link href="/about">[About]</Link>

          <Link href="/updates">[Updates]</Link>
        </div>
      </header>

      <main className={styles.main}>
       
      
       
       <h1>GRIPHCODE <img src="/oneko_sleep.gif" alt="oneko" className={styles.gif} /></h1> 
       <h3>「I like to learn about tech stuff」</h3>

        <Lanyard></Lanyard>

      

      
        <div className={styles.ctas}>
         
        </div>
      </main>
      <footer className={styles.footer}>
        
       <a target="_blank" rel="noopener noreferrer" href="https://github.com/GriphcodeDev"><GitHub/> GitHub</a>
       <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@griphcode"><Youtube/> Youtube</a>
       <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/yAzmXgvfWe"><MessageCircle/> Discord</a>
        
       <p>|</p>

        <div className="copyright">
       <p>© 2025 Griphcode. All rights reserved</p>
       </div>
      </footer>
    </div>
  );
}
