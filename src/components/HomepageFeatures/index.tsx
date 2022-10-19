import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  
  {
    title: 'Pain points of documentation',
    description: (
      <>
       Not enought time<br />
       lack of consistency<br/>
       outdated or partial<br/>
      </>
    ),
    
  },
  {
    title: 'Workshop',
    description: (
      <>
       Storybook<br />
       storefront = Docusaurus 
      </>
    ),
  },
  {
    title: 'Living Documentation',
    description: (
      <>
       code is the source of truth<br />
       MDX files<br />
       good documentation
      </>
    ),
  }
  
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
