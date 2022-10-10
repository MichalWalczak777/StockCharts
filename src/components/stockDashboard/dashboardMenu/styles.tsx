import styled from "styled-components";


export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.div`
width: 50%;
border: 2px solid #767676;
border-radius: 4px;
display: inline-flex;
justify-content: space-between;
`;

export const SearchInput = styled.input`
width: 90%;
  padding: 10px;
  height: 2rem;
  border: none;
  &:focus-visible {
    outline: none;
  }
`;

export const SearchButton = styled.button`
min-width: 50px;
  background-color: #fff;
  height: 100%;
  border: none;
`;

export const FilterChipsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterChips = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: flex-start;
`;

export const FilterChip = styled.div`
border: 2px solid #767676;
padding: 7px;
  border-radius: 16px;
  margin-right: 10px;
`

export const CurrencySelect = styled.select`
  height: 40px;
  align-self: flex-end;
`
