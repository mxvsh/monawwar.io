import React from 'react'

function AboutMe() {
  return (
    <div className="max-w-2xl">
      <p className="text-slate-400 font-bold">About me</p>

      <p className="text-slate-600 mt-2">
        Hey there! I'm Monawwar Abdullah, a software engineer based in India. I
        started my journey as a developer in{' '}
        <b className="text-slate-500">2017</b>. I like to build online tools,
        dashboards, and write servers. I like to explore new technologies and
        learn new things.
      </p>

      <p className="text-slate-600 mt-4">
        I have worked on several types of applications, from{' '}
        <b className="text-slate-500">web</b> to{' '}
        <b className="text-slate-500">mobile</b> and{' '}
        <b className="text-slate-500">desktop</b> applications.
      </p>

      <p className="text-slate-600 mt-4">
        You can find my projects below, for any queries, message me on{' '}
        <a
          href="https://twitter.com/monawwarx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 font-bold"
        >
          Twitter
        </a>
        .
      </p>

      <p className="text-slate-600 mt-4 hover:text-blue-400 transition duration-300">
        Thanks!
      </p>
    </div>
  )
}

export default AboutMe
