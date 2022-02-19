import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '../Components/Library/Box';
import Loader from '../Components/Loader/Loader';
import { monthTotalAction } from '../Redux/baseAction';

const Dashboard = () => {
  const dispatch = useDispatch();

  const monthTotal = useSelector((state) => state.monthTotal);
  console.log(monthTotal);

  const [totalData, setTotalData] = useState('');
  const [selectMonth, setSelectMonth] = useState('');

  useEffect(() => {
    if(selectMonth){
      console.log({selectMonth})
      dispatch(monthTotalAction(selectMonth))
    }

  }, [dispatch, selectMonth]);

  useEffect(() => {
    if(monthTotal && monthTotal.data){
      setTotalData(monthTotal.data)
      console.log(totalData);
    }
  }, [monthTotal, totalData]);

  return (

    monthTotal && monthTotal.loading?
      <Loader/>
    :
    <>
    <Box padding= '1rem'>
      <Link to='/'>
        Go Back
      </Link>
    </Box>
    <Box
    height= '100vh'
    display='flex'
    flexDirection='column'
    alignItems = 'center'
    justifyContent = 'center'
    textAlign = 'center'

    >
      <Box padding = '1rem'>
      <Box fontWeight='bold'>Choose Month:</Box>
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
            value={selectMonth}
            onChange={
                (e)=> {setSelectMonth( e.target.value)}
            }
          >
          <option value=''>Select</option>
          <option value='jan'>January</option>
          <option value='feb'>February</option>
          <option value='mar'>March</option>
          <option value='test'>Test</option>
          <option></option>
        </select>
      </Box>

      <Box mb='1rem'>
        <Box>Expense This Month</Box>
        <Box fontWeight = 'bold'>{totalData.expense}</Box>
      </Box>
      <Box mb='1rem'>
        <Box>Sale This Month</Box>
        <Box fontWeight = 'bold'>{totalData.sale}</Box>
      </Box>
      <Box>
        <Box>Net Profit This Month</Box>
        <Box fontWeight = 'bold'>{totalData.nProfit}</Box>
      </Box>

    </Box>
    </>
  )
};

export default Dashboard;
