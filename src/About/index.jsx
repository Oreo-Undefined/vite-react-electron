import classnames from 'classnames';
import styles from './index.module.less'

export default function Clock() {
  const {seconds, minutes, hours} = (() => {
    const date = new Date();
    const ms = date.getMilliseconds();
    const second = date.getSeconds() + ms / 1000;
    const minute = date.getMinutes() + second / 60;
    let hour = date.getHours() + minute / 60;
    hour = hour >= 12 ? hour - 12 : hour;
    return {
      seconds: -second / 60 * 360,
      minutes: -minute / 60 * 360,
      hours: -hour / 12 * 360,
    };
  })();
  const DrawTicks = ({className, total, gap = 5, rotate}) => {
    const ticks = Array(total).fill(0).map((_, i) => {
      const angle = i * 360 / total - 2 / 200 * 180 / Math.PI; // 刻度宽度的一半转为角度，去掉这一部分误差
      let width = 2, height = 8;
      if (i % gap === 0) {
        width = 4;
        height = 10;
      }
      return (
        <div
          key={i}
          className={styles.tick}
          style={{ transform: `rotate(${angle}deg)`, width, height }}
        >
          <span>{i % gap === 0 && `${i}`.padStart(2, '0')}</span>
        </div>
      );
    });
    return (
      <div className={classnames(styles.ticks, className)}>
        <div style={{ transform: `rotate(${rotate}deg)`}}>{ticks}</div>
      </div>
    );
  };

  return (
    <div className={styles.content}>
      <div className={styles.clock}>
        <DrawTicks className={styles.hour} total={12} rotate={hours} gap={1} />
        <DrawTicks className={styles.minute} total={60} rotate={minutes} />
        <DrawTicks className={styles.second} total={60} rotate={seconds} />
      </div>
    </div>
  );
}
