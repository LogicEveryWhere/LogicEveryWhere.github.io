import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Про сайт',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                Сайт особиста ініціатива інвестора ЖК Great з метою систематизації накопичених знань про ЖК
            </>
        ),
    },
    {
        title: 'Чим корисний',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                Нові інвестори потрапляючи в групу часто задають типові запитання, тут можна спробувати знайти на них відповіді не листаючи історію
            </>
        ),
    },
    {
        title: 'Розроблено з Docusaurus',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                Docusaurus це проект для розробки сайтів
                Розповсюдження за ліцензією <a target="_blank" href="https://github.com/facebook/docusaurus/blob/master/LICENSE">MIT</a>
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="База знань ЖК Great, телеграм ЖК Great, форум ЖК Great">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <p className="hero__subtitle"><i>Даний сайт не є офіційним</i></p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            База знань
                        </Link>&nbsp;&nbsp;
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('blog/')}>
                            Новини
                        </Link>
                    </div>


                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}