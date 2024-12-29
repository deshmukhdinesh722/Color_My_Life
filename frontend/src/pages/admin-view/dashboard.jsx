import React, { useEffect } from 'react'
import abc from '../../assets/abc.png'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsersAdmin } from '@/store/cartSlice'
function AdminDashboard() {

    const {userList}=useSelector(state=> state.userCartSlice)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(fetchAllUsersAdmin()).then((data)=>{
            console.log(data);
            
        })
    },[dispatch])
    return (
        <>
        <div className='justify-items-center'>
            <img src={abc} alt="abc" className='lg:w-[400px] lg:h-[400px] w-[250px] h-[250px]' />
            <div >
                <p className="font-semibold text-center text-cyan-950 text-2xl">
                    PRANITA PAWASKAR
                </p>
                <p className="font-semibold text-center text-cyan-950 text-xl mb-10">
                   (ADMIN & OWNER)
                </p>
               
            </div>
                <div className="flex w-full gap-5 text-center">
                   <p className="font-semibold">
                    TOTAL USERS : 
                   </p>
                   <p>
                    {userList?.length}
                   </p>

                </div>
            <Table>
                <TableHeader >
                    <TableHead >
                        User Name
                    </TableHead>
                    <TableHead>
                        User Id
                    </TableHead>
                    <TableHead>
                        Email Id
                    </TableHead>
                </TableHeader>
                <TableBody>
                    {
                        userList?
                        userList.map(item=>
                            <TableRow>
                            <TableCell>
                                {item.userName}
                            </TableCell>
                            <TableCell>
                                {item._id}
                            </TableCell>
                            <TableCell>
                                {item.email}
                            </TableCell>
                        </TableRow>
                        )
                 :<>USERS NOT FOUND</>
                   }  
                </TableBody>
            </Table>
        </div>
        </>
    )
}

export default AdminDashboard