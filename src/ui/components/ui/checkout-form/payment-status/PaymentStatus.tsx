import Link from 'next/link';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { CartItem as CartItemType } from "@/domain/entities/cart";


type PaymentStatusProps = {
  status: 'completed' | 'failed' | 'pending';
  buttonText: string;
  buttonHref: string;
  confirmationNumber?: string;
  items?: CartItemType[];
};

export default function PaymentStatus({
  status,
  buttonText,
  buttonHref,
  confirmationNumber,
  items,
}: PaymentStatusProps) {
  const iconClass = 'h-20 w-20 mx-auto mb-4';
  const totalAmount = items?.reduce((acc, item) => acc + item.price_data.unit_amount * item.quantity, 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-lg">
        {status === 'completed' ? (
          <AiOutlineCheckCircle className={`${iconClass} text-green-500`} />
        ) : (
          <AiOutlineCloseCircle className={`${iconClass} text-red-500`} />
        )}

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{ status === 'completed' ? "¡Pago exitoso!" : "¡Oops Hubo un error en el pago!" }</h1>
        <p className="text-gray-600 mb-4">{status === 'completed' ? "Tu transacción fue procesada correctamente." : "Tu transacción no fue procesada correctamente"}</p>

        {confirmationNumber && (
          <p className="text-gray-800 font-semibold mb-4">
            Número de confirmación: {confirmationNumber}
          </p>
        )}

        {items && (
          <div className="text-left mb-6">
            <h2 className="font-semibold mb-2">Resumen de la transacción:</h2>
            <ul className="text-gray-600">
              {items.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>
                    {item.price_data.product_data.name} x{item.quantity}
                  </span>
                  <span>${(item.price_data.unit_amount * item.quantity).toFixed(2)}</span>
                </li>
              ))}
              <li className="flex justify-between font-bold border-t pt-2 mt-2">
                <span>Total:</span>
                <span>${totalAmount?.toFixed(2)}</span>
              </li>
            </ul>
          </div>
        )}

        <Link
          href={buttonHref}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
