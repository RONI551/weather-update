import './table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import img from '../../assets/cloud.png'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

function Datatable() {
  return (
    <div className="table">
 
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700, }} aria-label="spanning table">
      <TableHead>
        <TableRow>
          <TableCell rowSpan={3}/>
          <TableCell><span className='green-color'> w1</span></TableCell>
          <TableCell><span className='green-color'> w2</span></TableCell>
          <TableCell><span className='green-color'> w3</span></TableCell>
          <TableCell><span className='green-color'> w4</span></TableCell>
          <TableCell><span className='green-color'> w5</span></TableCell>
          <TableCell><span className='green-color'> 01/24</span></TableCell>
          <TableCell><span className='green-color'> 01/25</span></TableCell>
          <TableCell><span className='green-color'> 01/26</span></TableCell>
          <TableCell><span className='green-color'> 01/27</span></TableCell>
          <TableCell><span className='green-color'> 01/28</span></TableCell>
          <TableCell><span className='green-color'> 01/29</span></TableCell>
          <TableCell><span className='green-color'> 01/30</span></TableCell>
          
          <TableCell rowSpan={2}> <span  className='green-color'>Sales % Total <br className='wds-total'/> Wds % Total</span>  </TableCell>
          
        </TableRow>
        <TableRow> 
        <TableCell rowSpan={3}/>
        <TableCell  rowSpan={3}/> 
        <TableCell  rowSpan={3}/> 
        <TableCell  rowSpan={3}/> 
        <TableCell  rowSpan={3}/>
        <TableCell> Mon</TableCell>
        <TableCell> Tue</TableCell>
        <TableCell> Wed</TableCell>
        <TableCell> Thu</TableCell>
        <TableCell> Fri</TableCell>
        <TableCell> Sat</TableCell>
        <TableCell> Sun</TableCell>
      
       
        </TableRow>
      </TableHead>
      <TableBody>
        
          <TableRow sx={{border:"2px solid #00aa80"}}>
          <TableCell><span className='green-color'>Catagory</span></TableCell>
          <TableCell> </TableCell>
          <TableCell> 01/09-01/29</TableCell>
          <TableCell> 01/10-01/16 </TableCell>
          <TableCell>  01/17-01/23</TableCell>
          <TableCell> 01/09-01/29</TableCell>
          <TableCell> 03/09-04/29</TableCell>
         
          <TableCell sx={{padding:'0'}} ><div className='thunderlogo'> <img src={img} width="25px" alt="cloud" /> <span>91°/86°</span> </div> </TableCell>
          <TableCell ><div className='thunderlogo'><img src={img} width="25px" alt="cloud" /> <span>81°/56°</span> </div></TableCell>
          <TableCell ><div className='thunderlogo'> <img src={img} width="25px" alt="cloud" /> <span>81°/56°</span> </div> </TableCell>
          <TableCell ><div className='thunderlogo'><img src={img} width="25px" alt="cloud" /> <span>91°/66°</span></div>  </TableCell>
          <TableCell ><div className='thunderlogo'><img src={img} width="25px" alt="cloud" /> <span>33°/36°</span></div> </TableCell>
          <TableCell ><div className='thunderlogo'><img src={img} width="25px" alt="cloud" /> <span>31°/53°</span> </div> </TableCell>
          <TableCell ><div className='thunderlogo'> <img src={img} width="25px" alt="cloud" /> <span>31°/56°</span></div> </TableCell>
         
          
        
          </TableRow>
        
        <TableRow sx={{border:"2px solid #00aa80"}}>
        <TableCell rowSpan={2}><span className='green-color'> PSA-Total</span></TableCell>
        <TableCell align='center'><span className='green-color'>sales</span></TableCell>
        <TableCell align='center'><span className='green-color'> 41</span></TableCell>
        <TableCell align='center'><span className='green-color'>7</span> </TableCell>
        <TableCell align='center'><span className='green-color'>10</span></TableCell>
        <TableCell align='center'><span className='green-color'>7</span></TableCell>
        <TableCell align='center'><span className='green-color'>12</span></TableCell>
        <TableCell align='center'><span className='green-color'>10</span></TableCell>
        <TableCell align='center'><span className='green-color'>10</span></TableCell>
        <TableCell align='center'><span className='green-color'>10</span></TableCell>
        <TableCell align='center'><span className='green-color'>100.0</span></TableCell>
        <TableCell align='center'><span className='green-color'>-</span></TableCell>
        <TableCell align='center'><span className='green-color'>-</span></TableCell>
        <TableCell align='center'><span className='green-color'>-</span></TableCell>
        
        </TableRow>
        <TableRow sx={{border:"2px solid #00aa80"}}>
        <TableCell align='center'><span className='green-color'>sales</span></TableCell>
        <TableCell align='center'><span className='green-color'> 1</span></TableCell>
        <TableCell align='center'><span className='green-color'>2</span> </TableCell>
        <TableCell align='center'><span className='green-color'>1</span></TableCell>
        <TableCell align='center'><span className='green-color'>7</span></TableCell>
        <TableCell align='center'><span className='green-color'>3</span></TableCell>
        <TableCell align='center'><span className='green-color'>1</span></TableCell>
        <TableCell align='center'><span className='green-color'>10</span></TableCell>
        <TableCell align='center'><span className='green-color'>10</span></TableCell>
        <TableCell align='center'><span className='green-color'>00.0</span></TableCell>
        <TableCell align='center'><span className='green-color'>-</span></TableCell>
        <TableCell align='center'><span className='green-color'>-</span></TableCell>
        <TableCell align='center'><span className='green-color'>-</span></TableCell>
        </TableRow>
        <TableRow>
        <TableCell rowSpan={3}><div className="thunderlogo"><RadioButtonUncheckedIcon/><span>Daily-Food</span></div></TableCell>
          <TableCell align='center'> <span className='green-color'>Del</span></TableCell>
          <TableCell align='center'><span className="boldSpan">294</span> </TableCell>
          <TableCell align='center'><span className="boldSpan">394</span></TableCell>
          <TableCell align='center'><span className="boldSpan">444</span></TableCell>
          <TableCell align='center'><span className="boldSpan">454</span></TableCell>
          <TableCell align='center'><span className="boldSpan">345</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">3</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'></TableCell>
        </TableRow>
        <TableRow>
          
          <TableCell align='center'> <span className='green-color'>wds</span></TableCell>
          <TableCell align='center'><span className="boldSpan">2</span> </TableCell>
          <TableCell align='center'><span className="boldSpan">4</span></TableCell>
          <TableCell align='center'><span className="boldSpan">4</span></TableCell>
          <TableCell align='center'><span className="boldSpan">4</span></TableCell>
          <TableCell align='center'><span className="boldSpan">4</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">8</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'></TableCell>
        </TableRow>
        <TableRow>
          
          <TableCell align='center'> <span className='green-color'>Del</span></TableCell>
          <TableCell align='center'><span className="boldSpan">0</span> </TableCell>
          <TableCell align='center'><span className="boldSpan">4</span></TableCell>
          <TableCell align='center'><span className="boldSpan">7</span></TableCell>
          <TableCell align='center'><span className="boldSpan">4</span></TableCell>
          <TableCell align='center'><span className="boldSpan">3</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">1</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'></TableCell>
        </TableRow>
        <TableRow>
          <TableCell rowSpan={3}><div className="thunderlogo"><RadioButtonUncheckedIcon/><span>  Rating</span></div></TableCell>
          <TableCell align='center'> <span className='green-color'>wds</span></TableCell>
          <TableCell align='center'><span className="boldSpan">2</span> </TableCell>
          <TableCell align='center'><span className="boldSpan">3</span></TableCell>
          <TableCell align='center'><span className="boldSpan">4</span></TableCell>
          <TableCell align='center'><span className="boldSpan">4</span></TableCell>
          <TableCell align='center'><span className="boldSpan">3</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'></TableCell>
        </TableRow>
        <TableRow>
          
          <TableCell align='center'><span className='green-color'>Sales</span></TableCell>
          <TableCell align='center'><span className="boldSpan">4</span> </TableCell>
          <TableCell align='center'><span className="boldSpan">5</span></TableCell>
          <TableCell align='center'><span className="boldSpan">4</span></TableCell>
          <TableCell align='center'><span className="boldSpan">9</span></TableCell>
          <TableCell align='center'><span className="boldSpan">5</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'></TableCell>
        </TableRow> 
        <TableRow>
          
          <TableCell align='center'><span className='green-color'>wds</span></TableCell>
          <TableCell align='center'><span className="boldSpan">1</span> </TableCell>
          <TableCell align='center'><span className="boldSpan">1</span></TableCell>
          <TableCell align='center'><span className="boldSpan">1</span></TableCell>
          <TableCell align='center'><span className="boldSpan">1</span></TableCell>
          <TableCell align='center'><span className="boldSpan">1</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'><span className="boldSpan">-</span></TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'>-</TableCell>
          <TableCell align='center'></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
    
    </div>
  )
}

export default Datatable