import React, { Component } from "react";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {ReactDOM,useState} from 'react-dom';
import styled from 'styled-components';

const Modal = styled.div`
  max-width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 200px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
`;
export const ModalContent = styled.div`
  overflow: auto;
  min-height: 200px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;
export const ModalFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;
export const ConfirmButton = styled.div`
  margin: 10px;
  color: white;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: blue;
`;
const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;
const ModalBanner = styled.div`
  margin-bottom: 20px;
  background-color: blue;
  color: white;
  padding: 10px;
`;
const Input = styled.input`
  text-align: right;
  width: 200px;
  margin-left: 15px;
`;
export const MainButton = styled.button`
`;

function ModalContainer({ setOpen, data, setData }) {
  // const [localData, setLocalData] = useState(data);
  // const { clicks } = localData;
  function close() {
    setOpen(false);
  }
  function submit() {
    setData({
      // clicks,
    });
    close();
  }
  const content = new Array(1).fill(
    <p>
      Edit the clicks below by clicking on the number input or typing in your
      own value.
    </p>,
  );
  return(
    <>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalBanner>Edit Clicks</ModalBanner>
        <ModalContent>
          {content}
          <label>
            Clicks
            <Input
              value={""}
              type="number"
              // onChange={e => setLocalData({ clicks: e.target.value })}
            />
          </label>
        </ModalContent>
        <ModalFooter>
          <ConfirmButton onClick={submit}> Submit </ConfirmButton>
        </ModalFooter>
      </Modal>
    </>,
    document.getElementById('app-modal')
  );
}

export default ModalContainer;