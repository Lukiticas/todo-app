import Filter from "../Filter/Filter.component";
import {
  ClearCompletedButton,
  ItemsRemainingSpan,
  MainFooterBody,
} from "./MainFooter.styles";

interface MainFooterProps {
  itemsRemaining: number | string;
  handleFilter: (value: string) => void;
  handleClear: () => void;
}

const MainFooter = ({
  itemsRemaining,
  handleFilter,
  handleClear,
}: MainFooterProps) => {
  return (
    <MainFooterBody>
      <ItemsRemainingSpan>
        {itemsRemaining
          ? `${itemsRemaining} item${itemsRemaining > 1 ? "s" : null} left`
          : "no task, add one!"}
      </ItemsRemainingSpan>
      <Filter
        handleFilter={handleFilter}
        filters={[
          { name: "all", isPartOf: "filters" },
          { name: "active", isPartOf: "filters" },
          { name: "completed", isPartOf: "filters" },
        ]}
      />
      <ClearCompletedButton onClick={handleClear}>
        Clear Completed
      </ClearCompletedButton>
    </MainFooterBody>
  );
};

export default MainFooter;
