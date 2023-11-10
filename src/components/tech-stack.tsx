import React from 'react'
import { DiJavascript } from 'react-icons/di'

const stack = [
  {
    title: 'JavaScript',
    icon: DiJavascript,
    color: '#F7DF1E',
  },
]

function TechStack() {
  return (
    <div className="max-w-2xl">
      <p className="text-slate-400 font-bold">Tech Stack</p>
      <p className="text-slate-600 mt-2">
        Below is a list of technologies I have worked with:
      </p>

      <div className="mt-8 grid grid-cols-4">
        {stack.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-4 bg-slate-900 rounded-lg shadow-xl gap-2`}
          >
            <item.icon size={32} />
            <p className="text-slate-600 mt-2">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
