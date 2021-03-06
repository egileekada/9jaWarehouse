import { Input, Select, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import ReuseableUserModal from './modal/ReuseableUserModal';

const Information = [
    {
      name: 'Limmer makeover',
      email: 'Jamie@emailapp.com',
      date: 'March 12, 2021',
      time: '05:09:01 PM', 
    },
    {
      name: 'Limmer makeover',
      email: 'Jamie@emailapp.com',
      date: 'March 12, 2021',
      time: '05:09:01 PM', 
    },
    {
      name: 'Limmer makeover',
      email: 'Jamie@emailapp.com',
      date: 'March 12, 2021',
      time: '05:09:01 PM', 
    },
    {
      name: 'Limmer makeover',
      email: 'Jamie@emailapp.com',
      date: 'March 12, 2021',
      time: '05:09:01 PM', 
    },
    {
      name: 'Limmer makeover',
      email: 'Jamie@emailapp.com',
      date: 'March 12, 2021',
      time: '05:09:01 PM', 
    },
]

export default function ArchivedVendors() {

    const navigate = useNavigate();
    const [restoreModal, setRestoreModal] = React.useState(false)
    const [deleteModal, setDeleteModal] = React.useState(false)

    return (
        <div className='w-full py-10 px-10' >
            <div className='w-full flex' >   
                <div onClick={()=> navigate('/dashboard/vendors')} className='w-5 h-5 cursor-pointer mr-4 rounded-full flex border-2 border-black justify-center mt-1 items-center' >
                    <IoIosArrowBack size='20px' />
                </div>
                <div className=''>
                    <p style={{fontSize: '20px'}} className='font-Graphik-Medium'>Archived Vendors</p>
                    <p style={{color: '#8A8A8A'}} className='text-sm font-Graphik-Regular' >Showing customers with deactivated profiles. Data is deleted after 60 days</p>
                </div> 
            </div> 
            <div className='w-full flex items-center my-12' > 
                <div className='w-full flex items-center'>
                    <Input  className='font-Graphik-Regular mx-2' fontSize='14px' backgroundColor='#FBFBFB' placeholder='Search???' />
                    
                    <p style={{fontSize: '14px'}} className=' ml-10 font-Graphik-Medium mx-2'>Filter</p>
                    <Select className='font-Graphik-Regular mx-2' fontSize='14px' backgroundColor='#FBFBFB' placeholder='Alphabetically'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                <button style={{backgroundColor: '#1A8F85'}} className='px-8 py-3 font-Graphik-Regular text-sm text-white rounded-md ml-8' >Apply</button>
                </div>
            </div>
            <div className='bg-white w-full py-6' >

                <Table variant='unstyled' >
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                        <Tr className='font-Graphik-Medium text-sm' >
                            <Th>S/N</Th>
                            <Th>VENDOR NAME</Th> 
                            <Th>VENDOR EMAIL</Th> 
                            <Th>SIGN UP DATE</Th> 
                            <Th>SIGN UP TIME</Th> 
                            <Th>ACTION</Th> 
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Information.map((item, index)=> {
                            return(
                                <Tr className='font-Graphik-Regular text-sm' key={index} >
                                    <Td>{index+1}</Td>
                                    <Td>{item.name}</Td>
                                    <Td>{item.email}</Td>
                                    <Td>{item.date}</Td>
                                    <Td>{item.time}</Td>
                                    <Td className='flex items-center justify-between' >
                                        <svg onClick={()=> setDeleteModal(true)} className='mx-2 cursor-pointer' id="Iconly_Bold_Delete" data-name="Iconly/Bold/Delete" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15">
                                            <g id="Delete">
                                                <path id="Delete-2" data-name="Delete" d="M3.991,14.971a2.233,2.233,0,0,1-2.28-2.12c-.244-2.135-.65-7.183-.658-7.234A.58.58,0,0,1,1.2,5.2a.56.56,0,0,1,.407-.176H12.4A.573.573,0,0,1,12.8,5.2a.546.546,0,0,1,.141.419c0,.051-.414,5.106-.651,7.234a2.236,2.236,0,0,1-2.33,2.12C8.956,14.993,7.972,15,7,15,5.975,15,4.968,14.993,3.991,14.971ZM.555,3.819A.557.557,0,0,1,0,3.268V2.983a.552.552,0,0,1,.555-.551H2.823a.989.989,0,0,0,.965-.761l.118-.512A1.536,1.536,0,0,1,5.394,0H8.606a1.536,1.536,0,0,1,1.48,1.123l.127.547a.988.988,0,0,0,.965.762h2.268A.552.552,0,0,1,14,2.983v.285a.557.557,0,0,1-.554.551Z" transform="translate(0)" fill="#200e32"/>
                                            </g>
                                        </svg>
                                        <img onClick={()=> setRestoreModal(true)} className='cursor-pointer' width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/48/000000/settings-backup-restore.png"/> 
                                        <svg onClick={()=> navigate('/dashboard/vendors/profile')} className='mx-2 cursor-pointer' id="Iconly_Bold_Show" data-name="Iconly/Bold/Show" xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12">
                                            <g id="Show">
                                                <path id="Show-2" data-name="Show" d="M7.493,12C4.4,12,1.611,9.836.044,6.211a.543.543,0,0,1,0-.429C1.609,2.161,4.394,0,7.493,0H7.5a6.98,6.98,0,0,1,4.3,1.534,10.676,10.676,0,0,1,3.154,4.248.543.543,0,0,1,0,.429C13.389,9.836,10.6,12,7.5,12ZM4.573,6A2.923,2.923,0,1,0,7.5,3.091,2.918,2.918,0,0,0,4.573,6Zm1.1,0a1.865,1.865,0,0,1,.037-.356h.036a1.5,1.5,0,0,0,1.5-1.44A1.492,1.492,0,0,1,7.5,4.18,1.814,1.814,0,1,1,5.672,6Z" fill="#200e32"/>
                                            </g>
                                        </svg>
                                    </Td>
                                </Tr> 
                            )
                        })}
                    </Tbody> 
                </Table>
            </div>

            <div className='flex items-center my-12' >
                <p style={{fontSize: '14px'}} className='font-Graphik-Regular'>Showing <span className='font-Graphik-SemiBold' >1-10</span> from <span className='font-Graphik-SemiBold' >46 data</span></p>
                <div className='flex items-center ml-auto' >
                    <div style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' > 
                        <IoIosArrowBack color='#878787' />
                    </div>
                    <div style={{borderColor: '#C2C2C2'}} className='w-auto h-10 font-Graphik-Bold rounded-lg flex border mx-2'> 
                        <div style={{backgroundColor: '#3E3F41'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                            1
                        </div>
                        <div style={{color: '#202020'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                            2
                        </div>
                        <div style={{color: '#202020'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                            3
                        </div>
                        <div style={{color: '#202020'}} className='w-10 cursor-pointer h-10 rounded-lg flex text-white justify-center items-center' >
                            4
                        </div>
                    </div>
                    <div style={{borderColor: '#C2C2C2'}} className='w-10 h-10 rounded-lg cursor-pointer flex justify-center items-center border' >
                        <IoIosArrowForward color='#878787' />
                    </div>
                </div>
            </div>

        {restoreModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <ReuseableUserModal header='Restore User' body='You are about to restore a user???s data' button='Restore User' close={setRestoreModal} />
                    </div> 
                    <div className="opacity-25 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 

        {deleteModal ? 
            (
                <>
                    <div className="h-auto flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed pb-4 px-4 inset-0 z-50 outline-none focus:outline-none"> 
                        <ReuseableUserModal header='Delete Vendor' body='You are about to delete a user???s data' button='Delete User' close={setDeleteModal} />
                    </div> 
                    <div className="opacity-25 fixed flex flex-1 inset-0 z-40 bg-black"/>
                </>
            ) : null} 
        </div>
    )
}
