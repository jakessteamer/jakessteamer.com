/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-nested-ternary */
import { NextSeo, ArticleJsonLd } from 'next-seo';
import siteMetadata from '../data/siteMetadata.json';

// Shared by all pages
export const SEO = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    canonical: siteMetadata.canonical,
    openGraph: {
        type: siteMetadata.openGraphType,
        locale: siteMetadata.language,
        url: siteMetadata.siteUrl,
        siteName: siteMetadata.openGraphSiteName,
        title: siteMetadata.openGraphTitle,
        description: siteMetadata.openGraphDescription,
        images: [
            {
                url: `${siteMetadata.siteUrl}${siteMetadata.openGraphImage}`,
                alt: siteMetadata.openGraphTitle,
                width: 1200,
                height: 600
            }
        ]
    },
    additionalLinkTags: [
        {
            rel: 'icon',
            href: 'https://jakessteamer.com/favicons/favicon.ico'
        },
        {
            rel: 'apple-touch-icon',
            href: 'https://jakessteamer.com/favicons/apple-touch-icon.png',
            sizes: '180x180'
        },
        {
            rel: 'manifest',
            href: '/manifest.json'
        },
        {
            name: 'google-site-verification',
            content: 'r76I3SQQnXCYpkUZMnW9Q3EY-9ExRHlMInOmTeAVxwg'
        }
    ]
};

/**
 *
 * @param {string} title = <title></title>
 * @returns <head></head> html
 */
export const PageSeo = ({ title, description, url }) => {
    return (
        <NextSeo
            title={title ? title : `${siteMetadata.title}`}
            description={description ? description : `${siteMetadata.description}`}
            canonical={url}
            openGraph={{
                url,
                title,
                description
            }}
        />
    );
};

export const BlogSeo = ({ title, summary, date, lastmod, url, tags, images = [] }) => {
    const publishedAt = new Date(date).toISOString();
    const modifiedAt = new Date(lastmod || date).toISOString();
    const imagesArr =
        images.length === 0
            ? [siteMetadata.openGraphImage]
            : typeof images === 'string'
            ? [images]
            : images;

    const featuredImages = imagesArr.map((img) => {
        return {
            url: `${siteMetadata.siteUrl}${img}`,
            alt: title
        };
    });

    return (
        <>
            <NextSeo
                title={title ? title : `${siteMetadata.title}`}
                description={summary}
                canonical={url}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: publishedAt,
                        modifiedTime: modifiedAt,
                        authors: [`${siteMetadata.author}`],
                        tags
                    },
                    url,
                    title,
                    description: summary,
                    images: featuredImages
                }}
            />
            <ArticleJsonLd
                authorName={siteMetadata.author}
                dateModified={modifiedAt}
                datePublished={publishedAt}
                description={summary}
                images={featuredImages}
                publisherName={siteMetadata.author}
                title={title}
                url={url}
            />
        </>
    );
};
