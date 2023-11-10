import styles from "./functions.module.scss";

import { functions } from "./functions";

const Functions = () => {
  return (
    <div className={styles.functions}>
      <h3 data-aos="fade-left" data-aos-duration="1500">
        Experiência
      </h3>
      <div className={styles.contentFunctions} data-aos="fade-right" data-aos-duration="1500">
        {functions.map((item, index) => (
          <div className={styles.contentFunction} key={index}>
            <div className={styles.titleFunction}>
              <h4>{item.institution}</h4>
              <span>{item.period}</span>
              {item.positions.map((position, index) => (
                <div className={styles.contentPosition} key={index}>
                  <h5>{position.position}</h5>
                  <p>{position.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Functions;
