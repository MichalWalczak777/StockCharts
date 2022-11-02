import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  CurrencySelect,
  FilterChip,
  FilterChips,
  FilterChipsWrapper,
  InputWrapper,
  SearchButton,
  SearchForm,
  SearchInput,
} from "./styles";
import { currencies, filters } from "./utils";

interface IDashboardMenuProps {
    orderSetter: Dispatch<SetStateAction<string>>;
  orderFilter: string;
}

const DashboardMenu = ({
  orderSetter,
  orderFilter,
}: IDashboardMenuProps) => {
  const handleActiveFilter = (event: any) => {
    const chipValue = event.target.attributes.getNamedItem("data-value").value;
    orderSetter(chipValue);
  };

  return (
    <>
      <SearchForm>
        <InputWrapper>
          <SearchInput
            id="search"
            type="text"
            placeholder="Search cryptocurrency..."
          />
          <SearchButton id="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} fontSize="1.25rem" />
          </SearchButton>
        </InputWrapper>
      </SearchForm>
      <FilterChipsWrapper>
        <FilterChips>
          {filters?.map((filter) => (
            <FilterChip
              selected={filter.filter === orderFilter}
              key={filter.filter}
              data-value={filter.filter}
              onClick={handleActiveFilter}
            >
              {filter.name}
            </FilterChip>
          ))}
        </FilterChips>
        <CurrencySelect name="currency">
          {currencies?.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </CurrencySelect>
      </FilterChipsWrapper>
    </>
  );
};

export default DashboardMenu;
