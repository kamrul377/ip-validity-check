import React from 'react'
import { Icon, Table } from 'semantic-ui-react'


const TableIp = () => {
    return (
        <div className='mt-6'>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>SL NO</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>IP Address</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    <Table.Row>
                        <Table.Cell>01 </Table.Cell>
                        <Table.Cell>public</Table.Cell>
                        <Table.Cell>192.169.10.2</Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>


        </div>
    )
}

export default TableIp