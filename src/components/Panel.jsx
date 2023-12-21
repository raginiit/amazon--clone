
import React from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
function Panel(props) {
    return (
        <div class='panel'>
            <div class="panel-all">
             < MenuOutlinedIcon/>
                All
                </div> 
                <div class="panel-opps">
                 <p> Today's Deals</p>
                 <p>Customers Service </p>
                 <p>Registry</p>
                 <p>Gifts Cards</p>
                 <p>Sell</p>

                    <div class="panel-deals">
                        shop deals in Electronics
  
                    </div>
    
                </div>
        </div>
    );
}

export default Panel;