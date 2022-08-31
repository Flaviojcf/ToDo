import "./styles/global.css";
import styles from "./App.module.css";

import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";
import { Task } from "./components/Task/Task";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Input />
    </div>
  );
}

export default App;
