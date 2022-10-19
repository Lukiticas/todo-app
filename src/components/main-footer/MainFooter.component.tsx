import Filter from "../Filter/Filter.component";
import {
  ClearCompletedButton,
  ItemsRemainingSpan,
  MainFooterBody,
} from "./MainFooter.styles";

interface MainFooterProps {
  itemsRemaining: number | string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  filterValue: string;
  handleClear: () => void;
}

const MainFooter = ({
  itemsRemaining,
  setFilterValue,
  filterValue,
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
        query={filterValue}
        setQuery={setFilterValue}
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
