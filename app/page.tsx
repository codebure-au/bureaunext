import FreeCellSummary from "./FreeCellSummary";
import SolitaireSummary from "./SolitaireSummary";
import Title from "./Title";

export default function Root() {
  return (
    <main className="page">
      <Title text="BURE" />
      <div className="page-content">
        <FreeCellSummary />
        <SolitaireSummary />
      </div>
    </main>
  );
}
