import React from 'react';
import { useGetAllUserQuery } from "./slices/postApi";
import ReactExport from "react-export-excel";
import "./employeeStyle.css";
import Button from '@mui/material/Button';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Employee = () => {

    const responseInfo = useGetAllUserQuery();

    const resultList = responseInfo.data ? (
        responseInfo.data.map((item) => {
            return(
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
            </tr>
            );
        })
    ) : (
        <tr>
            <td colSpan="6" style={{textAlign: 'center'}}>Loading.....</td>
        </tr>
    );

    return (
        <div>
            <h2 style={{textAlign:'center'}}>EMPLOYEE DETAILS</h2>
            <ExcelFile element={<Button variant="contained">Export</Button >}>
                <ExcelSheet dataSet={responseInfo.data} name="Employees">
                    <ExcelColumn label="name" value="name" />
                    <ExcelColumn label="username" value="username" />
                    <ExcelColumn label="email" value="email" />
                    <ExcelColumn label="phone" value="phone" />
                    <ExcelColumn label="website" value="website" />
                </ExcelSheet>
            </ExcelFile>
            <br />
            <br />
            <br />
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {resultList}
                </tbody>
            </table>
        </div>
    );
};

export default Employee;