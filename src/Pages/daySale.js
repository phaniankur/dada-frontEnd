import React, { useState } from 'react'
import axios from 'axios'
import Box from '../Components/Library/Box'
import Input from '../Components/InputStyle'
import Button from '../Components/ButtonStyle'
import Loader from '../Components/Loader/Loader'

const DaySale = () => {
    const [moreOptions, setMoreOptions] = useState(false)
    const [staffOptions, setStaffOptions] = useState(false)
    const [loading, setLoading] = useState(false)

    const [response, setResponse] = useState('')

    const [inputData, setInputData] = useState({
        month: '',
        openDate: '',
        expense: '',
        sale: '',
        chickenKg: '',
        chickenCost: '',
        firoz: '',
        sanjeeb: '',
        kajerBou: '',
        gasCost:'',
        gasUseDate: '',
        electricity: '',
        kirana: '',
        coal: ''
    })

    const handleSubmit =()=>{

        const formData = {
            month: inputData.month,
            openDate: inputData.openDate,
            gasUseDate: inputData.gasUseDate,
            gasPrice: inputData.gasCost,
            electricity: inputData.electricity,
            Firoz: inputData.firoz,
            Sanjeeb: inputData.sanjeeb,
            chickenPrice: inputData.chickenCost,
            chickenInKG: inputData.chickenKg,
            coal: inputData.coal,
            dailyExpense: inputData.expense,
            dailySale: inputData.sale,
        }
        console.log(formData)
        setLoading(true)
        axios.post('https://dadabackend.herokuapp.com/daysale/daily', formData)
        .then(res=>{
            setLoading(false)
            setResponse(res.data)
        })
        .catch(error=> {
            console.log(error)
            setResponse('Error')
            setLoading(false)
        })
    }
    return (
        <>
        {
        loading ?
        <Box
            height= '100vh'
            display = 'flex'
            justifyContent = 'center'
            alignItems = 'center'
            flexDirection = 'column'
        >
            <Loader/>
        </Box>
        :
            response === ''?
            <Box
            height= '100vh'
            display = 'flex'
            justifyContent = 'center'
            alignItems = 'center'
            flexDirection = 'column'
            >
            <Box display = 'flex' flexDirection = 'column' justifyContent='center' alignItems = 'center' width='60%'>
                <Box fontWeight='bold'>Month:</Box>
                <select
                style={{
                    backgroundColor: '#2F4858',
                    color: 'white',
                    outline: 0,
                    border: "none",
                    width: "100%",
                    minHeight: "2.5rem",
                    borderRadius: "16px",
                    margin: '0.25rem',
                    textAlign: 'center',}}
                value={inputData.month}
                onChange={
                    (e)=> {setInputData({...inputData, month: e.target.value})}
                }
                >
                    <option value='jan'>January</option>
                    <option value='feb'>February</option>
                    <option value='test1'>Test</option>
                    <option></option>
                </select>
                <Box fontWeight='bold'>Date:</Box>
                <Input
                style={{paddingRight: '1rem', backgroundColor : '#2F4858'}}
                    type='date'
                    variant = 'blackInput'
                    placeholder = 'Expense'
                    value={inputData.openDate}
                    onChange={
                        (e)=> {setInputData({...inputData, openDate: e.target.value})}
                    }

                />
            </Box>
            <Box>
                <Box
                display = 'flex'
                padding = '0.5rem'
                >
                    <Input
                    variant = 'blackInput'
                    placeholder = 'Expense'
                    value={inputData.expense}
                    onChange={
                        (e)=> {setInputData({...inputData, expense: e.target.value})}
                    }
                    />
                    <Input
                    variant = 'blackInput'
                    placeholder = 'Sale'
                    value={inputData.sale}
                    onChange={
                        (e)=> {setInputData({...inputData, sale: e.target.value})}
                    }
                    />
                </Box>
                <Box
                display = 'flex'
                padding = '0.5rem'
                >
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Chicken Kg'
                    value={inputData.chickenKg}
                    onChange={
                        (e)=> {setInputData({...inputData, chickenKg: e.target.value})}
                    }
                    />
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Chicken Price'
                    value={inputData.chickenCost}
                    onChange={
                        (e)=> {setInputData({...inputData, chickenCost: e.target.value})}
                    }
                    />
                </Box>
                {
                    staffOptions?
                    <Box
                    display= 'flex'
                    justifyContent = 'center'
                    onClick={()=> setStaffOptions(!staffOptions)}>Hide Staff Options</Box>
                    :
                    <Box
                    display= 'flex'
                    justifyContent = 'center'
                    onClick={()=> {
                        setStaffOptions(!staffOptions)
                        setMoreOptions(false)
                    }}>Show Staff Options</Box>
                }
                <Box
                transition = 'all 0.5s ease;'
                display = 'flex'
                height = {staffOptions? '10rem': '0rem'}
                flexDirection = 'column'
                justifyContent = 'center'
                alignItems = 'center'
                paddingLeft= '0.5rem'
                paddingRight= '0.5rem'
                overflow = 'hidden'
                >
                    <Input

                    variant = 'blackInput'
                    placeholder = 'Firoz'
                    value={inputData.firoz}
                    onChange={
                        (e)=> {setInputData({...inputData, firoz: e.target.value})}
                    }
                    />
                    <Input
                    variant = 'blackInput'
                    placeholder = 'Sanjeeb'
                    value={inputData.sanjeeb}
                    onChange={
                        (e)=> {setInputData({...inputData, sanjeeb: e.target.value})}
                    }
                    />

                </Box>
            </Box>
            {
               moreOptions?
            <Box
            paddingTop = '1rem'
            cursor = 'auto'
            onClick={()=>setMoreOptions(!moreOptions)}>
                Less
            </Box>
            :
            <Box
            as='text'
            paddingTop = '1rem'

            cursor = 'pointer'
            onClick={()=>{
                setMoreOptions(!moreOptions)
                setStaffOptions(false)

            }}>
                More
            </Box>
            }

            <Box
            display = {moreOptions? 'block': 'none'}

            >
                <Box
                display = 'flex'
                padding = '0.5rem'
                >
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Gas Cost'
                    value={inputData.gasCost}
                    onChange={
                        (e)=> {setInputData({...inputData, gasCost: e.target.value})}
                    }
                    />
                    <Input
                    type='date'
                    style={{paddingRight: '1rem'}}
                    variant = 'blueInput'
                    placeholder = 'Gas Use Date'
                    value={inputData.gasUseDate}
                    onChange={
                        (e)=> {setInputData({...inputData, gasUseDate: e.target.value})}
                    }
                    />
                </Box>
                <Box
                display = 'flex'
                padding = '0.5rem'
                >
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Electricity'
                    value={inputData.electricity}
                    onChange={
                        (e)=> {setInputData({...inputData, electricity: e.target.value})}
                    }
                    />
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Kirana'
                    value={inputData.kirana}
                    onChange={
                        (e)=> {setInputData({...inputData, kirana: e.target.value})}
                    }
                    />
                    <Input
                    variant = 'blueInput'
                    placeholder = 'Coal'
                    value={inputData.coal}
                    onChange={
                        (e)=> {setInputData({...inputData, coal: e.target.value})}
                    }
                    />
                </Box>
            </Box>
            <Button
            type='submit'
            marginTop= '1rem'
            variant = 'button1'
            onClick = {handleSubmit}
            >Save</Button>


        </Box>
        :
        <Box
        height = '100vh'
        color='green'
        fontWeight = 'bold'
        display='flex'
        justifyContent='center'
        alignItems='center'
        >{response}</Box>
                }
    </>

    )
}




export default DaySale
