import { Metadata } from 'next'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
  title: 'Historial de pedidos',
}
export default function OrderHistory() {
  return (
    <>
      <h1 className="text-2xl py-2">Historial de pedidos</h1>
      <MyOrders />
    </>
  )
}
