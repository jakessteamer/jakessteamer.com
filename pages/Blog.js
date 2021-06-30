import React from "react";

export default function Blog() {
    return (
        <div className="blogpage-layout w-full max-w-6xl mx-auto">
            <div className="lg:flex">
                <header id="table-of-contents" className="outside_viewport lg:block hidden">
                    <div className="table-of-contents has-init">
                        <div data-js="tableOfContentsDesktop" className="tocify">
                            <ul id="tocify-header0" className="tocify-header">
                                <li
                                    className="tocify-item tocify-focus active"
                                    data-unique="#abstracting-fetch-into-usefetch">
                                    <a href="#abstracting-fetch-into-usefetch">Abstracting Fetch into useFetch()</a>
                                </li>
                            </ul>
                            <ul id="tocify-header1" className="tocify-header">
                                <li className="tocify-item" data-unique="#avoiding-reference-loops">
                                    <a href="#avoiding-reference-loops">Avoiding Reference Loops</a>
                                </li>
                            </ul>
                            <ul id="tocify-header2" className="tocify-header">
                                <li className="tocify-item" data-unique="#useeffect’s-return-error">
                                    <a href="#useeffect’s-return-error">useEffect’s Return Error</a>
                                </li>
                            </ul>
                            <ul id="tocify-header3" className="tocify-header">
                                <li className="tocify-item" data-unique="#handling-errors">
                                    <a href="#handling-errors">Handling Errors</a>
                                </li>
                            </ul>
                            <ul id="tocify-header4" className="tocify-header">
                                <li className="tocify-item" data-unique="#setting-loading-indicators">
                                    <a href="#setting-loading-indicators">Setting Loading Indicators</a>
                                </li>
                            </ul>
                            <ul id="tocify-header5" className="tocify-header">
                                <li className="tocify-item" data-unique="#demonstrating-the-concepts-with-an-app">
                                    <a href="#demonstrating-the-concepts-with-an-app">
                                        Demonstrating the Concepts with an App
                                    </a>
                                </li>
                            </ul>
                            <ul id="tocify-header6" className="tocify-header">
                                <li className="tocify-item" data-unique="#conclusion">
                                    <a href="#conclusion">Conclusion</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="share-modal"
                        className="hidden"
                        role="dialog"
                        aria-labelledby="share-modal-title"
                        aria-modal="true">
                        <div className="mini-dialog-panel">
                            <div className="dialog-header">
                                <span className="close-btn">×</span>
                                <span className="dialog-title" id="share-modal-title">
                                    Share this Tutorial
                                </span>
                            </div>

                            <div className="dialog-body">
                                <h2>Where would you like to share this to?</h2>

                                <div className="social-sharing social-sharing-container">
                                    <ul>
                                        <li className="shareBtn" id="sbTwitter">
                                            <a
                                                href="http://twitter.com/share?text=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook&amp;url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dtwshare"
                                                className="share-icon share-popup"
                                                title="Share on Twitter"
                                                target="_blank"
                                                rel="noreferrer">
                                                <span className="sIcon icon-bird" />
                                            </a>
                                            <a
                                                href="http://twitter.com/share?text=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook&amp;url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dtwshare"
                                                className="share-link share-popup"
                                                title="Share on Twitter"
                                                target="_blank"
                                                rel="noreferrer">
                                                Twitter
                                            </a>
                                        </li>

                                        <li className="shareBtn" id="sbReddit">
                                            <a
                                                href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Drdshare&amp;title=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook"
                                                className="share-icon share-popup"
                                                target="_blank"
                                                title="Share on Reddit"
                                                rel="noreferrer">
                                                <span className="sIcon icon-reddit" />
                                            </a>
                                            <a
                                                href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Drdshare&amp;title=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook"
                                                className="share-link share-popup"
                                                target="_blank"
                                                title="Share on Reddit"
                                                rel="noreferrer">
                                                Reddit
                                            </a>
                                        </li>

                                        <li className="shareBtn" id="sbYC">
                                            <a
                                                href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dhnshare&amp;t=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook"
                                                className="share-icon share-popup"
                                                target="_blank"
                                                title="Submit to Hacker News"
                                                rel="noreferrer">
                                                <span className="sIcon icon-hacker-news" />
                                            </a>
                                            <a
                                                href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dhnshare&amp;t=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook"
                                                className="share-link share-popup"
                                                target="_blank"
                                                title="Submit to Hacker News"
                                                rel="noreferrer">
                                                Hacker News
                                            </a>
                                        </li>

                                        <li className="shareBtn" id="sbFacebook">
                                            <a
                                                className="share-icon share-popup"
                                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dfbshare"
                                                title="Share on Facebook"
                                                target="_blank"
                                                rel="noreferrer">
                                                <span className="sIcon icon-facebook-B" />
                                            </a>
                                            <a
                                                className="share-link share-popup"
                                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dfbshare"
                                                title="Share on Facebook"
                                                target="_blank"
                                                rel="noreferrer">
                                                Facebook
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex-form">
                                    <p className="dialog-text">Share link</p>

                                    <label htmlFor="share-modal-share-link" className="sr-only">
                                        Tutorial share link
                                    </label>
                                    <div className="field">
                                        <input
                                            type="text"
                                            id="share-modal-share-link"
                                            name="share-modal-share-link"
                                            readOnly="readonly"
                                            value="https://www.digitalocean.com/community/tutorials/creating-a-custom-usefetch-react-hook?utm_content=creating-a-custom-usefetch-react-hook&amp;utm_medium=community&amp;utm_source=linkshare"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- algolia universal search --> */}
                    <input type="hidden" id="q-universal-search" value="" />

                    <div
                        id="share-modal"
                        className="hidden"
                        role="dialog"
                        aria-labelledby="share-modal-title"
                        aria-modal="true">
                        <div className="mini-dialog-panel">
                            <div className="dialog-header">
                                <span className="close-btn">×</span>
                                <span className="dialog-title" id="share-modal-title">
                                    Share this Tutorial
                                </span>
                            </div>

                            <div className="dialog-body">
                                <h2>Where would you like to share this to?</h2>

                                <div className="social-sharing social-sharing-container">
                                    <ul>
                                        <li className="shareBtn" id="sbTwitter">
                                            <a
                                                href="http://twitter.com/share?text=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook&amp;url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dtwshare"
                                                className="share-icon share-popup"
                                                title="Share on Twitter"
                                                target="_blank"
                                                rel="noreferrer">
                                                <span className="sIcon icon-bird" />
                                            </a>
                                            <a
                                                href="http://twitter.com/share?text=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook&amp;url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dtwshare"
                                                className="share-link share-popup"
                                                title="Share on Twitter"
                                                target="_blank"
                                                rel="noreferrer">
                                                Twitter
                                            </a>
                                        </li>

                                        <li className="shareBtn" id="sbReddit">
                                            <a
                                                href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Drdshare&amp;title=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook"
                                                className="share-icon share-popup"
                                                target="_blank"
                                                title="Share on Reddit"
                                                rel="noreferrer">
                                                <span className="sIcon icon-reddit" />
                                            </a>
                                            <a
                                                href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Drdshare&amp;title=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook"
                                                className="share-link share-popup"
                                                target="_blank"
                                                title="Share on Reddit"
                                                rel="noreferrer">
                                                Reddit
                                            </a>
                                        </li>

                                        <li className="shareBtn" id="sbYC">
                                            <a
                                                href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dhnshare&amp;t=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook"
                                                className="share-icon share-popup"
                                                target="_blank"
                                                title="Submit to Hacker News"
                                                rel="noreferrer">
                                                <span className="sIcon icon-hacker-news" />
                                            </a>
                                            <a
                                                href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dhnshare&amp;t=Creating%20a%20Custom%20useFetch%28%29%20React%20Hook"
                                                className="share-link share-popup"
                                                target="_blank"
                                                title="Submit to Hacker News"
                                                rel="noreferrer">
                                                Hacker News
                                            </a>
                                        </li>

                                        <li className="shareBtn" id="sbFacebook">
                                            <a
                                                className="share-icon share-popup"
                                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dfbshare"
                                                title="Share on Facebook"
                                                target="_blank"
                                                rel="noreferrer">
                                                <span className="sIcon icon-facebook-B" />
                                            </a>
                                            <a
                                                className="share-link share-popup"
                                                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.digitalocean.com%2Fcommunity%2Ftutorials%2Fcreating-a-custom-usefetch-react-hook%3Futm_content%3Dcreating-a-custom-usefetch-react-hook%26utm_medium%3Dcommunity%26utm_source%3Dfbshare"
                                                title="Share on Facebook"
                                                target="_blank"
                                                rel="noreferrer">
                                                Facebook
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex-form">
                                    <p className="dialog-text">Share link</p>

                                    <label htmlFor="share-modal-share-link" className="sr-only">
                                        Tutorial share link
                                    </label>
                                    <div className="field">
                                        <input
                                            type="text"
                                            id="share-modal-share-link"
                                            name="share-modal-share-link"
                                            readOnly="readonly"
                                            value="https://www.digitalocean.com/community/tutorials/creating-a-custom-usefetch-react-hook?utm_content=creating-a-custom-usefetch-react-hook&amp;utm_medium=community&amp;utm_source=linkshare"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <p>section content</p>
                </section>
                <aside id="related-blog-posts">
                    <p>related</p>
                </aside>
            </div>
        </div>
    );
}
