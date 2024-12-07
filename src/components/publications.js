import React from "react";
import "../styles.css";

const Publications = () => {
    return (
        <section id="publications">
            <h1 className="section-title">Publications</h1>
            <div className="pub-items">
                <div className="pub-container">
                <a href="https://ieeexplore.ieee.org/document/10307265" target="_blank" rel="noreferrer" className="pub-link">S. S. P. Naresh, R. Talasu, D. S. S. P. Venkat, S. K. Korada and B. K. Mohanta, "Real Time Vehicle Tracking using YOLO Algorithm," 2023 14th International Conference on Computing Communication and Networking Technologies (ICCCNT), Delhi, India, 2023, pp. 1-5, doi: 10.1109/ICCCNT56998.2023.10307265.</a>
                </div>
                <div className="pub-container">
                <a href="https://www.linkedin.com/pulse/understanding-working-xgboost-algorithm-problems-venkat-dasari-htble/?trackingId=s3UIs%2FO0SV%2B%2FkAY0VhKZVw%3D%3D" target="_blank" rel="noreferrer" className="pub-link">UNDERSTANDING THE WORKING OF XGBOOST ALGORITHM IN CLASSIFICATION PROBLEMS</a>
                </div>
            </div>
        </section>
    );
  }
  
  export default Publications;