import { MainFooterProps } from "../../interfaces";
import Filter from "../Filter/Filter.component";
import * as MF from "./MainFooter.styles";

const MainFooter = (props: MainFooterProps) => {
  const { itemsRemaining, handleQuery, handleClear } = props;

  const hasItensMessage = `${itemsRemaining} ${
    itemsRemaining > 1 ? "items" : "item"
  } left`;
  const noItemsMessage = "no task, add one!";

  return (
    <MF.MainFooterBody>
      <MF.ItemsRemainingSpan>
        {itemsRemaining ? hasItensMessage : noItemsMessage}
      </MF.ItemsRemainingSpan>
      <Filter
        handleQuery={handleQuery}
        filters={[
          { name: "all", isPartOf: "filters" },
          { name: "active", isPartOf: "filters" },
          { name: "completed", isPartOf: "filters" },
        ]}
      />
      <MF.ClearCompletedButton onClick={handleClear}>
        Clear Completed
      </MF.ClearCompletedButton>
    </MF.MainFooterBody>
  );
};

export default MainFooter;
