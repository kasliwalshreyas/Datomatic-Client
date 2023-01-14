import { Table } from '@mantine/core';
const InformationTable = ({ data }) => {

    console.log(data);
    const keys = Object.keys(data);
    console.log(keys);

    const conversion = (text) => {
        const result = text.replace(/([A-Z])/g, " $1");
        const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        console.log(finalResult);
        return finalResult;
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Field</th>
                    <th>Information</th>
                </tr>
            </thead>
            <tbody>{
                Object.keys(data).map((key) => (
                    <tr>
                        <td>{conversion(key)}</td>
                        <td>{data[key]}</td>
                    </tr>
                ))
            }</tbody>
        </Table>
    );
}

export default InformationTable;