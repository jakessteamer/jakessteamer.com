import React from "react";

export default function TableOfContents() {
  return (
    <div className="relative w-full">
      <div className="table-of-contents">
        <h3>Table of Contents</h3>
        <ul>
          <li className="table-of-contents__content-heading">
            <a href="#toc-installation-and-setup">Installation and Setup</a>
          </li>
          <li className="table-of-contents__content-heading">
            <a href="#toc-static-data-fetching">Static Data Fetching</a>
          </li>
          <li className="table-of-contents__content-heading">
            <a href="#toc-incremental-static-regeneration">
              Incremental Static Regeneration
            </a>
          </li>
          <li className="table-of-contents__content-heading">
            <a href="#toc-server-side-rendering">Server Side Rendering</a>
          </li>
          <li className="table-of-contents__content-heading">
            <a href="#toc-api-routes">API Routes</a>
          </li>
          <li className="table-of-contents__content-heading">
            <a href="#toc-deploy-to-vercel">Deploy to Vercel</a>
          </li>
          <li className="table-of-contents__content-heading">
            <a href="#toc-conclusion">Conclusion</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
