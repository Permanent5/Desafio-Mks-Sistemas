import styled from "styled-components";

const ShopCardConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 379px;
  height: 95px;

  background-color: #fff;
  border-radius: 8px;
  box-shadow: -2 2 10 0 #000 5%;

  margin-top: 20px;

  
  img {
    width: 46px;
    height: 57px;

    margin-right: 21px;
  }

  > p {
    font-style: "Montserrat" !important;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: #2c2c2c;

    width: 113px;
    height: 33px;

    margin-right: 9px;
  }

  span {
    font-style: "Montserrat";
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
`;

const AddOrRemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 33px;
  margin-right: 40px;

  background-color: #fff;
  border-style: solid;
  border-width: 1px;
  border-color: #bfbfbf60;
  border-radius: 4px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

width: 30px;

    margin: auto auto;
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-color: #BFBFBF60;
  }

  button {
    border-width: 0px;
    background-color: #fff;
  }
`;

const ExcludeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 18px;
  height: 18px;

  background-color: #000;
  border-radius: 100px;
  position: absolute;
  right: -5px;
  top: -5px;

  p {
    font-style: "Montserrat";
    font-weight: 400;
    font-size: 14px;
    color: #fff;
  }
`;

export { ShopCardConteiner, ExcludeButton, AddOrRemoveButton };
