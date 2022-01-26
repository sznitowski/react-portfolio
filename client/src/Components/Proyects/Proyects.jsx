import * as React from 'react';
import Data from "./Data";
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


import Bounce from 'react-reveal/Bounce';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import './proyects.scss';

export default function Proyects() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0)',
      boxShadow: theme.shadows[4],
      fontSize: 12,

    },
  }));

  return (
    <div class="card-container" id="proyects">

      <h3 className="text-center">Proyects</h3>

      {Data.map((item) =>
        <>
          <Bounce>
            <div className="main-card-container">

              <h2 className="card-title">{item.title}</h2>
              <div className="card-body">

                <h5 className="subtitle">{item.subtitle}</h5>
                {item.id}

                <div className="card-image mb-3">
                <img src={item.image}/>
                </div>


                <LightTooltip
                  className='info-container'
                  outline variant="contained"
                  open={open} onClose={handleClose}
                  onOpen={handleOpen}
                  title={item.description}
                >
                  <Button
                    color="info"
                  >Info
                  </Button>
                </LightTooltip>
                &nbsp;&nbsp;&nbsp;
                <Button
                  color="info"
                  outline variant="contained" href={item.url} target='_blank'>Code</Button>


              </div>
            </div>
          </Bounce>
        </>

      )
      }

    </div>
  );
}