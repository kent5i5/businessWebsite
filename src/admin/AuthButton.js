import React from 'react';
import {ReactDOM,useState} from 'react-dom';
import styled from 'styled-components';
import ModalContainer  from './AuthPanel';


export const MainButton = styled.button`
`;

export function AuthButton() {

    // const [open, setOpen] = useState(false);
    // const [data, setData] = useState({ clicks: 0 });
    
    return (
      <div>
        <div>Clicks: {}</div>
        <MainButton
          onClick={() => {
            // setOpen(true);
          }}
        >
          OPEN MODAL
        </MainButton>
        {true && (
          <ModalContainer
           // {...props}
            // setOpen={setOpen}
            // data={data}
            // setData={setData}
          />
        )}
      </div>
    );
}

export default AuthButton;
  
  