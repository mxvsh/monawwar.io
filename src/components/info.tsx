import { Card, CardBody, CardHeader } from '@nextui-org/react'
import {
  RiBook3Line,
  RiCodeSLine,
  RiHammerLine,
  RiPaintBrushLine,
} from 'react-icons/ri'

const items = [
  {
    title: 'tools',
    description:
      'I like to build tools that can help others to be more productive and efficient',
    icon: <RiHammerLine />,
  },
  {
    title: 'libs',
    description:
      'I like to build libraries to help other developers to build cool stuffs',
    icon: <RiBook3Line />,
  },
  {
    title: 'ui/ux',
    description:
      'I love to spend time on designing and building beautiful user interfaces',
    icon: <RiPaintBrushLine />,
  },
  {
    title: 'open source',
    description:
      'I like to build open source projects and contribute to other open source projects',
    icon: <RiCodeSLine />,
  },
]

function Info() {
  return (
    <div className="px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <Card
          key={item.title}
          className="rounded-md p-4 bg-content2/40 shadow-md border-1 border-content4/40"
        >
          <CardHeader className="flex-col items-start gap-2 text-default-600/70 pt-6">
            <span className="text-4xl">{item.icon}</span>
            <h1 className="text-2xl pt-4">{item.title}</h1>
          </CardHeader>
          <CardBody className="text-default-600/60">
            <p>{item.description}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default Info
