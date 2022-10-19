import { nanoid } from "nanoid";
import { Fragment } from "react";

import {
  FooterFilterBody,
  FooterFilterLabel,
  FooterFilterRadio,
} from "./Filter.styles";

interface Filter {
  name: string;
  isPartOf: string;
}

interface FilterProps {
  filters: Filter[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ filters, query, setQuery }: FilterProps) => {
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(target.id);
  };

  const radios = filters.map((el, idx) => (
    <Fragment key={nanoid()}>
      <FooterFilterRadio
        name={el.isPartOf}
        id={el.name}
        type="radio"
        title={el.name}
        onChange={(event) => handleChange(event)}
        checked={query === el.name}
      />
      <FooterFilterLabel key={nanoid()} htmlFor={el.name}>
        {el.name}
      </FooterFilterLabel>
    </Fragment>
  ));
  return <FooterFilterBody>{radios}</FooterFilterBody>;
};

export default Filter;
