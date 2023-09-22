type Country = {
    id: number;
    name: string;
    habitants: number;
    habPercentageWithTotal: number;
  };

interface MyComponentProps {
    data: Country[];
    isLoading: boolean;
}

export default function Table({ data, isLoading }: MyComponentProps) {
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>

                    <th scope="col" className="px-6 py-3">
                        Nombre
                    </th>

                    <th scope="col" className="px-6 py-3">
                        Población
                    </th>

                    <th scope="col" className="px-6 py-3">
                        % con Población Total
                    </th>
                </tr>
            </thead>
            <tbody>
                {isLoading && <p className='text-center'>Is loading...</p>}
                {data?.map(u => (
                    <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                        <td className="px-6 py-4">
                            {u.id}
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {u.name}
                        </th>
                        <td className="px-6 py-4">
                            {u.habitants}
                        </td>
                        <td className="px-6 py-4">
                            {u.habPercentageWithTotal}
                        </td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    );
};