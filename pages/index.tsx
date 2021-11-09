import type { NextPage } from 'next'
import { Layout } from 'src/components/Layout'
import { itemsData } from 'src/utils/itemsData'
import GildedRose from 'src/utils/GildedRose'
import { itemsFactory } from 'src/utils/ItemFactory'
import React, { useEffect, useState } from 'react'
import { Button } from 'src/components/Button'

const initialItems = itemsFactory(itemsData)
const gildedRose = new GildedRose(initialItems)

const Home: NextPage = () => {
  const [items, setItems] = useState(gildedRose.getAllItems())
  const [search, setSearch] = useState('')

  const updateItems = () => {
    if (search) {
      setItems(gildedRose.getItemsByName(search))
    } else {
      setItems(gildedRose.getAllItems())
    }
  }

  const updateQuality = () => {
    gildedRose.updateQuality()
    updateItems()
  }

  const onSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    updateItems()
  }, [search])

  return (
    <Layout>

      <div className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Gilded Rose
        </h1>

        <div className="flex space-x-2">
          <Button onClick={updateQuality}>
            Update Quality
          </Button>
          <input className="text-black border-2 border-red-500 rounded px-2" type="text" onChange={onSearch} placeholder="Search Item by name" />
        </div>

        <p className="mt-3 text-2xl">
          Review your inventory and keep track of your items' quality and sell in time.
        </p>



        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {items.map(item => (
            <div key={item.name} className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <p className="mt-4 text-xl">
                Quality: {item.quality}
              </p>
              <p className="mt-4 text-xl">
                Sell in: {item.sellIn}
              </p>
            </div>
          ))}
        </div>
      </div>

    </Layout>
  )
}

export default Home