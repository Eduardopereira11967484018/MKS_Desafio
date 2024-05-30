import React from 'react'

interface InputQuantityProps {
  value: number
  onAdd: (value: number) => void
  onRemove: (value: number) => void
}

export default function InputQuantity(props: InputQuantityProps) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg w-[110px] 2xl:w-[80px]">
      <div className="relative flex items-center max-w-12">
        <button
          type="button"
          onClick={() => props.onRemove(props.value)}
          className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-l-lg"
        >
          -
        </button>
        <label className="hidden 2xl:block absolute -bottom-2 left-0 text-xs font-medium text-gray-600">
          Qtd:
        </label>
        <input
          type="text"
          value={props.value}
          className="border-x-0 w-8 h-8 2xl:w-6 2xl:h-6 text-center text-xs font-medium text-gray-600 bg-white"
          readOnly
        />
        <button
          type="button"
          onClick={() => props.onAdd(props.value)}
          className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-r-lg"
        >
          +
        </button>
      </div>
    </div>
  )
}