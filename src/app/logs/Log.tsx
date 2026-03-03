import styles from "./Log.module.css";
import type { LogItem } from "./LogsLayout";

function Log(props: { log: LogItem }) {
  const {
    title,
    subtitle,
    creator,
    date,
    descriptionTitle,
    description,
    tags,
  } = props.log;

  return (
    <div className={styles.logContainer}>
      <div className={styles.logHeader}>
        <h3 className={styles.logTitle}>{title}</h3>
        <p className={styles.logSubtitle}>{subtitle}</p>
        <p className={styles.logCreator}>{creator}</p>
        <p className={styles.logDate}>{date}</p>
      </div>

      <div className={styles.logImage} />

      <div className={styles.logFooter}>
        <h5 className={styles.logDescriptionTitle}>{descriptionTitle}</h5>

        <p className={styles.logDescription}>{description}</p>

        <ul className={styles.logTags}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Log;
