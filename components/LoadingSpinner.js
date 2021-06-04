import React from "react";

export default function LoadingSpinner() {
    return (
        <div className="loader-container">
            <div className="loader" />
            <span className="loading-text">"Loading ..."</span>
        </div>
    );
}
