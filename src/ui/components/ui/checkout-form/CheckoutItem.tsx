import Image from "next/image";

type CheckoutItemProps = {
	id: string;
	name: string;
	currency: string;
	quantity: number;
	unitAmount: number;
	image?: string;
};


export const CheckoutItem = ({ id, name, currency, quantity, unitAmount, image }: CheckoutItemProps) => (
	<div key={id} className="flex justify-between items-center py-2">
		<div className="flex items-center gap-3">
			{image && (
				<Image
					src={image}
					alt={name}
					width={100}
					height={100}
					className="w-10 h-10 object-cover rounded-md border"
				/>
			)}
			<div>
				<p className="font-medium">
					{name} x{quantity}
				</p>
				<p className="text-sm text-gray-500 uppercase">{currency}</p>
			</div>
		</div>
		<p className="font-semibold">
			${((unitAmount * quantity)).toFixed(2)}
		</p>
	</div>
);

