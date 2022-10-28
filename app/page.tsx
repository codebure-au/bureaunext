import FreeCellSummary from "./FreeCellSummary";
import Title from "./Title";

export default function Root() {
  return (
    <main className="page">
      <Title text="BURE" />
      <FreeCellSummary />
    </main>
  );
}
