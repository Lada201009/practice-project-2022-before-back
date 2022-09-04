import React from 'react';
import styles from '';
import articles from './articles.json';
import CONSTANTS from './../../constants';

function ArticlesRegList() {
    return(
        <div className={styles.articlesMainContainer}>
        </div>
    )
}

export default ArticlesRegList;

/*
articlesMainContainer, ColumnContainer
headerArticle article

           <div className={styles.headerArticle}>
              I have other questions! How
              can I get in touch with
              Squadhelp?
            </div>
            <div className={styles.article}>
              Check out our
              {' '}
              <span className={styles.orangeSpan}>FAQs</span>
              {' '}
              or
              send us a
              <span
                className={styles.orangeSpan}
              >
message
              </span>
              . For assistance
              with launching a contest,
              you can also call us at (877) 355-3585 or schedule a
              <span
                className={styles.orangeSpan}
              >
Branding Consultation
              </span>
            </div>
          </div>
        </div>
 */