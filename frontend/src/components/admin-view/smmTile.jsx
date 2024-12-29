import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Button } from '../ui/button'

function SmmTile({smm,setOpenCreateDialog}) {
    return (
        <Table className=''>
      
        <TableBody>
         
        <TableRow>
                  <TableCell>
               { smm.dailyCharges}
                  </TableCell>
                  <TableCell>
              {  smm.monthlyCharges}
                  </TableCell> 
                  <TableCell>
                {smm.maxReach}
                  </TableCell>
                  <TableCell>
                    <div className='flex  gap-2'>  
            <Button  variant='outline' >
               Delete
            </Button>
            <Button  variant='outline' >
                Update 
            </Button></div>
               
                  </TableCell>
              </TableRow>
            
          
            
        
        </TableBody>
      </Table>
    )
}

export default SmmTile
