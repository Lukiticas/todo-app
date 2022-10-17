import { useEffect, useState } from "react";
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
  handleFilter: (value: string) => void;
}

const Filter = ({ filters, handleFilter }: FilterProps) => {
  const [filter, setFilter] = useState({ name: "" });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ name: target.id });
  };

  useEffect(() => {
    handleFilter(filter.name.toLowerCase());
  }, [filter]);

  const radios = filters.map((el) => (
    <>
      <FooterFilterRadio
        checked={filter.name === el.name}
        onChange={(event) => handleChange(event)}
        id={el.name}
        type="radio"
        name={el.isPartOf}
      />
      <FooterFilterLabel htmlFor={el.name}>{el.name}</FooterFilterLabel>
    </>
  ));
  return <FooterFilterBody>{radios}</FooterFilterBody>;
};

export default Filter;
