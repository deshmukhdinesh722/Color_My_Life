import { Checkbox } from '@/components/ui/checkbox'
import { filterOptions } from '@/config'
import { Label } from '@radix-ui/react-label'
import React, { Fragment } from 'react'

function ProductFilter({filter,handleFilter}) {
    return (
        <div className='bg-background rounded-lg shadow-sm'>
            <div className="p-4 border-b">
                <h2 className='text-2xl font-extrabold'> Filters</h2>
                </div> 
            <div className="p-4 space-y-4">
                {
                    Object.keys(filterOptions).map(key=>
                        <Fragment>
                            <div>
                                <u><h3 className='text-orange-950 text-xl font-extrabold '>
                                    {key}
                                </h3></u>
                                <div className="grid gap-2 mt-2">
                                    {
                                        filterOptions[key].map(option=>
                                            <Label className='flex items-center gap-2 font-normal'>
                                                <Checkbox 
                                                checked={
                                                    filter && Object.keys(filter).length > 0 && filter[key] && filter[key].indexOf(option.id) > -1
                                                }
                                                 onCheckedChange={()=>handleFilter(key,option.id)}/>
                                                {option.label}
                                               
                                            </Label>
                                        )
                                    }
                                </div>
                            </div>
                        </Fragment>
                    )
                }
            </div>

        </div>
    )
}

export default ProductFilter
