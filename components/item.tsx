import Link from 'next/link'
import IconHeartSolid from './icons/heartSolid'

interface ItemProps {
  title: string
  id: number
  price: number
  hearts: number
}

export default function Item({ title, price, hearts, id }: ItemProps) {
  return (
    <Link href={`/products/${id}`}>
      <a className="flex px-4 pt-5 cursor-pointer justify-between">
        <div className="flex space-x-4">
          <div className="w-20 h-20 bg-gray-400 rounded-md" />
          <div className="pt-2 flex flex-col">
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            <span className="font-medium mt-1 text-gray-900">${price}</span>
          </div>
        </div>
        <div className="flex space-x-2 items-end justify-end">
          <div className="flex space-x-0.5 items-center text-sm  text-orange-600">
            <IconHeartSolid />
            <span>{hearts}</span>
          </div>
        </div>
      </a>
    </Link>
  )
}
