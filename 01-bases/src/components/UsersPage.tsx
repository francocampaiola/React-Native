import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";

// https://reqres.in/api/users?page=2

export const UsersPage = () => {

    const { users, nextPage, previousPage } = useUsers()

    return (
        <>
            <table className="w-[500px] bg-black rounded-xl text-white">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UserRow key={user.id} user={user} />
                        ))
                    }
                </tbody>
            </table>
            <div className="flex justify-between w-[500px] mt-2">
                <button onClick={previousPage} className="bg-blue-500 p-2 text-white rounded-xl">
                    Anterior
                </button>
                <button onClick={nextPage} className="bg-blue-500 p-2 text-white rounded-xl">
                    Siguiente
                </button>
            </div>
        </>
    );
};
