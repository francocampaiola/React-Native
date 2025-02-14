export const BasicTypes = () => {
    const name: string = 'Franco'
    const age: number = 27
    const isActive: boolean = true

    return (
        <>
            <h3>Tipos básicos</h3>
            {name} - {age} - {isActive ? 'Activo' : 'Inactivo'}
        </>
    )
}
