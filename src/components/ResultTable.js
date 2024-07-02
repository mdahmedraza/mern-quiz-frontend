import React from 'react';

function ResultTable(){
    return(
        <div>
            <h2>table result</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <td>name</td>
                        <td>attempts</td>
                        <td>earn points</td>
                        <td>reuslt</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>daily tution</td>
                        <td>03</td>
                        <td>20</td>
                        <td>passed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable;