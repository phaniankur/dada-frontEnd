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

  useEffect(() => {
    dispatch(monthTotalAction())
  }, [dispatch]);

  useEffect(() => {
    if(monthTotal && monthTotal.data){
      setTotalData(monthTotal.data)
      console.log(totalData);
    }
  }, [monthTotal]);

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
