import { nanoid } from "nanoid";
import { Fragment } from "react";
import { FilterProps } from "../../interfaces";
import * as F from "./Filter.styles";

const Filter = (props: FilterProps) => {
  const { filters, handleQuery } = props;
  const { query, setQuery } = handleQuery;

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(target.id);
  };

  const radios = filters.map((el) => (
    <Fragment key={nanoid()}>
      <F.FooterFilterRadio
        name={el.isPartOf}
        id={el.name}
        type="radio"
        title={el.name}
        onChange={handleChange}
        checked={query === el.name}
      />
      <F.FooterFilterLabel key={nanoid()} htmlFor={el.name}>
        {el.name}
      </F.FooterFilterLabel>
    </Fragment>
  ));

  return <F.FooterFilterBody>{radios}</F.FooterFilterBody>;
};

export default Filter;
