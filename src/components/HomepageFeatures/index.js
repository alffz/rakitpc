import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Personal Computer',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Mengapa rakit Personal Computer (PC) ? kan udah ada laptop yang lebih fleksibel ?
        Pc lebih mudah di upgrade dan buat orang-orang yang hobi ngoprek sangat cocok, Spesifikasi
        Pc rakitan dapat disesuaikan.
      </>
    ),
  },
  {
    title: 'Hardware / Perangkat keras',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Perangkat keras adalah bagian dari Pc yang secara fisik dapat disentuh
        seperti Keyboard, Monitor, Ssd dan lain-lain.
      </>
    ),
  },
  {
    title: 'Software / Perangkat Lunak / Aplikasi',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Personal Computer tanpa Software hanyalah seonggok barang yang tak berguna. 
        Operating system (OS) seperti Windows, Linux Ios adalah sebuah Software.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
