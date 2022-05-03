import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '../Components/Library/Box'
import Input from '../Components/InputStyle'
import Button from '../Components/ButtonStyle'
import Loader from '../Components/Loader/Loader'
import Tick from '../Components/Tick/Tick'
import Logo from '.././images/dadaLogo.png'
import { Link } from 'react-router-dom'
import { saveDaySaleAction } from '../Redux/baseAction'
import { SAVE_DAYSALE_RESET } from '../Redux/baseConstant'

const DaySale = () => {
    const dispatch = useDispatch();
    const saveDaySale = useSelector((state) => state.saveDaySale);

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

    useEffect(() => {
        if(saveDaySale && saveDaySale.data && saveDaySale.data.success === true){
            setLoading(false)
            setResponse(saveDaySale.data.message)
        }
    }, [saveDaySale]);

    useEffect(
		() => {
			return () => {
				dispatch({ type: SAVE_DAYSALE_RESET });
			};
		},
		[ dispatch ]
	);

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
            kirana: inputData.kirana,
            coal: inputData.coal,
            dailyExpense: inputData.expense,
            dailySale: inputData.sale,
        }

        setLoading(true)
        dispatch(saveDaySaleAction(formData))
        //dispatch(monthTotalAction())
    }
    return (
        <>
        {
        loading ?
            <Loader/>
        :
            response === ''?

            <Box
            height= '100vh'
            display='flex'
            flexDirection='column'
            >
                <Box
                mt='1rem'
                pr='1rem'
                display='flex'
                justifyContent='flex-end'
                >
                    <Link to='/dashboard'>
                        <img alt='dashboard_logo' style={{width: '3rem', height: '3rem'}} src={Logo}/>
                    </Link>

                    {/* <Box fontWeight='bold'>Dashboard</Box> */}
                </Box>
                <Box
                height='100%'
                display = 'flex'
                justifyContent = 'center'
                alignItems = 'center'
                flexDirection = 'column'>
                    <Box display = 'flex' flexDirection = 'column' justifyContent='center' alignItems = 'center' width={['60%', '20%']}>
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
                    <option value='mar'>March</option>
                    <option value='april'>March</option>
                    <option value='may'>March</option>
                    <option value='june'>March</option>
                    <option value='july'>March</option>
                    <option value='aug'>March</option>
                    <option value='sept'>March</option>
                    <option value='oct'>March</option>
                    <option value='nov'>March</option>
                    <option value='dec'>March</option>
                    <option value='test'>Test</option>
                    <option></option>
                </select>
                <Box fontWeight='bold'>Date:</Box>
                    <Input
                    style={{paddingRight: '1rem', backgroundColor : '#2F4858'}}
                        type='date'
                        variant = 'blackInput'
                        placeholder = 'Date'
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
                    type='number'
                    variant = 'blackInput'
                    placeholder = 'Other Expenses'
                    value={inputData.expense}
                    onChange={
                        (e)=> {setInputData({...inputData, expense: e.target.value})}
                    }
                    />
                    <Input
                    type='number'
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
                    type='number'
                    variant = 'blueInput'
                    placeholder = 'Chicken Kg'
                    value={inputData.chickenKg}
                    onChange={
                        (e)=> {setInputData({...inputData, chickenKg: e.target.value})}
                    }
                    />
                    <Input
                    type='number'
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
                    type='number'
                    variant = 'blackInput'
                    placeholder = 'Firoz'
                    value={inputData.firoz}
                    onChange={
                        (e)=> {setInputData({...inputData, firoz: e.target.value})}
                    }
                    />
                    <Input
                    type='number'
                    variant = 'blackInput'
                    placeholder = 'Yadav Ji'
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
                    type='number'
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
                    type='number'
                    variant = 'blueInput'
                    placeholder = 'Electricity'
                    value={inputData.electricity}
                    onChange={
                        (e)=> {setInputData({...inputData, electricity: e.target.value})}
                    }
                    />
                    <Input
                    type='number'
                    variant = 'blueInput'
                    placeholder = 'Kirana'
                    value={inputData.kirana}
                    onChange={
                        (e)=> {setInputData({...inputData, kirana: e.target.value})}
                    }
                    />
                    <Input
                    type='number'
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

        </Box>
        :
        <Box
        height = '100vh'
        color={response === 'Error'? 'red' :'green'}
        fontWeight = 'bold'
        display='flex'
        flexDirection= 'column'
        justifyContent='center'
        alignItems='center'
        fontSize = '26px'
        >
            {response}
            {
                response === 'Error'?
                null
                :
                <Tick/>
            }
            <Link to='/dashboard'>
                        Check Dashboard
            </Link>
            </Box>

                }
    </>

    )
}




export default DaySale
