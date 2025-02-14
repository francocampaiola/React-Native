import { useForm } from "react-hook-form"

type FormInputs = {
    email: string
    password: string
}

export const FormsPage = () => {
    const { register, handleSubmit } = useForm<FormInputs>(
        {
            defaultValues: {
                email: 'franco@francocampaiola.com',
                password: '123456'
            }
        }
    )

    const onSubmit = (data: FormInputs) => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-4">
                <h3>Formularios</h3>
                <div className="flex flex-col space-y-2 w-[500px]">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 p-2 rounded-xl"
                        {...register('email', { required: true })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 p-2 rounded-xl"
                        {...register('password', { required: true })}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-xl mt-2"
                >
                    Enviar
                </button>
            </form>
        </>
    )
}
