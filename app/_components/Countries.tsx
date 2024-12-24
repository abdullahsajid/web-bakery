import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Countries = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='mb-2'>
                    Top Countries by Sells
                </CardTitle>
                <Separator />
                <div className='flex justify-between items-center'>
                    <CardTitle className='text-[35px]'>
                        358K
                    </CardTitle>
                    <div className='flex items-center gap-x-2'>
                        <span className='text-muted-foreground'>+20%</span>
                        <span className='text-green-500'>from last month</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col gap-y-5'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <Avatar className='border-2'>
                                <AvatarImage src='https://flagpedia.net/data/flags/h80/pk.png' alt='PK' />
                                <AvatarFallback>PK</AvatarFallback>
                            </Avatar>
                            <span className='font-semibold'>Pakistan</span>
                        </div>
                        <span className='font-semibold'>120K</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <Avatar className='border-2'>
                                <AvatarImage src='https://flagpedia.net/data/flags/h80/us.png' alt='UK' />
                                <AvatarFallback>UK</AvatarFallback>
                            </Avatar>
                            <span className='font-semibold'>United Kingdom</span>
                        </div>
                        <span className='font-semibold'>80K</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <Avatar className='border-2'>
                                <AvatarImage src='https://flagpedia.net/data/flags/h80/ca.png' alt='CA' />
                                <AvatarFallback>CA</AvatarFallback>
                            </Avatar>
                            <span className='font-semibold'>Canada</span>
                        </div>
                        <span className='font-semibold'>60K</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <Avatar className='border-2'>
                                <AvatarImage src='https://flagpedia.net/data/flags/h80/de.png' alt='DE' />
                                <AvatarFallback>DE</AvatarFallback>
                            </Avatar>
                            <span className='font-semibold'>Germany</span>
                        </div>
                        <span className='font-semibold'>40K</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <Avatar className='border-2'>
                                <AvatarImage src='https://flagpedia.net/data/flags/h80/fr.png' alt='FR' />
                                <AvatarFallback>FR</AvatarFallback>
                            </Avatar>
                            <span className='font-semibold'>France</span>
                        </div>
                        <span className='font-semibold'>30K</span>
                    </div>
                </div>
            </CardContent>
        </Card>
  )
}

export default Countries
