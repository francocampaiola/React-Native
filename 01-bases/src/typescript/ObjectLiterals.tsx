export const ObjectLiterals = () => {

    interface Person {
        age: number
        firstName: string
        lastName: string
        address: Address
    }

    interface Address {
        country: string
        houseNo: number
    }

    const person: Person = {
        age: 27,
        firstName: 'Franco',
        lastName: 'Campaiola',
        address: {
            country: 'Argentina',
            houseNo: 17
        }
    }

    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    {JSON.stringify(person, null, 2)}
                </pre>
            </code>
        </>
    )
}
