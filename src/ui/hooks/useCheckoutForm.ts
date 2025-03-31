import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutSchema, CheckoutFormData } from "@/application/schema/checkoutSchema";
import { CheckoutRequest } from '@/domain/entities/checkoutRequest';
import { makeCheckoutUseCase } from '@/application/factories/makeCheckoutUseCase';
import { cartItemsMock } from '@/mock/productsData.mock'; // Asegúrate de que esto está bien para producción
import { useRouter } from 'next/navigation';
import { useCheckout } from "@/ui/context/CheckoutContext";

export const useCheckoutForm = () => {
    const router = useRouter();
    const { setResponseData } = useCheckout();
    const checkoutUseCase = makeCheckoutUseCase();

    const {
        register,
        handleSubmit,
        setValue,
        trigger,
        formState: { errors, isValid, isSubmitting },
    } = useForm<CheckoutFormData>({
        resolver: zodResolver(CheckoutSchema),
        mode: "onChange",
    });

    const onSubmit = async (formData: CheckoutFormData) => {
        const total = cartItemsMock.reduce((acc, item) => acc + item.price_data.unit_amount * item.quantity, 0);

        const data: CheckoutRequest = {
            amount: total,
            currency: formData.currency,
            customerInformation: {
                firstName: formData.name,
                lastName: "Simpson",
                middleName: "Jay",
                email: formData.email,
                phone1: "5511223344",
                city: "Springfield",
                address1: "742 Evergreen Terrace",
                postalCode: "12345",
                state: "New York",
                country: "US",
                ip: "123.123.123.123",
            },
            noPresentCardData: {
                cardNumber: formData.cardNumber,
                cardholderName: formData.name,
                cvv: formData.cvc,
                expirationMonth: formData.expDate.split("/")[0],
                expirationYear: formData.expDate.split("/")[1],
            }
        };

        const response = await checkoutUseCase.checkout(data);
        setResponseData(response);
        router.push('/checkout/success');
    };

    return {
        register,
        handleSubmit,
        setValue,
        trigger,
        errors,
        isValid,
        isSubmitting,
        onSubmit,
    };
};