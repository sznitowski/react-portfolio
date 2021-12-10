import * as React from 'react';
import Data from "./Data";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import { Player } from 'video-react';


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

      {Data.map((item) =>
        <>
          <Bounce>
            <div className="main-card-container">

              <h2 className="title">{item.title}</h2>
              <div className="card-body">

                <h5 className="subtitle">{item.subtitle}</h5>
                {item.id}

                <div className="card-video mb-3">
                  <Player
                    src={item.video}          
                  
                  
                    light="https://i.stack.imgur.com/zw9Iz.png"
                
                  />
                </div>

                <Stack
                  id='tooltip'
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >

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

                  <Button
                    color="info"
                    outline variant="contained" href={item.url} target='_blank'>Code</Button>

                </Stack>

              </div>
            </div>
          </Bounce>
        </>

      )
      }

    </div>
  );
}