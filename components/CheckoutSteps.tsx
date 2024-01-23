const CheckoutSteps = ({ current = 0 }) => {
  return (
    <ul className="steps steps-vertical lg:steps-horizontal w-full mt-4">
      {[
        'Registro de usuario',
        'Dirección de entrega',
        'Método de pago',
        'Enviar Orden',
      ].map((step, index) => (
        <li
          key={step}
          className={`step
           ${index <= current ? 'step-primary' : ''}
           `}
        >
          {step}
        </li>
      ))}
    </ul>
  )
}
export default CheckoutSteps
