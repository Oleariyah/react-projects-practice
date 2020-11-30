import React, { useState, useEffect } from "react";
import "../styles/Progressbar.css";

const radius = 80;
const stroke = 3;

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress !== 100) {
      setProgress(progress + 1);
    }
  }, [progress]);

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="my-4">
      <h1>Progress Bar</h1>
      <hr />
      <div className="container">
        <div className="row my-5">
          <div className="p-5 mr-3">
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="black"
                fill="white"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <text
                textAnchor="middle"
                x="50%"
                y="20%"
                style={{ fontSize: "30" }}
                className="progress-text"
              >
                {`${progress}%`}
              </text>
            </svg>
          </div>
          <div className="p-5 mr-3">
            <svg height={radius * 2} width={radius * 2}>
              <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="70%">
                  <stop offset="10%" stop-color="green" />
                  <stop offset="30%" stop-color="green" />
                  <stop offset="85%" stop-color="orange" />
                </linearGradient>
              </defs>
              <circle
                stroke="url(#linear)"
                fill="white"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                stroke-width={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <text
                textAnchor="middle"
                x="50%"
                y="20%"
                style={{ fontSize: "30" }}
                className="progress-text"
              >
                {`${progress}%`}
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
