import { Observer } from 'mobx-react-lite'
import { inject } from 'module'
import styles from './index.module.less'

function App({ home }) {

  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <Observer render={() => home.count} />
      </header>
      <button onClick={home.onChange}>增加--</button>
    </div>
  )
}

export default inject('home')(App)