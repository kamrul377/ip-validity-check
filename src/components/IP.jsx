import React, { useState } from 'react';
import TableIp from '../components/TableIp'

const IPAddressInput = () => {
    const [ipAddress, setIPAddress] = useState('');
    const [isValidIP, setIsValidIP] = useState(true);
    const [subnetMask, setSubnetMask] = useState("")

    const handleInputChange = (event) => {
        const { value } = event.target;

        // Regular expression for IPv4 address validation
        const ipRegex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

        const validIP = ipRegex.test(value);

        setIPAddress(value);
        setIsValidIP(validIP);
        handleSubnet()
    };

    const handleSubnet = () => {
        const subnet = ipAddress.split('.')
        if (subnet[0] >= 0 && subnet[0] <= 126) {
            setSubnetMask("255.0.0.0")
        } else if (subnet[0] >= 128 && subnet[0] <= 191) {
            setSubnetMask("255.255.0.0")
        } else if (subnet[0] >= 192 && subnet[0] <= 223) {
            setSubnetMask("255.255.255.0")
        }

        else {
            setSubnetMask("")
        }
    }

    // console.log(ipAddress)

    return (
        <>
            <div className='bg-white p-8 rounded h-fit'>
                <h1 className='text-indigo-950 font-bold text-center text-4xl'>IP :)</h1>
                <input className='w-96 rounded text-xl px-4 py-3 mt-4 outline-none border '
                    type="text"
                    placeholder='ipv4: '
                    value={ipAddress}
                    onChange={handleInputChange}
                    style={{ borderColor: isValidIP ? 'blue' : 'red' }}
                />
                {/* {!isValidIP && <p style={{ color: 'red' }}>Invalid IP address</p>} */}
                <div>
                    {
                        !isValidIP && ipAddress.length > 0 && <p className={`text-red-500 text-sm text-right`}>Invalid IP address</p>
                    }
                </div>

                <div>
                    <p className='text-sm text-slate-600 my-4'>Subnet Mask: {isValidIP && subnetMask} </p>
                </div>


                <div className='bg-white py-3 relative'>
                    <input className='bg-blue- w-2/6 ml-auto rounded p-1 absolute top-2 right-0 border text-slate-700 focus:outline-none' placeholder='00' type="number" name="" id="" />

                    <div className='mt-10 duration-300'>
                        <button className='bg-gradient-to-tr from-cyan-500 to-pink-500 hover:from-cyan-700 hover:to-blue-400 duration-300 px-4 py-2 rounded text-white text-sm'>Generate Host</button>
                    </div>

                    <TableIp />

                </div>



            </div>

        </>
    );
};

export default IPAddressInput;
