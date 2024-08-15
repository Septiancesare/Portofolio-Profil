import React from "react";

const Academic = () => {
  return (
    <div
      className="min-h-full bg-gradient-to-tl from-slate-800 via-black to-slate-900  p-4"
      id="academic"
    >
      <div className="flex justify-center text-center text-slate-200 font-bold text-2xl p-3 glow-text tracking-wider">
        <h2>Academic Record</h2>
      </div>
      <div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="cyan"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end max-w-md">
              <time className="font-mono italic">2010-2016</time>
              <div className="text-lg font-black ">
                Elementary School 4 Purwodadi
              </div>
              I attended Elementary School 4 Purwodadi for elementary school,
              where I was an active participant in various competitions. I
              thoroughly enjoyed those memorable years, filled with learning,
              friendships, and achievements.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="cyan"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 max-w-md">
              <time className="font-mono italic">2016 - 2019</time>
              <div className="text-lg font-black">
                Junior High School 1 Purwodadi
              </div>
              I attended Junior High School 1 Purwodadi for middle school, where
              I was active in organizations like Gardapara (Flag-Raising Squad)
              and eagerly participated in school events. My proudest achievement
              was ranking 5th best in the parallel class during the School
              Exams.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="cyan"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end max-w-md">
              <time className="font-mono italic">2019 - 2022</time>
              <div className="text-lg font-black">
                Senior High School 1 Purwodadi
              </div>
              I attended Senior High School 1 Purwodadi, but my activities were
              limited due to the COVID-19 pandemic, leading to 1.5 years of
              online learning. Despite this, I stayed active in KIR (Youth
              Scientific Group) and participated in several Astronomy Science
              Olympiads.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="cyan"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10 max-w-md">
              <time className="font-mono italic">2022 - Now</time>
              <div className="text-lg font-black">Sebelas Maret University</div>
              I'm currently studying Informatics and Computer Engineering
              Education at Universitas Sebelas Maret Surakarta. Here, I've
              gained valuable skills in teamwork, communication, networking,
              software development, and multimedia, which have deepened my
              understanding of IT and education.
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Academic;
