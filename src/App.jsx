import { Header } from "./components/Header";
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diogo Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci at ab quidem, eos numquam molestias reprehenderit nesciunt placeat omnis magnam, consequatur cumque tenetur eaque quis, quasi exercitationem? Sequi, fugit?"
          />
          <Post 
            author="Diego Fernandes"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}