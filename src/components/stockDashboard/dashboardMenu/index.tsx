import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const DashboardMenu = () => {
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
            <FilterChip key={filter}>{filter}</FilterChip>
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
